import { Page } from '@lib/page'
import MainLayout from '@components/_page/_layouts/main'
import * as metaConfig from '@components/_page/HomePage/meta'

export default function GuestDetailPage({ data }) {
  const { id, label, name, amount, weight } = data

  return (
    <Page metaConfig={metaConfig}>
      <MainLayout>
        PrizeDetailPage
        <br />
        <br />
        <div css={{ padding: 10, margin: 10, borderBottom: '1px solid #ddd' }}>
          id: {id}
          <br />
          label: {label}
          <br />
          name: {name}
          <br />
          amount: {amount}
          <br />
          weight: {weight}
        </div>
      </MainLayout>
    </Page>
  )
}
