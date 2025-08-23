"use client";

import { handleCompleteOnboarding } from "@/app/(onboarding)/action";
import { useUser } from "@/components/provider/app-provider";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { imageService } from "@/services/image/image-service";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Briefcase,
  Building2,
  Camera,
  ChevronLeft,
  ChevronRight,
  User,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

export const formSchema = z.object({
  accountType: z.enum(["client", "employee"], {
    required_error: "Please select your account type",
  }),
  position: z.string().min(1, "Please select a position"),
  bio: z.string().optional(),
  profilePicture: z.any().optional(),
  memberId: z.string().min(1, "Please select a member"),
});

export type FormValues = z.infer<typeof formSchema>;

const stepConfig = [
  {
    title: "Welcome! Let's get started",
    description: "Are you joining as a client or employee?",
    icon: Users,
  },

  {
    title: "What's your role?",
    description: "Help us understand what you do",
    icon: Briefcase,
  },
  {
    title: "Tell us about yourself",
    description: "Add some personality to your profile",
    icon: Camera,
  },
];

export default function OnboardingPage() {
  const { member } = useUser();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      position: "",
      bio: "",
      memberId: member?.id ?? "",
    },
    mode: "onChange",
  });

  const watchAccountType = form.watch("accountType");

  const nextStep = async () => {
    let fieldsToValidate: (keyof FormValues)[] = [];

    if (step === 1) fieldsToValidate = ["accountType"];
    if (step === 2) fieldsToValidate = ["position"];
    if (step === 3) fieldsToValidate = ["bio"];

    const isValid = await form.trigger(fieldsToValidate);
    if (isValid) {
      setStep((prev) => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const onSubmit = async (values: FormValues) => {
    const image = await imageService.uploadImage(values.profilePicture);
    try {
      await handleCompleteOnboarding({
        ...values,
        profilePicture: image.url,
      });

      router.push("/callback");
      toast.success("Onboarding completed successfully");
    } catch (error) {
      await imageService.deleteImage(image.url);
    }
  };

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;
  const currentStepConfig = stepConfig[step - 1];
  const StepIcon = currentStepConfig.icon;

  const getPositionOptions = () => {
    if (watchAccountType === "client") {
      return [
        { value: "ceo", label: "CEO/Founder" },
        { value: "cto", label: "CTO" },
        { value: "product-manager", label: "Product Manager" },
        { value: "marketing-director", label: "Marketing Director" },
        { value: "operations-manager", label: "Operations Manager" },
        { value: "business-owner", label: "Business Owner" },
        { value: "startup-founder", label: "Startup Founder" },
        { value: "other", label: "Other" },
      ];
    } else {
      return [
        { value: "Software Developer", label: "Software Developer" },
        { value: "Frontend Developer", label: "Frontend Developer" },
        { value: "Backend Developer", label: "Backend Developer" },
        { value: "Fullstack Developer", label: "Fullstack Developer" },
        { value: "UI/UX Designer", label: "UI/UX Designer" },
        { value: "Product Manager", label: "Product Manager" },
        { value: "Data Analyst", label: "Data Analyst" },
        { value: "Marketing Specialist", label: "Marketing Specialist" },
        { value: "Sales Representative", label: "Sales Representative" },
        { value: "QA Engineer", label: "QA Engineer" },
        { value: "DevOps Engineer", label: "DevOps Engineer" },
        { value: "other", label: "Other" },
      ];
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <StepIcon className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {currentStepConfig.title}
          </h1>
          <p className="text-gray-600">{currentStepConfig.description}</p>
        </div>

        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>
              Step {step} of {totalSteps}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {step === 1 && (
                <FormField
                  control={form.control}
                  name="accountType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">
                        Account Type
                      </FormLabel>
                      <div className="grid grid-cols-1 gap-3">
                        <div
                          className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all hover:bg-gray-50 ${
                            field.value === "client"
                              ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200"
                              : "border-gray-200"
                          }`}
                          onClick={() => field.onChange("client")}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <Building2 className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">
                                I&apos;m a Client
                              </h3>
                              <p className="text-sm text-gray-500">
                                Existing subscriber of our servics
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <div
                                className={`h-4 w-4 rounded-full border-2 ${
                                  field.value === "client"
                                    ? "border-blue-500 bg-blue-500"
                                    : "border-gray-300"
                                }`}
                              >
                                {field.value === "client" && (
                                  <div className="h-full w-full rounded-full bg-white scale-50"></div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`relative cursor-pointer rounded-lg border-2 p-4 transition-all hover:bg-gray-50 ${
                            field.value === "employee"
                              ? "border-blue-500 bg-blue-50 ring-2 ring-blue-200"
                              : "border-gray-200"
                          }`}
                          onClick={() => field.onChange("employee")}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <User className="h-6 w-6 text-blue-600" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">
                                I&apos;m an Employee
                              </h3>
                              <p className="text-sm text-gray-500">
                                Part of a team or organization
                              </p>
                            </div>
                            <div className="flex-shrink-0">
                              <div
                                className={`h-4 w-4 rounded-full border-2 ${
                                  field.value === "employee"
                                    ? "border-blue-500 bg-blue-500"
                                    : "border-gray-300"
                                }`}
                              >
                                {field.value === "employee" && (
                                  <div className="h-full w-full rounded-full bg-white scale-50"></div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">
                          {watchAccountType === "client"
                            ? "Your Role"
                            : "Position"}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 text-base w-full">
                              <SelectValue
                                placeholder={
                                  watchAccountType === "client"
                                    ? "Select your role"
                                    : "Select your position"
                                }
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {getPositionOptions().map((option) => (
                              <SelectItem
                                key={option.value}
                                value={option.value}
                              >
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">
                          Short Bio
                          <span className="text-sm font-normal text-gray-500 ml-2">
                            (Optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={
                              watchAccountType === "client"
                                ? "Tell us about your business, what services you're looking for, or your goals..."
                                : "Tell us a bit about yourself, your interests, or what you're excited to work on..."
                            }
                            className="min-h-[100px] text-base resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="profilePicture"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">
                          Profile Picture
                          <span className="text-sm font-normal text-gray-500 ml-2">
                            (Optional)
                          </span>
                        </FormLabel>
                        <FormControl>
                          <div className="space-y-4">
                            <Input
                              type="file"
                              accept="image/*"
                              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                              onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                  field.onChange(file);
                                  const reader = new FileReader();
                                  reader.onload = () =>
                                    setPreview(reader.result as string);
                                  reader.readAsDataURL(file);
                                }
                              }}
                            />
                            {preview && (
                              <div className="flex justify-center">
                                <div className="relative">
                                  <Image
                                    src={preview}
                                    width={96}
                                    height={96}
                                    alt="Profile Preview"
                                    className="w-24 h-24 rounded-full object-cover shadow-lg ring-4 ring-blue-100"
                                  />
                                  <button
                                    type="button"
                                    onClick={() => {
                                      setPreview(null);
                                      field.onChange(null);
                                    }}
                                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs hover:bg-red-600 transition-colors"
                                  >
                                    ×
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              )}

              <div className="flex justify-between items-center pt-6">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={prevStep}
                  disabled={step === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </Button>

                {step < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    className="flex items-center gap-2 min-w-[100px]"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="min-w-[100px]"
                  >
                    {form.formState.isSubmitting
                      ? "Finishing..."
                      : "Complete Setup"}
                  </Button>
                )}
              </div>
            </form>
          </Form>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-colors ${
                i + 1 <= step ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
