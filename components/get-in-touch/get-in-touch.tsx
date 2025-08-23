"use client";

import { createGetInTouch } from "@/app/(public)/get-in-touch/action";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle,
  Globe,
  Loader2,
  Mail,
  MessageSquare,
  Send,
  User,
} from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const StayInTouchSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  phone: z
    .string()
    .transform((v) => v.trim())
    .transform((v) => v.replace(/[^\d+]/g, "")) // remove spaces, dashes, etc.
    .refine((v) => {
      // Keep only digits for validation logic
      let d = v.replace(/\D/g, "");
      // Allow leading '1' (country code) -> strip for local validation
      if (d.length === 11 && d.startsWith("1")) d = d.slice(1);

      // Must be exactly 10 digits after removing leading 1
      if (d.length !== 10) return false;

      // NANP: area code NXX and exchange NXX where N=2-9, X=0-9
      return /^[2-9]\d{2}[2-9]\d{6}$/.test(d);
    }, "Please enter a valid US phone number")
    .transform((v) => {
      // Normalize to +1XXXXXXXXXX
      let d = v.replace(/\D/g, "");
      if (d.length === 10) d = "1" + d;
      return `+${d}`;
    }),
  email: z.string().email("Please enter a valid email address"),
  onlinePresence: z
    .string()
    .min(3, "Please provide a valid link or username")
    .max(200, "URL/username must be less than 200 characters"),
  contactMethod: z.enum(["email", "text", "phone"]),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

export type StayInTouchForm = z.infer<typeof StayInTouchSchema>;

const GetInTouch = () => {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<StayInTouchForm>({
    resolver: zodResolver(StayInTouchSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      onlinePresence: "",
      contactMethod: "email",
      message: "",
    },
  });

  const onSubmit = async (data: StayInTouchForm) => {
    try {
      await createGetInTouch(data);

      form.reset();
      setSubmitted(true);
    } catch (error) {
      toast.error("Failed to send message");
    }
  };

  if (submitted) {
    return (
      <Card className="max-w-md mx-auto shadow-lg border-0">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Thank you for reaching out!
          </h3>
          <p className="text-gray-600 mb-6">
            We&apos;ve received your message and will get back to you within 24
            hours.
          </p>
          <Button
            onClick={() => {
              setSubmitted(false);
              form.reset();
            }}
            variant="outline"
            className="w-full"
          >
            Send Another Message
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-xl  max-w-4xl mx-auto overflow-hidden">
      <CardHeader>
        <CardTitle>
          <h1 className="text-2xl font-bold">Get in Touch</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Personal Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Full Name <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Phone Number <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your phone number"
                          type="tel"
                          className="h-11"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Separator />

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Contact Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Email Address <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="your.email@example.com"
                          type="email"
                          className="h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="onlinePresence"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Online Presence <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                            <SelectItem value="Website">Website</SelectItem>
                            <SelectItem value="Social Media">
                              Social Media
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Separator />

            <FormField
              control={form.control}
              name="contactMethod"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Preferred Contact Method{" "}
                    <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={field.value} // controlled
                      onValueChange={field.onChange} // bind change
                      className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3"
                    >
                      {/* Email */}
                      <Label
                        htmlFor="contact-email"
                        className="
              flex items-center space-x-3 p-4 rounded-lg cursor-pointer border-2 transition-colors
              border-gray-200 hover:border-gray-300
              has-[:where([data-state=checked])]:border-blue-500
              has-[:where([data-state=checked])]:bg-blue-50
            "
                      >
                        <RadioGroupItem
                          id="contact-email"
                          value="email"
                          className="sr-only"
                        />
                        <Mail className="w-5 h-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-900">Email</div>
                          <div className="text-sm text-gray-500">
                            Best for detailed responses
                          </div>
                        </div>
                      </Label>

                      {/* Text */}
                      <Label
                        htmlFor="contact-text"
                        className="
              flex items-center space-x-3 p-4 rounded-lg cursor-pointer border-2 transition-colors
              border-gray-200 hover:border-gray-300
              has-[:where([data-state=checked])]:border-blue-500
              has-[:where([data-state=checked])]:bg-blue-50
            "
                      >
                        <RadioGroupItem
                          id="contact-text"
                          value="text"
                          className="sr-only"
                        />
                        <MessageSquare className="w-5 h-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-900">
                            Text Message
                          </div>
                          <div className="text-sm text-gray-500">
                            Quick and convenient
                          </div>
                        </div>
                      </Label>

                      {/* Phone */}
                      <Label
                        htmlFor="contact-phone"
                        className="
              flex items-center space-x-3 p-4 rounded-lg cursor-pointer border-2 transition-colors
              border-gray-200 hover:border-gray-300
              has-[:where([data-state=checked])]:border-blue-500
              has-[:where([data-state=checked])]:bg-blue-50
            "
                      >
                        <RadioGroupItem
                          id="contact-phone"
                          value="phone"
                          className="sr-only"
                        />
                        <MessageSquare className="w-5 h-5 text-gray-600" />
                        <div>
                          <div className="font-medium text-gray-900">
                            Phone Call
                          </div>
                          <div className="text-sm text-gray-500">
                            Direct conversation
                          </div>
                        </div>
                      </Label>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Your Message <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us about your healthcare needs, questions, or how we can help you..."
                      rows={5}
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription className="text-xs text-gray-500 flex justify-between">
                    <span>
                      Be as detailed as possible to help us assist you better
                    </span>
                    <span>{field.value?.length || 0}/1000</span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="pt-6">
              <Button
                type="submit"
                className="w-full"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default GetInTouch;
