import { HorizontalBar } from 'react-chartjs-2'
import { media } from '@lib/styles/helpers'

function getRandomColor() {
  var letters = '0123456789ABCDEF'
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

export default function WeightChart({ data }) {
  const prizeWeight = data.map(row => {
    return {
      label: row.name,
      data: `${parseFloat(row.weight)}`,
      backgroundColor: `${getRandomColor()}`,
    }
  })
  // console.log(prizeWeight)
  const options = {
    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          stacked: true,
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  }
  const barChartData = {
    datasets: prizeWeight,
    // {
    //   label: prizeWeight.name,
    //   data: [prizeWeight.weight],
    //   backgroundColor: 'red',
    // },
  }

  return (
    <div
      css={{
        padding: '1rem',
        textAlign: 'center',
        [media('sm')]: { padding: '0 1rem' },
      }}>
      <h1 css={{ fontWeight: '700', fontSize: '2em', margin: '1rem 0' }}>
        Prize Weight
      </h1>
      <HorizontalBar
        options={options}
        data={barChartData}
        width={100}
        height={32}
      />
    </div>
  )
}
