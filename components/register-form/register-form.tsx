"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
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

const formSchema = z.object({
  email: z.email({ message: "Invalid email address" }),
  password: z.string().min(8),
  name: z.string().min(1),
  confirmPassword: z.string().min(8),
});

type FormData = z.infer<typeof formSchema>;

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await authClient.signUp.email({
        email: data.email,
        password: data.password,
        name: data.name,
        callbackURL: "/dashboard",
      });

      if (response.error) {
        return toast.error(response.error.message);
      }

      toast.success("Login successful");
    } catch (error) {
      toast.error("Login successful");
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0">
        <CardContent className="grid p-0 md:grid-cols-2">
          <Form {...form}>
            <form className="p-6 md:p-8" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Create an account</h1>
                  <p className="text-muted-foreground text-balance">
                    Create an account
                  </p>
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="m@example.com" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="John Doe" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>

                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          placeholder="********"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>

                      <FormControl>
                        <Input
                          type="password"
                          {...field}
                          placeholder="********"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  disabled={form.formState.isSubmitting}
                  type="submit"
                  className="w-full"
                >
                  Create Account
                </Button>
                <div className="text-center text-sm">
                  Already have an account?{" "}
                  <Link href="/login" className="underline underline-offset-4">
                    Sign in
                  </Link>
                </div>
              </div>
            </form>
          </Form>
          <div className="bg-muted relative hidden md:block p-2">
            <Image
              src="https://innovarehp.com/images/656d3779371df12b332b2a473fe3f7f9.jpg"
              alt="Image"
              width={500}
              height={500}
              className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
