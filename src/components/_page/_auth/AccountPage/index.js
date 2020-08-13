import React from 'react'

import withDynamicPage from '@lib/page/withDynamicPage'
import { useMember } from '@lib/auth'
import { signOut } from '@features/_auth'

import Page from '@components/_common/Page'

function AccountPage() {
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

AccountPage.getInitialProps = async function() {
  return {
    breadcrumb: [
      {
        label: 'Account',
        route: {
          name: 'account',
        },
      },
    ],
  }
}

export default withDynamicPage()(AccountPage)
