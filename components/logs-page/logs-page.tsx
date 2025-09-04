"use client";

import { Calendar, Clock, Timer } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { company_log_task_table } from "@/lib/generated/prisma";
import { formatDate, formatTime } from "@/lib/helper";
import { renderBreakCell } from "@/lib/utils";
import { LogsService } from "@/services/logs/logs-service";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ReusableTable } from "../reusable-table/reusable-table";
import { Form, FormControl, FormField, FormItem } from "../ui/form";

type Filters = {
  searchTerm: string;
  typeFilter: string;
  dateRange: string;
  currentPage: number;
  viewMode: "daily" | "detailed";
};

const TimeLogsPage = () => {
  const queryClient = useQueryClient();
  const defaultFilters: Filters = {
    searchTerm: "",
    typeFilter: "all",
    dateRange: "30",
    currentPage: 1,
    viewMode: "daily",
  };

  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const form = useForm<Filters>({
    defaultValues: defaultFilters,
  });

  const { data: logs, isLoading } = useQuery({
    queryKey: ["logs", filters],
    queryFn: () =>
      LogsService.getLogs({
        page: filters.currentPage,
        limit: 10,
        search: filters.searchTerm,
        dateType: filters.dateRange,
      }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });

  const onSubmit = (data: Filters) => {
    setFilters(data);
  };

  const handleClearFilters = () => {
    setFilters(defaultFilters);
    form.reset();
    queryClient.invalidateQueries({ queryKey: ["logs"] });
  };

  const paginatedData = logs?.data ?? [];

  const analytics = [
    {
      label: "Total Hours",
      value: logs?.analytics.totalHours,
      icon: <Clock />,
    },
    {
      label: "Total Days",
      value: logs?.analytics.completeDays,
      icon: <Calendar />,
    },
    {
      label: "Average Hours",
      value: logs?.analytics.avgHours,
      icon: <Clock />,
    },
  ];

  return (
    <div className="min-h-screen p-6rounded-xl">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Time Logs</h1>
            <p className="text-gray-600 mt-1">
              Track your attendance and activity logs
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {analytics.map((item) => (
            <Card key={item.label}>
              <CardHeader>
                <CardTitle>{item.label}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <div className="text-red-500">{item.icon}</div>

                  <div className="text-gray-600 text-2xl font-bold">
                    {item.value ?? 0}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="shadow-lg border-0">
          <CardContent className="p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 flex flex-wrap gap-4 items-start"
              >
                <FormField
                  control={form.control}
                  name="searchTerm"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Input
                          placeholder="Search task descriptions..."
                          className="w-64"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dateRange"
                  render={({ field }) => (
                    <FormItem className="flex items-center space-x-2">
                      <FormControl>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-40">
                            <SelectValue placeholder="Date Range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="7">Last 7 days</SelectItem>
                            <SelectItem value="30">Last 30 days</SelectItem>
                            <SelectItem value="90">Last 90 days</SelectItem>
                            <SelectItem value="all">All time</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Clear Filters */}
                {(filters.searchTerm ||
                  filters.typeFilter !== "all" ||
                  filters.dateRange !== "30") && (
                  <Button
                    variant="ghost"
                    onClick={handleClearFilters}
                    className="text-gray-500 hover:text-gray-700"
                    type="button"
                  >
                    Clear Filters
                  </Button>
                )}

                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        {/* Logs Table */}
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Timer className="w-5 h-5 text-blue-600" />
              <span>
                {filters.viewMode === "daily"
                  ? "Daily Summary"
                  : "Detailed Logs"}
              </span>
              <Badge variant="secondary">{logs?.count} records</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ReusableTable
              data={paginatedData}
              columns={[
                {
                  key: "company_log_created_at",
                  header: "Date",
                  render: (row) =>
                    formatDate(
                      new Date(row.company_log_created_at).toISOString()
                    ),
                },
                {
                  key: "company_log_time_in",
                  header: "Time In",
                  render: (row) =>
                    formatTime(new Date(row.company_log_time_in).toISOString()),
                },
                {
                  key: "company_log_time_out",
                  header: "Time Out",
                  render: (row) =>
                    row.company_log_time_out
                      ? formatTime(
                          new Date(row.company_log_time_out).toISOString()
                        )
                      : "Not recorded",
                },
                {
                  key: "company_log_break_time_1",
                  header: "Break 1",
                  render: (row) =>
                    renderBreakCell(
                      row,
                      "company_log_break_time_1",
                      "company_log_break_time_1_end"
                    ),
                },
                {
                  key: "company_log_break_time_lunch",
                  header: "Lunch",
                  render: (row) =>
                    renderBreakCell(
                      row,
                      "company_log_break_time_lunch",
                      "company_log_break_time_lunch_end"
                    ),
                },
                {
                  key: "company_log_break_time_2",
                  header: "Break 2",
                  render: (row) =>
                    renderBreakCell(
                      row,
                      "company_log_break_time_2",
                      "company_log_break_time_2_end"
                    ),
                },
                {
                  key: "tasks",
                  header: "Tasks",
                  render: (row) =>
                    row.tasks
                      .map(
                        (task: company_log_task_table) =>
                          task.company_log_task_description
                      )
                      .join(", "),
                },
              ]}
              currentPage={filters.currentPage}
              itemsPerPage={10}
              totalCount={logs?.count ?? 0}
              isLoading={isLoading}
              onPageChange={(page) =>
                setFilters((prev) => ({ ...prev, currentPage: page }))
              }
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TimeLogsPage;
