import { formatDate } from '@modules/utils/formatDate'
import BoxHilight from './common/BoxHilight'

export default function PredictReward({ data, dataMiss, prizeRemaining }) {
  const dayCountsAll = data.reduce((prev, curr) => {
    let day = formatDate(curr.createdAt)
    if (!prev[day]) {
      prev[day] = 0
    }
    prev[day]++
    return prev
  }, {})
  const dayCountsMiss = dataMiss.reduce((prev, curr) => {
    let day = formatDate(curr.createdAt)
    if (!prev[day]) {
      prev[day] = 0
    }
    prev[day]++
    return prev
  }, {})

  const winnerPerDay = Object.keys(dayCountsAll).map(date => {
    return {
      date,
      totalAmount: dayCountsAll[date] - (dayCountsMiss[date] || 0),
    }
  })

  const totalWinnerLastDay = winnerPerDay[1].totalAmount // compare with yesterday winner
  const predicVal = prizeRemaining / totalWinnerLastDay

  return (
    <BoxHilight
      title1={'เมื่อวานรางวัลออกไป'}
      value1={totalWinnerLastDay.toLocaleString()}
      unit1={'ชิ้น'}
      title2={'คาดการณ์เวลาที่รางวัลจะหมด'}
      value2={parseInt(predicVal).toLocaleString()}
      unit2={'วัน'}
    />
  )
}
