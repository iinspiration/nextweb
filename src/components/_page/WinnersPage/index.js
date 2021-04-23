import { useEffect } from 'react'
import { useRouter } from 'next/router'
import get from 'lodash/get'
import { Page } from '@lib/page'
import { media } from '@lib/styles/helpers'
import { getDataFromToken } from '@lib/auth'
import { getAsPathByRouteName } from '@lib/router/utils'
import { parseCookies } from 'nookies'
import { AUTH_COOKIE_NAME } from '@modules/_auth/config'

import MainLayout from '@components/_page/_layouts/main'
import CampaignTable from '@components/_common/CampaignTable'
import HeadTitle from '@components/_common/DataTablePage/HeadTitle'
import Link from '@link'
import * as metaConfig from '@components/_page/HomePage/meta'

import * as WinnerService from '@modules/apiData/winner/service'
import { exportColumns, dataColumns } from './dataConfig'

function btnStyles() {
  return {
    // position: 'absolute',
    // left: 15,
    // top: 45,
    display: 'block',
    padding: '10px',
    background:
      'linear-gradient(90deg, rgba(253,92,145,1) 0%, rgba(219,0,0,1) 100%)',
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
    width: 180,
    borderRadius: '5px',
    margin: '0 0 1rem auto',
    fontSize: '1em',
    lineHeight: 1.25,
    border: 'none',
    cursor: 'pointer',
    zIndex: 9,
  }
}

export default function WinnersPage({ campaignInfo, campaignId }) {
  const router = useRouter()

  const cookies = parseCookies()
  const tokenInCookie = cookies[AUTH_COOKIE_NAME]

  useEffect(() => {
    const userData = tokenInCookie && getDataFromToken(tokenInCookie)
    const role = get(userData, 'role', null)
    if (tokenInCookie && role !== 'superadmin') {
      router.push(getAsPathByRouteName('campaign'))
    }
  }, [])

  return (
    <Page metaConfig={metaConfig}>
      <MainLayout campaignId={campaignId} campaignInfo={campaignInfo}>
        <div
          css={{
            margin: '0 0 30px',
            position: 'relative',
            [media('sm')]: { padding: '0 1rem' },
          }}>
          <HeadTitle title={'Winner'} data={campaignInfo} />
          {/* <Link
            route="campaign-winner-physical"
            params={{ campaignId: campaignId }}
            passHref>
            <a css={btnStyles()}>Only Physical reward</a>
          </Link> */}
          <CampaignTable
            campaignId={campaignId}
            columns={dataColumns}
            itemPerPage={10}
            dataService={WinnerService.getList}
            exportColumns={exportColumns}
            exportBtn={false}
          />
        </div>
      </MainLayout>
    </Page>
  )
}
