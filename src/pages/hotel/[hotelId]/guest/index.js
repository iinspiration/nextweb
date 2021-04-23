import withDynamicRendering from '@lib/page/withDynamicRendering'
// import * as CampaignService from '@modules/apiData/campaign/service'
// import * as PrizeService from '@modules/apiData/prize/service'
import { throwError } from '@lib/api'
export { default } from '@components/_page/GuestPage'

export async function getServerSideProps(context) {
  const enhancedFetchData = await withDynamicRendering()(fetchData)
  return enhancedFetchData(context)
}

async function fetchData(context) {
  const {
    query: { hotelId },
  } = context

  // const [campaign, prizes] = await Promise.all([
  //   CampaignService.getCampaignById({ id: campaignId }),
  //   PrizeService.getList({ id: campaignId }),
  // ])

  // const campaignInfo = campaign?.data
  // const prizeData = prizes?.data
  // const weightTotal = prizes?.weightTotal

  // return {
  //   props: { campaignInfo, campaignId, prizeData, weightTotal },
  // }
}
