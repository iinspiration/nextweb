import withDynamicRendering from '@lib/page/withDynamicRendering'
import * as PrizeService from '@modules/apiData/prize/service'
import { throwError } from '@lib/api'
export { default } from '@components/_page/GuestDetailPage'

export async function getServerSideProps(context) {
  const enhancedFetchData = await withDynamicRendering()(fetchData)
  return enhancedFetchData(context)
}

async function fetchData(context) {
  const {
    query: { campaignId, prizeId },
  } = context

  const res = await PrizeService.getPrizeById({ campaignId, prizeId })
  const data = await res?.data[0]

  if (!data) {
    throwError(400)
  }

  return {
    props: { data },
  }
}
