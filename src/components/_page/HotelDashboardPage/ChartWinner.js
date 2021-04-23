import { Line } from 'react-chartjs-2'
import { media } from '@lib/styles/helpers'
import { formatDate } from '@modules/utils/formatDate'

export default function ChartWinner({ data }) {
  const dayCounts = data.reduce((prev, curr) => {
    let day = formatDate(curr.createdAt)
    if (!prev[day]) {
      prev[day] = 0
    }
    prev[day]++
    return prev
  }, {})

  const chartLabel = Object.keys(dayCounts).reverse()
  const chartDAta = Object.values(dayCounts).reverse()

  const chartData = {
    labels: chartLabel,
    datasets: [
      {
        label: 'Winners',
        data: chartDAta,
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.5)',
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
      <h1 css={{ fontWeight: '700', fontSize: '2em', margin: '1rem 0' }}>
        จำนวนการเล่นในแต่ละวัน
      </h1>
      <Line width={100} height={40} data={chartData} />
    </div>
  )
}
