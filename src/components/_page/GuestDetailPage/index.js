import React from 'react'
import { Page } from '@lib/page'
import MainLayout from '@components/_page/_layouts/main'
import * as metaConfig from '@components/_page/HomePage/meta'

export default function GuestDetailPage({ data }) {
  return (
    <Page metaConfig={metaConfig}>
      <MainLayout>GuestDetailPage</MainLayout>
    </Page>
  )
}
