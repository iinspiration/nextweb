import React, { useEffect, Fragment } from 'react'
import { useRouter } from 'next/router'
import { Router } from '@router'

import { useMember } from '@lib/auth'
import * as layouts from '@components/_layouts'

import Meta from './Meta'
import Stats from './Stats'

export function Page({
  children,
  data,
  metaConfig,
  options = { layout: 'main' },
}) {
  const router = useRouter()
  const { isAuthenticated } = useMember()

  const Layout = layouts[options.layout]
  const restricted = options.restricted || false

  useEffect(() => {
    if (restricted && isAuthenticated === false) {
      Router.pushRoute('auth-login', {
        redirect: router.asPath,
      })
    }
  }, [restricted, isAuthenticated])

  return (
    <Fragment>
      <Meta data={data} metaConfig={metaConfig} />
      <Stats data={data} metaConfig={metaConfig} />
      <Layout restricted={restricted}>{children}</Layout>
    </Fragment>
  )
}
