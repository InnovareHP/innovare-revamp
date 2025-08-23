"use client";

import { createAttendance } from "@/app/(protected)/[organization]/attendance/action";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { Loader2, Plus, Save, Trash } from "lucide-react";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const attendanceSchema = z.object({
  timeType: z.enum(["time-in", "time-out"]),
  tasks: z
    .array(
      z.object({
        description: z.string().min(1, "Task description is required"),
      })
    )
    .min(1, "You must have at least 1 task")
    .max(5, "You can only have up to 5 tasks"),
});

export type AttendanceFormValues = z.infer<typeof attendanceSchema>;

const AttendancePage = () => {
  const queryClient = useQueryClient();
  const [newTask, setNewTask] = useState("");

  const attendanceForm = useForm<AttendanceFormValues>({
    resolver: zodResolver(attendanceSchema),
    defaultValues: {
      timeType: "time-in",
      tasks: [],
    },
  });

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
      await createAttendance(data);

      toast.success("Attendance created successfully");

      queryClient.invalidateQueries({ queryKey: ["logs"] });
      attendanceForm.reset();
    } catch (error) {
      toast.error("Failed to create attendance");
    }
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
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
                  {/* Time Type Field */}
                  <FormField
                    control={attendanceForm.control}
                    name="timeType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Time Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select a time type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="time-in">Time In</SelectItem>
                            <SelectItem value="time-out">Time Out</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />

                  {/* New Task Input */}
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
                      />
                      <Button
                        type="button"
                        variant="outline"
                        onClick={handleAddTask}
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add
                      </Button>
                    </div>
                  </FormItem>
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
                disabled={attendanceForm.formState.isSubmitting}
              >
                {attendanceForm.formState.isSubmitting ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Save className="w-4 h-4 mr-2" />
                )}
                Submit Attendance
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default AttendancePage;
