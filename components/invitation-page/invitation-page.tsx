"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { authClient } from "@/lib/auth-client";
import { Bell, CheckCircle, Clock, LogOut, Mail, Users } from "lucide-react";

const InvitationWaitingPage = () => {
  const handleLogout = async () => {
    await authClient.signOut();
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen  flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-2">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
            </div>

            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              Invitation Pending
            </CardTitle>
            <p className="text-gray-600 text-lg">
              Please wait for the team to invite you
            </p>
          </CardHeader>

          <CardContent className="space-y-8">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-full">
                <Clock className="w-5 h-5 text-yellow-600" />
                <span className="text-yellow-800 font-medium">
                  Awaiting Team Approval
                </span>
              </div>

              <p className="text-gray-500 text-sm max-w-md mx-auto">
                Your account has been created successfully. A team administrator
                will review and approve your access shortly.
              </p>
            </div>

            <Separator />

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                What happens next?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">1. Review</h4>
                  <p className="text-sm text-gray-600">
                    Team admin reviews your registration details
                  </p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">2. Approve</h4>
                  <p className="text-sm text-gray-600">
                    Your access gets approved and activated
                  </p>
                </div>

                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Bell className="w-6 h-6 text-purple-600" />
                  </div>
                  <h4 className="font-medium text-gray-900 mb-2">3. Notify</h4>
                  <p className="text-sm text-gray-600">
                    You&apos;ll receive an email when ready
                  </p>
                </div>
              </div>
            </div>

            <Separator />

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button onClick={handleLogout} className="flex-1">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvitationWaitingPage;
