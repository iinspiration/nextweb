import * as repository from '@modules/apiData/repository'
import { throwError } from '@lib/api'

export function getHotels() {
  return repository.find({ path: '/hotels' }).then(res => {
    const response = res?.result
    if (!response) {
      throwError(400)
    }
    return {
      data: response,
    }
  })
}

export function getHotelById({ id }) {
  return repository.find({ path: `/hotels/${id}` }).then(res => {
    const response = res?.result

    if (!response) {
      throwError(400)
    }
    return {
      data: response,
    }
  })
}
