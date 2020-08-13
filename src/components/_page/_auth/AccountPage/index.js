import React from 'react'

import { useMember } from '@lib/auth'
import { signOut } from '@features/_auth'

import Page from '@components/_common/Page'

export default function AccountPage() {
  const { profile } = useMember()

  return (
    <Page options={{ restricted: true }}>
      <div>
        <p>Current User: {profile.name}</p>
        <button onClick={() => signOut()}>Log out</button>
      </div>
    </Page>
  )
}
