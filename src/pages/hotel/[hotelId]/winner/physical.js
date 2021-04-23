import withDynamicRendering from '@lib/page/withDynamicRendering'
import * as CampaignService from '@modules/apiData/campaign/service'
import { throwError } from '@lib/api'
export { default } from '@components/_page/WinnersPage/winnerPhysical'

export async function getServerSideProps(context) {
  const enhancedFetchData = await withDynamicRendering()(fetchData)
  return enhancedFetchData(context)
}

async function fetchData(context) {
  const {
    query: { campaignId },
  } = context

  // const res = await CampaignService.getCampaignById({ id: campaignId })
  // const campaignInfo = await res?.data

  // if (!campaignInfo) {
  //   throwError(400)
  // }

  return {
    props: { campaignId },
  }
}
