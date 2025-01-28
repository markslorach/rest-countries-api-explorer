"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const HomeButton = () => {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.push("/")}
      variant="outline"
      className="shadow-sm h-14 rounded-lg dark:bg-gray-700 dark:border-gray-500/50"
    >
      <ArrowLeft className="mr-1.5 w-5 h-5" />
      Home
    </Button>
  );
};

export default HomeButton;
