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
import { currentUser } from "@clerk/nextjs/server";
import UserButton from "./user-btn";

export default async function UserDropdown() {
  const user = await currentUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserButton />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-gray-700">
        <div className="px-2">
          <p className="font-semibold">{user?.firstName ?? "Hello,"}</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {user?.emailAddresses[0].emailAddress}
          </p>
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
