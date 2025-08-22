"use client";

import { Button } from "@/components/ui/button"; // or replace with <button> if you don’t use shadcn
import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();

  return (
    <Button
      variant="ghost"
      onClick={() => router.back()}
      className="mb-6 text-muted-foreground"
    >
      ← Go Back
    </Button>
  );
};

export default GoBack;
