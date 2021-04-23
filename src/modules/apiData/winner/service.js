import * as repository from '@modules/apiData/repository'
import { formatDateTime } from '@modules/utils/formatDate'
import { throwError } from '@lib/api'

export function getWinnerById({ campaignId, winnerId }) {
  return repository
    .find({ path: `/winners/campaign/${campaignId}` })
    .then(res => {
      const response = res
      const data = response.filter(item => {
        return item.id === parseInt(winnerId)
      })

      if (!response) {
        throwError(400)
      }
      return { data }
    })
}

export function getList({ id, page, limit, order }) {
  const pageVal = page !== undefined ? `page=${page}` : ''
  const limitVal = limit !== undefined ? `limit=${limit}` : ''
  const orderBy = order || 'DESC'

  return repository
    .find({
      path: `/winners/campaign/${id}?${pageVal}&${limitVal}&order=${orderBy}`,
    })
    .then(res => {
      const response = res

      const data = response?.data.map(item => {
        item.createdAt = formatDateTime(item.createdAt)
        return item
      })

      const winnerMiss = response?.data.filter(row => {
        let prizeName = JSON.parse(row.data).name
        return prizeName === 'sorry'
      })

      const totalMiss = winnerMiss.length

      if (!response) {
        throwError(400)
      }
      return {
        data,
        pageInfo: response.pageInfo,
        winnerMiss,
        totalMiss,
      }
    })
}

export function getListPhysical({ id, page, limit, order }) {
  const pageVal = page !== undefined ? `page=${page}` : ''
  const limitVal = limit !== undefined ? `limit=${limit}` : ''
  const orderBy = order || 'DESC'

  return repository
    .find({
      path: `/winners/campaign/${id}?${pageVal}&${limitVal}&order=${orderBy}`,
    })
    .then(res => {
      const response = res

      const data = response?.data
        .map(item => {
          item.createdAt = formatDateTime(item.createdAt)
          return item
        })
        .filter(row => {
          let prizeName = JSON.parse(row.data).claim_info
          return prizeName !== undefined
        })

      if (!response) {
        throwError(400)
      }
      return {
        data,
        pageInfo: response.pageInfo,
      }
    })
}

export function getInfo({ id }) {
  return repository
    .find({ path: `/winners/campaign/${id}?page=1&limit=1` })
    .then(res => {
      const response = res.pageInfo

      if (!response) {
        throwError(400)
      }
      return {
        data: response,
      }
    })
}
