import React from 'react'
import { Page } from '@lib/page'
import { media } from '@lib/styles/helpers'
import MainLayout from '@components/_page/_layouts/main'
import * as metaConfig from '@components/_page/HomePage/meta'

export default function GuestPage({ hotelInfo, hotelId }) {
  return (
    <Page metaConfig={metaConfig}>
      <MainLayout campaignId={hotelId} campaignInfo={hotelInfo}>
        <div css={{ margin: '0 0 30px', [media('sm')]: { padding: '0 1rem' } }}>
          GuestPage
        </div>
      </MainLayout>
    </Page>
  )
}
