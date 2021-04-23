import withDynamicRendering from '@lib/page/withDynamicRendering'
import * as HotelService from '@modules/apiData/hotel/service'
import { throwError } from '@lib/api'
import get from 'lodash/get'
export { default } from '@components/_page/HotelPage'

export async function getServerSideProps(context) {
  const enhancedFetchData = await withDynamicRendering()(fetchData)
  return enhancedFetchData(context)
}

async function fetchData(context) {
  const res = await HotelService.getHotels()
  const data = await get(res, 'data.data')
  // console.log('data', data)

  if (!data) {
    throwError(400)
  }

  return {
    props: { data },
  }
}
