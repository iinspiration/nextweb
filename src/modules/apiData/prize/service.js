import * as repository from '@modules/apiData/repository'
import { formatDateTime } from '@modules/utils/formatDate'
import { throwError } from '@lib/api'

export function getPrizeById({ campaignId, prizeId }) {
  return repository
    .find({ path: `/prizes/campaign/${campaignId}` })
    .then(res => {
      const response = res
      const data = response.filter(item => {
        return item.id === parseInt(prizeId)
      })

      if (!response) {
        throwError(400)
      }
      return { data }
    })
}

export function getList({ id, page, limit }) {
  const pageVal = page !== undefined ? `page=${page}` : ''
  const limitVal = limit !== undefined ? `limit=${limit}` : ''

  return repository
    .find({ path: `/prizes/campaign/${id}?${pageVal}&${limitVal}` })
    .then(res => {
      const response = res

      const preProcessData = response.reduce((prev, cur) => {
        if (cur.label.includes('Foodpanda')) {
          const alreadyAdded = prev.find(prize => {
            return prize.label.includes('Foodpanda')
          })

          if (alreadyAdded) {
            return prev.map(prize => {
              if (prize.label.includes('Foodpanda')) {
                return {
                  ...prize,
                  label: 'Foodpanda',
                  amount: prize.amount + cur.amount,
                  max_amount: prize.max_amount + cur.max_amount,
                  weight: parseFloat(prize.weight) + parseFloat(cur.weight),
                }
              }

              return prize
            })
          }
        }

        return prev.concat(cur)
      }, [])

      const processData = preProcessData
        .map(row => {
          return {
            ...row,
            weight: parseFloat(row.weight).toFixed(2),
            createdAt: formatDateTime(row.createdAt),
            updatedAt: formatDateTime(row.updatedAt),
          }
        })
        .sort(
          (a, b) =>
            (a.label === 'nothing') - (b.label === 'nothing') ||
            (a.label > b.label ? 1 : -1),
        )

      const total = processData.reduce((prev, curr) => {
        return (prev += parseFloat(curr.weight))
      }, 0)

      const prizeRemaining = processData.reduce((prev, curr) => {
        return (prev += parseFloat(curr.amount))
      }, 0)

      if (!response) {
        throwError(400)
      }
      return {
        data: processData,
        weightTotal: total,
        prizeRemaining,
      }
    })
}
