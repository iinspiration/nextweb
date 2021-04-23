import { Page } from '@lib/page'
import MainLayout from '@components/_page/_layouts/main'
import * as metaConfig from '@components/_page/HomePage/meta'

export default function WinnerDetailPage({ data }) {
  const { id, name, email } = data
  return (
    <Page metaConfig={metaConfig}>
      <MainLayout>
        WinnerDetailPage
        <br />
        <br />
        <div css={{ padding: 10, margin: 10, borderBottom: '1px solid #ddd' }}>
          id: {id}
          <br />
          name: {name}
          <br />
          email: {email}
        </div>
      </MainLayout>
    </Page>
  )
}
