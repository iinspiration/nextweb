import * as repository from '@modules/apiData/repository'
import { throwError } from '@lib/api'

export function getUsers() {
  return repository.find({ path: '/users' }).then(res => {
    const response = res

    if (!response) {
      throwError(400)
    }
    return {
      data: response,
    }
  })
}

export function getUserById({ id }) {
  return repository.find({ path: `/users/${id}` }).then(res => {
    const response = res

    if (!response) {
      throwError(400)
    }
    return {
      data: response,
    }
  })
}

export function getUserCountByCampaign({ id }) {
  return repository.find({ path: `/users/count/campaign/${id}` }).then(res => {
    const response = res

    if (!response) {
      throwError(400)
    }
    return {
      data: response,
    }
  })
}
