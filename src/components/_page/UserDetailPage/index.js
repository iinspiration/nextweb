import { Page } from '@lib/page'
import MainLayout from '@components/_page/_layouts/main'
import * as metaConfig from '@components/_page/HomePage/meta'

export default function UserDetailPage({ data }) {
  const { id, lastuse } = data
  return (
    <Page metaConfig={metaConfig}>
      <MainLayout>
        UserDetailPage
        <br />
        <br />
        <div css={{ padding: 10, margin: 10, borderBottom: '1px solid #ddd' }}>
          id: {id}
          <br />
          lastuse: {lastuse}
        </div>
      </MainLayout>
    </Page>
  )
}
