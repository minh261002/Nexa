"use client";

import { useQuery, useMutation } from "convex/react";
import { api } from "@workspace/backend/_generated/api";
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@workspace/ui/components/button";

export default function Page() {
  const addUser = useMutation(api.users.ad);
  return (
    <>
      <Authenticated>
        <UserButton />
        <div className="flex items-center justify-center min-h-svh">
          <div className="flex flex-col items-center justify-center gap-4">
            <button onClick={() => addUser()}>
              Add User
            </button>
            <h1 className="text-2xl font-bold">Hello From app/web</h1>
            {JSON.stringify(useQuery(api.users.getMany))}
          </div>
        </div>
      </Authenticated>
      <Unauthenticated>
        <SignInButton mode="modal">
          <Button>
            Sign In
          </Button>
        </SignInButton>
      </Unauthenticated>
    </>
  )
}
