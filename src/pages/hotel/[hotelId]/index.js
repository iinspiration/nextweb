import withDynamicRendering from '@lib/page/withDynamicRendering'
import * as HotelService from '@modules/apiData/hotel/service'
import get from 'lodash/get'
import { throwError } from '@lib/api'
export { default } from '@components/_page/HotelDashboardPage'

export async function getServerSideProps(context) {
  const enhancedFetchData = await withDynamicRendering()(fetchData)
  return enhancedFetchData(context)
}

async function fetchData(context) {
  const {
    query: { hotelId },
  } = context

  const [hotelRsp] = await Promise.all([
    HotelService.getHotelById({ id: hotelId }),
  ])

  const hotelData = get(hotelRsp, 'data.data.[0]')

  // console.log('hotelData', hotelData)

  if (!hotelData) {
    throwError(400)
  }

  return {
    props: {
      hotelInfo: hotelData,
      hotelData,
    },
  }
}
