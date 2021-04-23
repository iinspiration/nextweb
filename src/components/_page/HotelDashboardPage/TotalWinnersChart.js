import { Doughnut } from 'react-chartjs-2'
import { media } from '@lib/styles/helpers'

export default function TotalWinnersChart({ data }) {
  const winners = data

  const totalWinners = winners.length
  const totalLosers = winners.filter(winner => {
    const prize = JSON.parse(winner.data)
    return prize.name === 'sorry'
  }).length

  const loserPercent = ((totalLosers / totalWinners) * 100).toFixed(2)
  const winnerPercent = (100 - loserPercent).toFixed(2)

  const dataChart = {
    labels: [
      `พลาดรางวัล ${totalLosers} ครั้ง (${loserPercent} %)`,
      `ได้รางวัล ${totalWinners - totalLosers} ครั้ง (${winnerPercent} %)`,
    ],
    datasets: [
      {
        data: [loserPercent, winnerPercent],
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
        โอกาสได้รางวัล
      </h1>
      <Doughnut data={dataChart} width={100} height={75} />
    </div>
  )
}
