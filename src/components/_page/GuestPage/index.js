import { Page } from '@lib/page'
import { media } from '@lib/styles/helpers'
import MainLayout from '@components/_page/_layouts/main'
import CampaignTable from '@components/_common/CampaignTable'
import HeadTitle from '@components/_common/DataTablePage/HeadTitle'
import * as metaConfig from '@components/_page/HomePage/meta'

import { exportColumns, dataColumns } from './dataConfig'

export default function GuestPage({
  campaignInfo,
  campaignId,
  prizeData,
  weightTotal,
}) {
  return (
    <Page metaConfig={metaConfig}>
      <MainLayout campaignId={campaignId} campaignInfo={campaignInfo}>
        <div css={{ margin: '0 0 30px', [media('sm')]: { padding: '0 1rem' } }}>
          <HeadTitle title={'Prize'} data={campaignInfo} />
          <CampaignTable
            campaignId={campaignId}
            columns={dataColumns}
            itemPerPage={10}
            data={prizeData}
            exportColumns={exportColumns}
            exportBtn={false}
            pagination={false}
          />
          <div
            css={{
              background: '#222',
              color: '#fff',
              padding: 15,
              display: 'flex',
              fontWeight: 'bold',
              justifyContent: 'flex-end',
            }}>
            <div css={{ marginRight: 15 }}>Total draw rate: </div>
            <div css={{}}>{weightTotal.toFixed(2)} %</div>
          </div>
        </div>
      </MainLayout>
    </Page>
  )
}
