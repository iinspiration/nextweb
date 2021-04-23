import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import { Flex, Box } from 'reflexbox'
import get from 'lodash/get'
import { Page } from '@lib/page'
import { media } from '@lib/styles/helpers'
import { getAsPathByRouteName } from '@lib/router/utils'

import MainLayout from '@components/_page/_layouts/main'
import * as metaConfig from '@components/_page/HomePage/meta'

import ChartThumbnail from './common/ChartThumbnail'
import BoxHilight from './common/BoxHilight'
import TotalBarChart from './TotalBarChart'
import PredictReward from './PredictReward'
import ChartWinner from './ChartWinner'

export function HeadTitle({ data }) {
  const router = useRouter()

  return (
    <Flex mb={'0.55rem'} flexWrap="wrap">
      <Box width={['auto']}>
        <div
          css={{
            fontSize: '1.5em',
            fontWeight: '700',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            [media('sm')]: { fontSize: '1.75em' },
          }}>
          <button
            onClick={() => router.push(getAsPathByRouteName('hotel'))}
            css={{
              border: 'none',
              marginRight: '.25em',
              color: '#ff0000',
              backgroundColor: 'transparent',
              lineHeight: '1rem',
            }}>
            <i className="fas fa-chevron-left"></i>
          </button>
          {data.name}
          <span css={{ color: '#ff0000', margin: '0 .25em -2px' }}>/</span>
        </div>
      </Box>
      <Box width={['auto']}>
        <div
          css={{
            fontSize: '1.5em',
            fontWeight: '700',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            lineHeight: '1.7rem',
            [media('sm')]: { fontSize: '1.75em', lineHeight: '2rem' },
          }}>
          Dashboard
        </div>
      </Box>
    </Flex>
  )
}

export function DashBoard(props) {
  const { data } = props

  return (
    <Fragment>
      <Flex flexWrap="wrap" mx={-2}>
        <Box width={[1, 1, 1 / 3]} px={2} py={3}>
          <BoxHilight
            title1={'จำนวน ห้องพัก'}
            value1={get(data, 'rooms')}
            unit1={'ห้อง'}
            // title2={'พลาดรางวัลไป'}
            // value2={'xxx'}
            // unit2={'ครั้ง'}
            // subValue2={'xxx'}
            // `(${(
            //   (totalMiss * 100) /
            //   parseFloat(winnerData.totalItems)
            // ).toFixed(2)}  %)`
          />
          <BoxHilight
            title1={'จำนวน Staff'}
            value1={get(data, 'staffs')}
            unit1={'คน'}
            // title2={'เฉลี่ยเล่นคนละ'}
            // value2={parseFloat(winnerData.totalItems / userData).toFixed(2)}
            // unit2={'ครั้ง'}
          />
        </Box>
        {/* <Box width={[1, 1, 1 / 3]} px={2} py={3}>
          <PredictReward
            data={winnerData}
            dataMiss={winnerMissData}
            prizeRemaining={prizeRemaining}
          />
        </Box> */}
        <Box width={[1, 1, 0.4 / 3]}></Box>
        {/* <Box width={[1, 1, 1.2 / 3]} p={2}>
          <TotalBarChart data={prizeData} />
        </Box> */}
      </Flex>
      {/* <Flex flexWrap="wrap" mx={-2} alignItems="flex-end">
        <Box width={[1, 1 / 2, 1 / 2, 2 / 3]} p={2}>
          <ChartWinner data={winnerData} />
        </Box>
      </Flex> */}
      {/* <Flex flexWrap="wrap" mx={-2}>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p={2}>
          <ChartThumbnail data={fpdData} color1="#cf1960" />
        </Box>
        <Box width={1} p={2}>
          <ChartThumbnail data={jooxData} color1="rgba(18,110,58,1)" />
        </Box>
        <Box width={1} p={2}>
          <ChartThumbnail data={wetvData} color1="rgba(255,121,0,1)" />
        </Box>
        <Box width={1} p={2}>
          <ChartThumbnail data={pubgData} color1="rgba(245,166,0,1)" />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p={2}>
          <ChartThumbnail data={wecmData} color1="rgba(255,150,100,0.7)" />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p={2}>
          <ChartThumbnail data={tbdsData} color1="#599a59" />
        </Box>
        <Box width={[1, 1 / 2, 1 / 2, 1 / 3]} p={2}>
          <ChartThumbnail data={bnlcData} color1="#f59fe9" />
        </Box>
      </Flex> */}
    </Fragment>
  )
}

export default function HotelDetailPage(props) {
  const { hotelInfo, hotelData } = props
  const { id } = hotelData

  return (
    <Page metaConfig={metaConfig}>
      <MainLayout hotelId={id} hotelInfo={hotelInfo}>
        <div
          className="container"
          css={{
            width: '100%',
            padding: '0.55rem 1em',
            boxSizing: 'border-box',
          }}>
          <HeadTitle data={hotelData} />
          <DashBoard data={hotelData} />
        </div>
      </MainLayout>
    </Page>
  )
}