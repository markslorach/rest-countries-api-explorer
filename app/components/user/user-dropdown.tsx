import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { SignOutButton } from "../shared/sign-out-btn";
import { UserRound } from "lucide-react";

type Props = {
  name: string | null,
  email: string | undefined
} ;

export default function UserDropdown({ name, email }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="dark:bg-transparent">
          <UserRound className="h-6 w-6" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-gray-700">
        <div className="px-2">
          <p className="font-semibold">{name ?? "Hello,"}</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">{email}</p>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href="/favourite-countries" className="w-full">
            Favourites
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
