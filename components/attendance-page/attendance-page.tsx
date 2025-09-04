"use client";

import { createAttendance } from "@/app/(protected)/[organization]/attendance/action";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { company_log_table } from "@/lib/generated/prisma";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import clsx from "clsx";
import { CheckCircle2, Loader2, Plus, Save, Trash } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

interface AttendancePageProps {
  log: company_log_table | null;
}

export const attendanceSchema = z.object({
  timeType: z.enum([
    "time-in",
    "break1-in",
    "break1-out",
    "lunch-in",
    "lunch-out",
    "break2-in",
    "break2-out",
    "time-out",
  ]),
  tasks: z
    .array(
      z.object({
        description: z.string().min(1, "Task description is required"),
      })
    )
    .min(0)
    .max(5, "You can only have up to 5 tasks"),
});

export type AttendanceFormValues = z.infer<typeof attendanceSchema>;

type TimeStep =
  | "time-in"
  | "break1-in"
  | "break1-out"
  | "lunch-in"
  | "lunch-out"
  | "break2-in"
  | "break2-out"
  | "time-out";

const FLOW: TimeStep[] = [
  "time-in",
  "break1-in",
  "break1-out",
  "lunch-in",
  "lunch-out",
  "break2-in",
  "break2-out",
  "time-out",
];

function getNextAction(
  log: company_log_table | null | undefined
): TimeStep | "done" {
  if (!log) return "time-in";

  const hasTimeIn = !!log.company_log_time_in;

  // Break 1 (in/out)
  const hasBreak1In = !!log.company_log_break_time_1;
  const hasBreak1Out = !!log.company_log_break_time_1_end;

  // Lunch (in/out)
  const hasLunchIn = !!log.company_log_break_time_lunch;
  const hasLunchOut = !!log.company_log_break_time_lunch_end;

  // Break 2 (in/out)
  const hasBreak2In = !!log.company_log_break_time_2;
  const hasBreak2Out = !!log.company_log_break_time_2_end;

  const hasTimeOut = !!log.company_log_time_out;

  if (!hasTimeIn) return "time-in";
  if (!hasBreak1In) return "break1-in";
  if (!hasBreak1Out) return "break1-out";
  if (!hasLunchIn) return "lunch-in";
  if (!hasLunchOut) return "lunch-out";
  if (!hasBreak2In) return "break2-in";
  if (!hasBreak2Out) return "break2-out";
  if (!hasTimeOut) return "time-out";
  return "done";
}

function labelFor(step: TimeStep | "done") {
  switch (step) {
    case "time-in":
      return "Time In";
    case "break1-in":
      return "Break 1 In";
    case "break1-out":
      return "Break 1 Out";
    case "lunch-in":
      return "Lunch In";
    case "lunch-out":
      return "Lunch Out";
    case "break2-in":
      return "Break 2 In";
    case "break2-out":
      return "Break 2 Out";
    case "time-out":
      return "Time Out";
    case "done":
      return "Completed";
  }
}

