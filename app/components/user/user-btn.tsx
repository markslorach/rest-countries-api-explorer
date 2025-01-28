import { Button } from "@/components/ui/button";
import { UserRound } from "lucide-react";

type UserButtonProps = {
  color?: string;
};

const UserButton = ({ color }: UserButtonProps) => {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="dark:bg-transparent hover:bg-white sm:hover:bg-gray-100"
    >
      <UserRound className={`h-6 w-6 ${color}`} />
    </Button>
  );
};

export default UserButton;
