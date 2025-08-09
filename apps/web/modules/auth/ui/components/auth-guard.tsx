"use client";

import React from "react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import AuthLayout from "@/modules/auth/ui/layouts/auth-layout";
import SignInView from "@/modules/auth/ui/views/sign-in-view";

const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AuthLoading>
                <AuthLayout>
                    <p>Loading...</p>
                </AuthLayout>
            </AuthLoading>

            <Authenticated>
                {children}
            </Authenticated>

            <Unauthenticated>
                <AuthLayout>
                    <SignInView />
                </AuthLayout>
            </Unauthenticated>
        </>
    )
}

export default AuthGuard