"use client";

import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SettingsIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Switch } from "../ui/switch";

const PasswordSchema = z.object({
  password: z.string().min(1, "Password is required"),
});
type PasswordSchemaType = z.infer<typeof PasswordSchema>;

type IntendedAction = "enable" | "disable" | null;

const Settings = () => {
  const router = useRouter();

  // Session
  const { data: session } = authClient.useSession();
  const twoFactorEnabled = !!session?.user.twoFactorEnabled;

  // Dialog state
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [intendedAction, setIntendedAction] = useState<IntendedAction>(null);

  // Form
  const form = useForm<PasswordSchemaType>({
    resolver: zodResolver(PasswordSchema),
    defaultValues: { password: "" },
  });

  const openConfirmFor = (action: IntendedAction) => {
    setIntendedAction(action);

    form.reset();
    setConfirmOpen(true);
  };

  const onSubmit = async (values: PasswordSchemaType) => {
    if (!intendedAction) return;

    try {
      if (intendedAction === "enable") {
        await authClient.twoFactor.enable({
          password: values.password,
          issuer: "innovarehp",
        });
        toast.success("Enabled two-factor authentication.");
      } else {
        await authClient.twoFactor.disable({ password: values.password });
        toast.success("Disabled two-factor authentication.");
      }

      // Close confirm dialog after a brief moment and refresh session/UI
      setTimeout(() => {
        setConfirmOpen(false);

        form.reset();
        // Refresh the route to update session state in UI
        router.refresh?.();
      }, 800);
    } catch (e: unknown) {
      toast.error((e as Error).message || "Action failed. Please try again.");
    }
  };

  return (
    <>
      {/* Settings launcher dialog */}
      <Dialog open={settingsOpen} onOpenChange={setSettingsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            className="p-0 flex items-center gap-2 w-full justify-start font-normal"
          >
            <SettingsIcon />
            Enable 2FA
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Settings</DialogTitle>
            <DialogDescription>
              Make changes to your settings here.
            </DialogDescription>
          </DialogHeader>

          <Card>
            <CardHeader className="p-4 flex flex-row justify-between items-start gap-4">
              <div>
                <CardTitle className="text-sm">
                  Two‑Factor Authentication
                </CardTitle>
                <CardDescription className="text-xs">
                  Toggle to enable or disable 2FA for your account.
                </CardDescription>
              </div>

              <Switch
                checked={twoFactorEnabled}
                // We do not flip the switch optimistically. We ask for password first.
                onCheckedChange={(checked) => {
                  openConfirmFor(checked ? "enable" : "disable");
                }}
                disabled={false}
              />
            </CardHeader>
          </Card>
        </DialogContent>
      </Dialog>

      {/* Confirm password dialog */}
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {intendedAction === "enable" ? "Enable 2FA" : "Disable 2FA"}
            </DialogTitle>
            <DialogDescription>
              Please enter your password to confirm this action.
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="********"
                        disabled={false}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setConfirmOpen(false)}
                  disabled={false}
                  className="w-1/2"
                >
                  Cancel
                </Button>
                <Button type="submit" disabled={false} className="w-1/2">
                  {intendedAction === "enable" ? "Enable" : "Disable"}
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Settings;
