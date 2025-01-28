import Link from "next/link";
import { GlobeAsiaAustraliaIcon } from "@heroicons/react/24/outline";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import UserDropdown from "../user/user-dropdown";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import { Suspense } from "react";
import UserButton from "../user/user-btn";

const NavBar = () => {
  return (
    <nav className="h-20 border-b border-gray-300/50 dark:border-gray-500/50 shadow-sm bg-white dark:bg-gray-700">
      <div className="px-4 md:container flex h-full items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <GlobeAsiaAustraliaIcon className="w-7 h-7 text-blue-500" />
          <h1 className="font-semibold">Countries DB</h1>
        </Link>

        <div className="flex items-center space-x-1">
          <SignedOut>
            <SignInButton>
              <Button
                variant="ghost"
                size="icon"
                className="dark:bg-gray-700 dark:border-gray-500/50 hover:bg-white sm:hover:bg-gray-100"
              >
                <LogIn className="w-6 h-6" />
              </Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <Suspense fallback={<UserButton color="text-gray-500" />}>
              <UserDropdown />
            </Suspense>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