const AttendancePage = ({ log }: AttendancePageProps) => {
  const queryClient = useQueryClient();
  const [newTask, setNewTask] = useState("");

  const nextAction = useMemo(() => getNextAction(log), [log]);
  const isDayComplete = nextAction === "done";

  const attendanceForm = useForm<AttendanceFormValues>({
    resolver: zodResolver(attendanceSchema),
    defaultValues: {
      timeType: (nextAction === "done" ? "time-out" : nextAction) as TimeStep,
      tasks: [],
    },
  });

  useEffect(() => {
    if (nextAction !== "done") {
      attendanceForm.setValue("timeType", nextAction as TimeStep, {
        shouldDirty: false,
        shouldTouch: false,
      });
    }
  }, [nextAction, attendanceForm]);

  const {
    fields: taskFields,
    append: appendTask,
    remove: removeTask,
  } = useFieldArray({
    control: attendanceForm.control,
    name: "tasks",
  });

  const onSubmit = async (data: AttendanceFormValues) => {
    try {
      const enforced = nextAction === "done" ? "time-out" : nextAction;
      const payload: AttendanceFormValues = {
        ...data,
        timeType: enforced as TimeStep,
      };

      await createAttendance(payload);

      toast.success(`${labelFor(enforced as TimeStep)} recorded successfully`);
      await queryClient.invalidateQueries({ queryKey: ["logs"] });
      attendanceForm.reset({ timeType: enforced as TimeStep, tasks: [] });
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Failed to create attendance"
      );
    }
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const last = taskFields[taskFields.length - 1]?.description?.trim();
    if (last && last.toLowerCase() === newTask.trim().toLowerCase()) return;
    appendTask({ description: newTask });
    setNewTask("");
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Attendance</h1>
            <p className="text-gray-600 mt-1">
              Track your time and manage daily tasks
            </p>
          </div>
        </div>

        {/* Progress */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Today’s Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {FLOW.map((step) => {
                const done =
                  FLOW.indexOf(step) <
                  FLOW.indexOf(
                    (nextAction === "done"
                      ? "time-out"
                      : nextAction) as TimeStep
                  );
                const current = step === nextAction;
                return (
                  <Badge
                    key={step}
                    variant={
                      current ? "default" : done ? "secondary" : "outline"
                    }
                    className={clsx(
                      "px-3 py-1 rounded-full",
                      current && "ring-2 ring-offset-2"
                    )}
                  >
                    {labelFor(step)}
                    {done && <CheckCircle2 className="w-3 h-3 inline ml-1" />}
                  </Badge>
                );
              })}
              {isDayComplete && (
                <Badge variant="default" className="px-3 py-1 rounded-full">
                  Completed
                </Badge>
              )}
            </div>

            <div className="mt-3">
              {isDayComplete ? (
                <Alert>
                  <AlertTitle>All steps completed</AlertTitle>
                  <AlertDescription>
                    You have logged Time In, Break 1 (In/Out), Lunch (In/Out),
                    Break 2 (In/Out), and Time Out for today.
                  </AlertDescription>
                </Alert>
              ) : (
                <div className="text-sm text-gray-600">
                  Next step:{" "}
                  <span className="font-semibold">{labelFor(nextAction)}</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Form {...attendanceForm}>
          <form
            onSubmit={attendanceForm.handleSubmit(onSubmit)}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Daily Tasks</CardTitle>
                    <p className="text-sm text-gray-500 mt-1">
                      {taskFields.length} task(s)
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4 mb-4 flex-col">
                  {/* Time Type (locked) */}
                  <FormField
                    control={attendanceForm.control}
                    name="timeType"
                    render={({ field }) => {
                      const lockedValue = (
                        nextAction === "done" ? "time-out" : nextAction
                      ) as TimeStep;
                      return (
                        <FormItem>
                          <FormLabel>Time Type</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            value={lockedValue}
                            disabled
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value={lockedValue}>
                                {labelFor(lockedValue)}
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <p className="text-xs text-gray-500 mt-1">
                            Auto-advances to the next required step.
                          </p>
                        </FormItem>
                      );
                    }}
                  />

                  {/* Only allow adding tasks before Time In (keeps your behavior) */}
                  {!log?.company_log_time_in && (
                    <FormItem>
                      <FormLabel>Add Task</FormLabel>
                      <div className="flex gap-2">
                        <Input
                          value={newTask}
                          onChange={(e) => setNewTask(e.target.value)}
                          placeholder="Enter task description"
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault();
                              handleAddTask();
                            }
                          }}
                          disabled={isDayComplete}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handleAddTask}
                          disabled={isDayComplete}
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add
                        </Button>
                      </div>
                    </FormItem>
                  )}
                  <FormMessage>
                    {attendanceForm.formState.errors.tasks?.root?.message}
                  </FormMessage>
                </div>

                {/* Task List */}
                {taskFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex items-center justify-between border p-2 px-4 rounded-lg mb-2"
                  >
                    <span>{field.description}</span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => removeTask(index)}
                      disabled={isDayComplete}
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="flex justify-end">
              <Button
                type="submit"
                className="w-full"
                size="lg"
                disabled={
                  attendanceForm.formState.isSubmitting || isDayComplete
                }
              >
                {attendanceForm.formState.isSubmitting ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Save className="w-4 h-4 mr-2" />
                )}
                {isDayComplete ? "All Steps Completed" : "Submit Attendance"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AttendancePage;
