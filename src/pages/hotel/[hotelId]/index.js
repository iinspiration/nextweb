import withDynamicRendering from '@lib/page/withDynamicRendering'
import * as CampaignService from '@modules/apiData/campaign/service'
import * as PrizeService from '@modules/apiData/prize/service'
import * as UserService from '@modules/apiData/user/service'
import * as WinnerService from '@modules/apiData/winner/service'

import { throwError } from '@lib/api'
export { default } from '@components/_page/HotelDashboardPage'

export async function getServerSideProps(context) {
  const enhancedFetchData = await withDynamicRendering()(fetchData)
  return enhancedFetchData(context)
}

async function fetchData(context) {
  const {
    query: { campaignId },
  } = context

  const [campaignRsp, userRsp, prizeRsp, winnerRsp] = await Promise.all([
    CampaignService.getCampaignById({ id: campaignId }),
    UserService.getUserCountByCampaign({ id: campaignId }),
    PrizeService.getList({ id: campaignId }),
    WinnerService.getInfo({ id: campaignId }),
  ])

  const campaignData = campaignRsp?.data

  const userData = userRsp?.data

  const prizeData = prizeRsp?.data?.sort((a, b) => a.id - b.id)
  const prizeRemaining = prizeRsp?.prizeRemaining

  const winnerInfo = winnerRsp?.data

  if (!campaignData || !prizeData || !userData || !winnerRsp) {
    throwError(400)
  }

  return {
    props: {
      campaignInfo: campaignData,
      campaignData,
      prizeData,
      prizeRemaining,
      userData,
      winnerInfo,
      // winnerMissData,
      // totalMiss,
    },
  }
}
