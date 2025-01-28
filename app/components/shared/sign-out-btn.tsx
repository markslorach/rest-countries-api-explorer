"use client";
import { useClerk } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

export const SignOutButton = () => {
  const pathname = usePathname();
  const { signOut } = useClerk();

  return (
    <button
      className="w-full flex"
      onClick={() =>
        signOut({
          redirectUrl: pathname,
        })
      }
    >
      Sign Out
    </button>
  );
};
