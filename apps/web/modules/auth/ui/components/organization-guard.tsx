"use client";

import React from "react";
import { useOrganization } from "@clerk/nextjs";
import AuthLayout from "@/modules/auth/ui/layouts/auth-layout";
import OrgSelectionView from "@/modules/auth/ui/views/org-selection-view";

const OrganizationGuard = ({ children }: { children: React.ReactNode }) => {
    const { organization } = useOrganization();

    if (!organization) {
        return (
            <AuthLayout>
                <OrgSelectionView />
            </AuthLayout>
        )
    }
    return (
        <>
            {children}
        </>
    )
}

export default OrganizationGuard