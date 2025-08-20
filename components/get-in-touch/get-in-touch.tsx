"use client";

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
import { z } from "zod";

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

export const StayInTouchSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[\+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    try {
      console.log("Form data:", data);

      const response = await fetch("/api/stay-in-touch", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitted(true);
    } catch (error) {
      console.error("Form submission error:", error);
      // You could add error handling here
    } finally {
      setIsSubmitting(false);
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
            {/* Personal Information Section */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <User className="w-5 h-5 text-gray-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Personal Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
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

                {/* Phone */}
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
                          placeholder="+1 (555) 123-4567"
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

            {/* Contact Information Section */}
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

                {/* Online Presence */}
                <FormField
                  control={form.control}
                  name="onlinePresence"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">
                        Online Presence <span className="text-red-500">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="LinkedIn profile, website, or social media"
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
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3"
                    >
                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <RadioGroupItem
                              value="email"
                              id="email"
                              className="peer sr-only"
                            />
                            <label
                              htmlFor="email"
                              className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:border-gray-300 transition-colors"
                            >
                              <Mail className="w-5 h-5 text-gray-600 peer-checked:text-blue-600" />
                              <div>
                                <div className="font-medium text-gray-900">
                                  Email
                                </div>
                                <div className="text-sm text-gray-500">
                                  Best for detailed responses
                                </div>
                              </div>
                            </label>
                          </div>
                        </FormControl>
                      </FormItem>

                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <RadioGroupItem
                              value="text"
                              id="text"
                              className="peer sr-only"
                            />
                            <label
                              htmlFor="text"
                              className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:border-gray-300 transition-colors"
                            >
                              <MessageSquare className="w-5 h-5 text-gray-600 peer-checked:text-blue-600" />
                              <div>
                                <div className="font-medium text-gray-900">
                                  Text Message
                                </div>
                                <div className="text-sm text-gray-500">
                                  Quick and convenient
                                </div>
                              </div>
                            </label>
                          </div>
                        </FormControl>
                      </FormItem>

                      <FormItem>
                        <FormControl>
                          <div className="relative">
                            <RadioGroupItem
                              value="text"
                              id="text"
                              className="peer sr-only"
                            />
                            <label
                              htmlFor="text"
                              className="flex items-center space-x-3 p-4 border-2 border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-500 peer-checked:bg-blue-50 hover:border-gray-300 transition-colors"
                            >
                              <MessageSquare className="w-5 h-5 text-gray-600 peer-checked:text-blue-600" />
                              <div>
                                <div className="font-medium text-gray-900">
                                  Phone Call
                                </div>
                                <div className="text-sm text-gray-500">
                                  Direct conversation
                                </div>
                              </div>
                            </label>
                          </div>
                        </FormControl>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Separator />

            {/* Message */}
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

            {/* Submit Button */}
            <div className="pt-6">
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
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
