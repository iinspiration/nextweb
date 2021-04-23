import withDynamicRendering from '@lib/page/withDynamicRendering'
import * as WinnerService from '@modules/apiData/winner/service'
import { throwError } from '@lib/api'
export { default } from '@components/_page/WinnerDetailPage'

export async function getServerSideProps(context) {
  const enhancedFetchData = await withDynamicRendering()(fetchData)
  return enhancedFetchData(context)
}

async function fetchData(context) {
  const {
    query: { campaignId, winnerId },
  } = context

  const res = await WinnerService.getWinnerById({ campaignId, winnerId })
  const data = await res?.data[0]

  if (!data) {
    throwError(400)
  }

  return {
    props: { data },
  }
}
