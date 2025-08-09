import { OrganizationList } from '@clerk/nextjs'
import React from 'react'

const OrgSelectionView = () => {
    return (
        <OrganizationList
            afterCreateOrganizationUrl='/'
            afterSelectOrganizationUrl='/'
            hidePersonal
            skipInvitationScreen
        />
    )
}

export default OrgSelectionView