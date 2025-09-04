"use client";

import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import * as React from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";

export interface TwoFactorFormProps {
  destinationHint?: string;

  length?: number;

  resendSeconds?: number;

  title?: string;
  description?: string;
  backLinkHref?: string;
  backLinkLabel?: string;
}

export default function TwoFactorForm({
  length = 6,
  resendSeconds = 60,

  title = "Two-Factor Authentication",
  description = "Enter the code we sent to verify your identity.",
}: TwoFactorFormProps) {
  const [loading, setLoading] = React.useState(false);
  const [cooldown, setCooldown] = React.useState(0);

  // dynamic schema by length
  const schema = React.useMemo(
    () =>
      z.object({
        code: z
          .string()
          .regex(
            new RegExp(`^\\d{${length}}$`),
            `Enter a ${length}-digit code`
          ),
      }),
    [length]
  );

  const form = useForm<z.infer<typeof schema>>({
    mode: "onBlur",
    resolver: zodResolver(schema),
    defaultValues: { code: "" },
  });

  // countdown timer for resend
  React.useEffect(() => {
    if (cooldown <= 0) return;
    const t = setInterval(() => setCooldown((s) => s - 1), 1000);
    return () => clearInterval(t);
  }, [cooldown]);

  const handleCodeChange = (val: string) => {
    const digitsOnly = (val || "").replace(/\D+/g, "").slice(0, length);
    form.setValue("code", digitsOnly, { shouldValidate: true });

    if (digitsOnly.length === length && !loading) {
      // auto-submit
      void form.handleSubmit(handleSubmit)();
    }
  };

  const handleSubmit = async ({ code }: z.infer<typeof schema>) => {
    setLoading(true);
    try {
      await authClient.twoFactor.verifyOtp({ code });
      toast.success("OTP verified. Redirecting…");
    } catch (e: unknown) {
      toast.error(
        e instanceof Error
          ? e.message
          : "Unable to verify code. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    if (cooldown > 0) return;
    setLoading(true);
    try {
      await authClient.twoFactor.sendOtp();
      toast.success("A new OTP has been sent.");
      setCooldown(resendSeconds);
    } catch (e: unknown) {
      toast.error(
        e instanceof Error
          ? e.message
          : "Failed to resend OTP. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="p-4 max-w-sm mx-auto">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-3"
          >
            <FormField
              control={form.control}
              name="code"
              render={() => (
                <FormItem>
                  <FormLabel>One-Time Password</FormLabel>
                  <InputOTP
                    value={form.watch("code")}
                    onChange={handleCodeChange}
                    maxLength={length}
                    pattern={REGEXP_ONLY_DIGITS}
                    disabled={loading}
                    // Allow paste of the entire code into the first slot
                    onPaste={(e) => {
                      e.preventDefault();
                      const pasted = e.clipboardData.getData("text");
                      handleCodeChange(pasted);
                    }}
                  >
                    <InputOTPGroup>
                      {Array.from({ length }).map((_, i) => (
                        <InputOTPSlot key={i} index={i} />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between">
              <Button
                type="button"
                variant="link"
                className="text-xs underline px-0"
                disabled={loading || cooldown > 0}
                onClick={handleResend}
              >
                {cooldown > 0
                  ? `Resend in ${String(Math.floor(cooldown / 60)).padStart(2, "0")}:${String(cooldown % 60).padStart(2, "0")}`
                  : "Resend OTP"}
              </Button>

              <Button type="submit" disabled={loading} className="ml-auto">
                Verify
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
