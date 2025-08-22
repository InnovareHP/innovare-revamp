"use client";

import {
  Bell,
  Briefcase,
  Filter,
  MessageSquare,
  MoreHorizontal,
  Search,
  UserPlus,
  Users,
} from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { buildChartData, formatDate } from "@/lib/helper";
import { AnalyticsService } from "@/services/analytics/analytics-service";
import { MemberService } from "@/services/member/member-sective";
import { useQuery } from "@tanstack/react-query";
import debounce from "lodash.debounce";
import { toast } from "sonner";
import { useUser } from "../provider/app-provider";
import { ReusableTable } from "../reusable-table/reusable-table";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import TeamChart from "./team-chart";

const Dashboard = () => {
  const { member } = useUser();
  const [memberTableField, setMemberTableField] = useState({
    page: 1,
    limit: 10,
    search: "",
  });

  const [performanceType, setPerformanceType] = useState<"weekly" | "monthly">(
    "weekly"
  );

  const { data: employees, isLoading } = useQuery({
    queryKey: ["employees", memberTableField],
    queryFn: async () =>
      MemberService.getMembers({
        page: memberTableField.page,
        limit: memberTableField.limit,
        search: memberTableField.search,
      }),
  });

  const { data: analytics } = useQuery({
    queryKey: ["analytics", performanceType],
    queryFn: async () => AnalyticsService.getAnalytics(performanceType),
  });

  const chartData = useMemo(() => {
    if (!analytics || !analytics.byEmployee) return [];
    return buildChartData(analytics.byEmployee ?? {}, performanceType);
  }, [analytics]);

  const handleRemoveFromTeam = async (memberId: string) => {
    try {
      await authClient.organization.removeMember({
        memberIdOrEmail: memberId,
        organizationId: member?.organizationId ?? "",
      });

      toast.success("Member removed from team successfully");
    } catch (error) {
      toast.error("Failed to remove member from team");
    }
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((val: string) => {
        setMemberTableField((prev) => ({
          ...prev,
          search: val,
        }));
      }, 500), // 500ms delay
    []
  );

  return (
    <div className="min-h-screen p-0 sm:p-6">
      <div className="max-w-8xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-1">Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <MessageSquare className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-white/10">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-2">Hi, {member?.user?.name}</h2>
          <p>In this report, you will find your HR status</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="backdrop-blur border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-yellow-100 rounded-full">
                      <Users className="w-6 h-6 text-yellow-600" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-gray-900">
                      {analytics?.totalEmployees ?? 0}
                    </p>
                    <p className="text-gray-600 font-medium">Total Employees</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Briefcase className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-gray-900">
                      {analytics?.totalHours ?? 0}
                    </p>
                    <p className="text-gray-600 font-medium">Total Hours</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/95 backdrop-blur border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-green-100 rounded-full">
                      <UserPlus className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-bold text-gray-900">
                      {analytics?.absenteeismByEmployee ?? 0}
                    </p>
                    <p className="text-gray-600 font-medium">
                      Absenteeism By Employee
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/95 backdrop-blur border-0">
              <CardHeader>
                <div className="flex flex-wrap gap-2 items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gray-900">
                    Employees
                  </CardTitle>
                  <div className="flex flex-wrap sm:flex-nowrap space-y-4 items-center space-x-3">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search"
                        value={memberTableField.search}
                        onChange={(e) => debouncedSearch(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                    <Button
                      variant="outline"
                      className="flex items-center space-x-2"
                    >
                      <Filter className="w-4 h-4" />
                      <span>Add filter</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ReusableTable
                  data={Array.isArray(employees?.data) ? employees.data : []}
                  columns={[
                    {
                      key: "user_name",
                      header: "Name",
                      render: (row) => (
                        <div className="flex items-center space-x-2">
                          <Avatar>
                            <AvatarImage src={row?.user_image} />
                            <AvatarFallback>
                              {row?.user_name?.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <span>{row?.user_name}</span>
                        </div>
                      ),
                    },
                    {
                      key: "user_email",
                      header: "Email",
                      render: (row) => row?.user_email,
                    },
                    {
                      key: "member_position",
                      header: "Role",
                      render: (row) => row?.member_position,
                    },
                    {
                      key: "member_created_at",
                      header: "Joined Date",
                      render: (row) =>
                        formatDate(
                          new Date(row?.member_created_at ?? "").toISOString()
                        ),
                    },
                    {
                      key: "action",
                      header: "Action",
                      render: (row) => (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => handleRemoveFromTeam(row?.id)}
                            >
                              Remove From Team
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ),
                    },
                  ]}
                  currentPage={memberTableField.page}
                  itemsPerPage={10}
                  onPageChange={(page) => {
                    setMemberTableField((prev) => ({
                      ...prev,
                      page,
                    }));
                  }}
                  totalCount={employees?.count}
                  emptyMessage="No employees found"
                  isLoading={isLoading}
                />
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/95 backdrop-blur border-0 relative h-full">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-900">
                Team Performance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <TeamChart data={chartData} mode="weekly" />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
