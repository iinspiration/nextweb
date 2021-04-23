import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { Page } from '@lib/page'
import { useMember } from '@lib/auth'
import { getAsPathByRouteName } from '@lib/router/utils'

import * as metaConfig from '@components/_page/HomePage/meta'

import LoginForm from './LoginForm'

export default function LoginPage() {
  const Router = useRouter()
  const {
    userData: { isAuthenticated },
  } = useMember()

  useEffect(() => {
    if (isAuthenticated) {
      Router.push(getAsPathByRouteName('hotel'))
    }
  }, [isAuthenticated])

  return (
    <Page metaConfig={metaConfig}>
      <LoginForm />
    </Page>
  )
}
