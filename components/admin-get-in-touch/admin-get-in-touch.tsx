"use client";

import { Copy, FileText, MailIcon, PhoneIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { formatDate, titleCase } from "@/lib/helper";
import { getGetInTouch } from "@/services/get-in-touch/get-in-touch-service";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import { ReusableTable } from "../reusable-table/reusable-table";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

const AdminGetInTouch = () => {
  const [filters, setFilters] = useState({
    page: 1,
    limit: 10,
  });

  const { data: getInTouch, isLoading } = useQuery({
    queryKey: ["get-in-touch", filters],
    queryFn: () => getGetInTouch(filters),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5,
  });

  const handleCopyEmail = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard");
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Get in Touch</h1>
            <p className="text-gray-600 mt-1">Manage your get in touch</p>
          </div>
        </div>

        <section className="space-y-6">
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <FileText className="w-5 h-5 text-blue-600" />
                <span>Get in Touch</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ReusableTable
                data={getInTouch?.data ?? []}
                columns={[
                  {
                    key: "contact",
                    header: "Contact",
                    render: (row) => (
                      <div className="flex items-start gap-3">
                        <div className="min-w-0">
                          <p className="font-medium text-gray-900 truncate max-w-[260px]">
                            {row.company_get_in_touch_name}
                          </p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    key: "email",
                    header: "Email",
                    render: (row) => (
                      <a
                        href={`mailto:${row.company_get_in_touch_email}`}
                        className="text-sm text-blue-600 hover:underline break-all"
                      >
                        {row.company_get_in_touch_email}
                      </a>
                    ),
                  },
                  {
                    key: "phone",
                    header: "Phone",
                    render: (row) => (
                      <a
                        href={`tel:${row.company_get_in_touch_phone}`}
                        className="text-sm text-gray-700 hover:underline"
                      >
                        {row.company_get_in_touch_phone || "—"}
                      </a>
                    ),
                  },
                  {
                    key: "method",
                    header: "Method",
                    render: (row) => (
                      <Badge variant="outline" className="text-xs">
                        {titleCase(
                          row.company_get_in_touch_contact_method ?? "Unknown"
                        )}
                      </Badge>
                    ),
                  },
                  {
                    key: "created_at",
                    header: "Date",
                    render: (row) => (
                      <div className="text-sm">
                        <p className="text-gray-900">
                          {formatDate(row.company_get_in_touch_created_at)}
                        </p>
                      </div>
                    ),
                  },
                  {
                    key: "view",
                    header: "View",
                    render: (row) => (
                      <Sheet>
                        <SheetTrigger asChild>
                          <Button variant="outline" size="sm">
                            <FileText className="mr-2 h-4 w-4" />
                            View
                          </Button>
                        </SheetTrigger>

                        <SheetContent side="right" className="sm:max-w-xl p-10">
                          <SheetHeader>
                            <SheetTitle className="text-left">
                              {row.company_get_in_touch_name}
                            </SheetTitle>
                            <SheetDescription className="text-left">
                              Inquiry details and contact preferences.
                            </SheetDescription>
                          </SheetHeader>

                          <div className="mt-6 space-y-6">
                            {/* Top meta */}
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">
                                {titleCase(
                                  row.company_get_in_touch_contact_method ??
                                    "Unknown"
                                )}
                              </Badge>
                              <span className="text-xs text-gray-500">
                                {formatDate(
                                  row.company_get_in_touch_created_at
                                )}
                              </span>
                            </div>

                            <Separator />

                            {/* Contact info */}
                            <div className="grid grid-cols-1 gap-4 text-sm">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <MailIcon className="h-4 w-4 text-gray-500" />
                                  <a
                                    href={`mailto:${row.company_get_in_touch_email}`}
                                    className="text-blue-600 hover:underline break-all"
                                  >
                                    {row.company_get_in_touch_email}
                                  </a>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() =>
                                    handleCopyEmail(
                                      row.company_get_in_touch_email || ""
                                    )
                                  }
                                  title="Copy email"
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>

                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <PhoneIcon className="h-4 w-4 text-gray-500" />
                                  <a
                                    href={`tel:${row.company_get_in_touch_phone}`}
                                    className="text-gray-700 hover:underline"
                                  >
                                    {row.company_get_in_touch_phone || "—"}
                                  </a>
                                </div>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() =>
                                    handleCopyEmail(
                                      row.company_get_in_touch_phone || ""
                                    )
                                  }
                                  title="Copy phone"
                                >
                                  <Copy className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>

                            <Separator />

                            <div>
                              <p className="text-xs font-medium text-gray-500 mb-1">
                                Message
                              </p>
                              <div className="rounded-md border bg-white p-3 text-sm text-gray-800 whitespace-pre-wrap">
                                {row.company_get_in_touch_message || "—"}
                              </div>
                            </div>
                          </div>
                        </SheetContent>
                      </Sheet>
                    ),
                  },
                ]}
                currentPage={filters.page}
                itemsPerPage={filters.limit}
                onPageChange={(page) => setFilters({ ...filters, page })}
                totalCount={getInTouch?.count}
                emptyMessage="No inquiries found"
                isLoading={isLoading}
              />
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AdminGetInTouch;
