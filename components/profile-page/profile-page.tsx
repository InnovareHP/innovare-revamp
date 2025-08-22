"use client";

import { Camera, Eye, EyeOff, Lock, Save, Shield, User } from "lucide-react";
import { useState } from "react";

import { useUser } from "@/components/provider/app-provider";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { authClient } from "@/lib/auth-client";
import { imageService } from "@/services/image/image-service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

export const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, "Current password is required"),
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/\d/, "Password must contain at least one number"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const ProfileInfoSchema = z.object({
  name: z.string().min(1, "Name is required"),
  bio: z.string().max(500, "Bio must be less than 500 characters").optional(),
});

export type ChangePasswordForm = z.infer<typeof ChangePasswordSchema>;
export type ProfileInfoForm = z.infer<typeof ProfileInfoSchema>;

const ProfilePage = () => {
  const { session, member } = useUser();

  // Avatar state
  const [isAvatarDialogOpen, setIsAvatarDialogOpen] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(
    session?.user?.image ?? null
  );
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [isUploadingAvatar, setIsUploadingAvatar] = useState(false);

  // Edit mode state
  const [isEditingProfile, setIsEditingProfile] = useState(false);

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordForm = useForm<ChangePasswordForm>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const profileForm = useForm<ProfileInfoForm>({
    resolver: zodResolver(ProfileInfoSchema),
    defaultValues: {
      name: session?.user?.name ?? "",
      bio: member?.member_bio,
    },
  });

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size should be less than 5MB");
        return;
      }

      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = () => setAvatarPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const saveAvatar = async () => {
    if (!avatarFile) return;

    setIsUploadingAvatar(true);
    try {
      const image = await imageService.uploadImage(avatarFile);

      await authClient.updateUser({
        image: image.url,
      });

      setIsAvatarDialogOpen(false);
      setAvatarPreview(image.url);
      setAvatarFile(null);
      toast.success("Profile picture updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile picture");
    } finally {
      setIsUploadingAvatar(false);
    }
  };

  const handleChangePassword = async (values: ChangePasswordForm) => {
    try {
      const { error } = await authClient.changePassword({
        currentPassword: values.currentPassword,
        newPassword: values.newPassword,
      });

      if (error) {
        toast.error(error.message);
        return;
      }

      passwordForm.reset();
      toast.success("Password changed successfully");
    } catch (error) {
      toast.error("Failed to change password");
      console.error(error);
    }
  };

  const handleUpdateProfile = async (values: ProfileInfoForm) => {
    try {
      await authClient.updateUser({
        name: values.name,
      });

      setIsEditingProfile(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Failed to update profile");
    }
  };

  return (
    <div className="min-h-screen p-6rounded-xl">
      <div className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Profile</h1>
            <p className="text-gray-600 mt-1">
              Manage your personal information and preferences
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <div className="relative inline-block">
                    <Avatar className="w-24 h-24 ring-4 ring-white shadow-lg">
                      <AvatarImage
                        src={avatarPreview ?? session?.user?.image ?? ""}
                      />
                      <AvatarFallback className="text-xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
                        {session?.user?.name?.charAt(0) ?? "N/A"}
                      </AvatarFallback>
                    </Avatar>

                    <Dialog
                      open={isAvatarDialogOpen}
                      onOpenChange={setIsAvatarDialogOpen}
                    >
                      <DialogTrigger asChild>
                        <Button
                          size="sm"
                          className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 shadow-lg"
                        >
                          <Camera className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-md">
                        <DialogHeader>
                          <DialogTitle>Update Profile Picture</DialogTitle>
                          <DialogDescription>
                            Choose a new profile picture. Recommended size:
                            400x400px, max 5MB.
                          </DialogDescription>
                        </DialogHeader>

                        <div className="space-y-4">
                          <div className="flex justify-center">
                            <Avatar className="w-32 h-32">
                              <AvatarImage
                                src={
                                  avatarPreview ?? session?.user?.image ?? ""
                                }
                              />
                              <AvatarFallback className="text-2xl">
                                {session?.user?.name?.charAt(0) ?? "N/A"}
                              </AvatarFallback>
                            </Avatar>
                          </div>
                          <div>
                            <Label htmlFor="avatar-upload">Choose Image</Label>
                            <Input
                              id="avatar-upload"
                              type="file"
                              accept="image/*"
                              onChange={handleAvatarChange}
                              className="mt-1"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                              PNG, JPG, GIF up to 5MB
                            </p>
                          </div>
                        </div>

                        <DialogFooter>
                          <Button
                            variant="outline"
                            onClick={() => {
                              setIsAvatarDialogOpen(false);
                              setAvatarPreview(session?.user?.image ?? null);
                              setAvatarFile(null);
                            }}
                            disabled={isUploadingAvatar}
                          >
                            Cancel
                          </Button>
                          <Button
                            onClick={saveAvatar}
                            disabled={!avatarFile || isUploadingAvatar}
                          >
                            {isUploadingAvatar
                              ? "Uploading..."
                              : "Save Picture"}
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>

                  {/* User Info */}
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {session?.user?.name}
                    </h2>
                    <p className="text-gray-600 text-sm">
                      {session?.user?.email}
                    </p>
                    <Badge variant="secondary" className="mt-2">
                      {member?.role ?? "Member"}
                    </Badge>
                  </div>

                  {/* Quick Stats */}
                  <div className="pt-4 border-t space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Join Date</span>
                      <span className="font-medium">
                        {member?.createdAt
                          ? new Date(member.createdAt).toLocaleDateString()
                          : "N/A"}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Position</span>
                      <span className="font-medium">
                        {member?.member_position || "Not set"}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Info Card */}
            <Card className="shadow-lg border-0">
              <CardHeader className="flex flex-row items-center justify-between">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5 text-blue-600" />
                  <CardTitle>Personal Information</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <Form {...profileForm}>
                  <form
                    onSubmit={profileForm.handleSubmit(handleUpdateProfile)}
                    className="space-y-4"
                  >
                    <FormField
                      control={profileForm.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              disabled={!isEditingProfile}
                              className={!isEditingProfile ? "bg-gray-50" : ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="space-y-2">
                      <Label>Email Address</Label>
                      <Input
                        value={session?.user?.email ?? ""}
                        disabled
                        className="bg-gray-50"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Email cannot be changed. Contact support if needed.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label>Position</Label>
                      <Input
                        value={member?.member_position ?? ""}
                        disabled
                        className="bg-gray-50"
                      />
                    </div>

                    <FormField
                      control={profileForm.control}
                      name="bio"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Bio</FormLabel>
                          <FormControl>
                            <Textarea
                              {...field}
                              disabled={!isEditingProfile}
                              placeholder="Tell us about yourself..."
                              className={!isEditingProfile ? "bg-gray-50" : ""}
                              rows={3}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {isEditingProfile && (
                      <div className="flex justify-end space-x-2 pt-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => {
                            setIsEditingProfile(false);
                            profileForm.reset();
                          }}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="flex items-center space-x-1"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save Changes</span>
                        </Button>
                      </div>
                    )}
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Security Card */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-red-600" />
                  <CardTitle>Security Settings</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">
                      Change Password
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Ensure your account is secure by using a strong password.
                    </p>
                  </div>

                  <Form {...passwordForm}>
                    <form
                      className="space-y-4"
                      onSubmit={passwordForm.handleSubmit(handleChangePassword)}
                    >
                      <FormField
                        control={passwordForm.control}
                        name="currentPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Current Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  {...field}
                                  type={
                                    showCurrentPassword ? "text" : "password"
                                  }
                                  placeholder="Enter current password"
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                  onClick={() =>
                                    setShowCurrentPassword(!showCurrentPassword)
                                  }
                                >
                                  {showCurrentPassword ? (
                                    <EyeOff className="w-4 h-4" />
                                  ) : (
                                    <Eye className="w-4 h-4" />
                                  )}
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={passwordForm.control}
                        name="newPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>New Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  {...field}
                                  type={showNewPassword ? "text" : "password"}
                                  placeholder="Enter new password"
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                  onClick={() =>
                                    setShowNewPassword(!showNewPassword)
                                  }
                                >
                                  {showNewPassword ? (
                                    <EyeOff className="w-4 h-4" />
                                  ) : (
                                    <Eye className="w-4 h-4" />
                                  )}
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                            <p className="text-xs text-gray-500">
                              Must be at least 8 characters with uppercase,
                              lowercase, and number.
                            </p>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={passwordForm.control}
                        name="confirmPassword"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Confirm New Password</FormLabel>
                            <FormControl>
                              <div className="relative">
                                <Input
                                  {...field}
                                  type={
                                    showConfirmPassword ? "text" : "password"
                                  }
                                  placeholder="Confirm new password"
                                />
                                <Button
                                  type="button"
                                  variant="ghost"
                                  size="sm"
                                  className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                  onClick={() =>
                                    setShowConfirmPassword(!showConfirmPassword)
                                  }
                                >
                                  {showConfirmPassword ? (
                                    <EyeOff className="w-4 h-4" />
                                  ) : (
                                    <Eye className="w-4 h-4" />
                                  )}
                                </Button>
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex justify-end pt-4">
                        <Button
                          type="submit"
                          disabled={passwordForm.formState.isSubmitting}
                          className="flex items-center space-x-1"
                        >
                          <Lock className="w-4 h-4" />
                          <span>
                            {passwordForm.formState.isSubmitting
                              ? "Updating..."
                              : "Update Password"}
                          </span>
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
