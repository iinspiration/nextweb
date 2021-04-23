import { Page } from '@lib/page'
import MainLayout from '@components/_page/_layouts/main'
import Link from '@lib/router/Link'
import * as metaConfig from '@components/_page/HomePage/meta'

export default function UsersPage({ campaignId, data }) {
  return (
    <Page metaConfig={metaConfig}>
      <MainLayout campaignId={campaignId}>
        UsersPage
        <br />
        <br />
        {data.map(({ id, name }) => {
          return (
            <div
              key={id}
              css={{ padding: 10, margin: 10, borderBottom: '1px solid #ddd' }}>
              id: {id}
              <br />
              name: {name}
              <br />
              <Link route="user-detail" params={{ id: id }} passHref>
                <a
                  css={{
                    margin: '10px 0',
                    padding: 10,
                    background: '#efefef',
                    display: 'inline-block',
                  }}>
                  View detail
                </a>
              </Link>
            </div>
          )
        })}
      </MainLayout>
    </Page>
  )
}
