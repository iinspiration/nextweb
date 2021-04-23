import { Doughnut } from 'react-chartjs-2'
import { media } from '@lib/styles/helpers'

export default function TotalBarChart({ data }) {
  const totalAmount = data.reduce((prev, curr) => {
    return (prev += parseFloat(curr.max_amount))
  }, 0)

  const leftAmount = data.reduce((prev, curr) => {
    return (prev += parseFloat(curr.amount))
  }, 0)

  const leftPercent = ((leftAmount / totalAmount) * 100).toFixed(2)
  const wonPercent = (100 - leftPercent).toFixed(2)

  const dataChart = {
    labels: [
      `ออกไปแล้ว ${totalAmount - leftAmount} ชิ้น (${wonPercent} %)`,
      `เหลืออยู่ ${leftAmount} ชิ้น (${leftPercent} %)`,
    ],
    datasets: [
      {
        data: [wonPercent, leftPercent],
        backgroundColor: ['rgba(155,0,0,0.85)', 'rgba(18,110,58,1)'],
        hoverOffset: 4,
      },
    ],
  }

  return (
    <div
      css={{
        padding: '1rem',
        textAlign: 'center',
        [media('sm')]: { padding: '0 1rem' },
      }}>
      <h1 css={{ fontWeight: '700', fontSize: '2em', margin: ' 0' }}>
        สถานะของรางวัล
      </h1>
      <Doughnut data={dataChart} width={100} height={75} />
    </div>
  )
}
