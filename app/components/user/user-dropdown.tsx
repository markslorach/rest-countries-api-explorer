import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { SignOutButton } from "../shared/sign-out-btn";

import UserButton from "./user-btn";
import { getUser } from "@/server/lib/user";

export default async function UserDropdown() {
  const user = await getUser();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <UserButton />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="dark:bg-gray-700">
        <div className="px-2">
          <p className="font-semibold">{user?.name ?? "Hello,"}</p>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            {user?.email}
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
