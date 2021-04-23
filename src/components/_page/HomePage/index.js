import React from 'react'
import { Doughnut } from 'react-chartjs-2'

import { Page } from '@lib/page'
import MainLayout from '@components/_page/_layouts/main'
import Link from '@lib/router/Link'

import * as metaConfig from '@components/_page/HomePage/meta'

const doughnutData = {
  labels: [
    'JOOX VIP 30 DAY',
    'WeTv VIP 30 DAY',
    'We Comic VIP 30 DAY',
    'Starbucks Giftcard 500THB voucher code',
    'PubGMobile item code',
    'MOnline',
    'Foodpanda Code ส่งฟรี ',
    'Foodpanda Code ลด 5%',
    'Foodpanda Code ลด 10%',
    'Shower GEL',
    'Clean it Zero',
    'พลาดรางวัล',
  ],
  datasets: [
    {
      data: [100, 50, 100, 10, 10, 10, 10, 10, 10, 20, 20, 5],
      backgroundColor: [
        '#FFB829',
        '#F98A2C',
        '#ED5B45',
        '#B64262',
        '#633663',
        '#402852',
        '#C7FFCB',
        '#3EB6AC',
        '#93EDD2',
        '#93EDD2',
        '#93EDD2',
        '#FF0000',
      ],
      hoverBackgroundColor: [
        '#FFB829',
        '#F98A2C',
        '#ED5B45',
        '#B64262',
        '#633663',
        '#402852',
        '#C7FFCB',
        '#3EB6AC',
        '#93EDD2',
        '#93EDD2',
        '#93EDD2',
        '#FF0000',
      ],
    },
  ],
}

function BoxStyled() {
  return {
    background: '#333650',
    padding: '1em',
    boxShadow: '-1px 2px 26px -1px rgba(13,0,0,0.65);',
    borderRadius: '5px',
    '&:first-child': {
      marginRight: '1em',
    },
    '.inner': {
      display: 'flex',
      alignItems: 'flex-start',
      height: '100%',
      '.text': { width: '40%', fontSize: '1.25em', fontWeight: 'bold' },
      '.value': {
        width: '50%',
        textAlign: 'right',
        paddingRight: '5px',
        fontSize: '2.5em',
        lineHeight: '0.9',
        fontWeight: 'bold',
      },
      '.unit': { width: '10%' },
    },
    '* >': {
      color: '#fff',
    },
  }
}
export default function HomePage() {
  return (
    <Page metaConfig={metaConfig}>
      <MainLayout>
        <div css={{ display: 'flex' }}>
          <div css={BoxStyled()}>
            <div className="inner">
              <div className="text">JOOX VIP 30 DAY</div>
              <div className="value">100</div>
              <div className="unit">/10</div>
            </div>
          </div>
          <div css={BoxStyled()}>
            <div>
              <h2 className="" css={{ fontSize: '1.25em', fontWeight: 'bold' }}>
                Item Weight
              </h2>
              <Doughnut data={doughnutData} width={400} height={400} />
            </div>
          </div>
        </div>
      </MainLayout>
    </Page>
  )
}

export function CampaignsPage({ data }) {
  return (
    <Page metaConfig="metaConfig">
      CampaignsPage
      <br />
      <br />
      {data.map(({ id, name, description }) => {
        return (
          <div
            key={id}
            css={{ padding: 10, margin: 10, borderBottom: '1px solid #ddd' }}>
            id: {id}
            <br />
            name: {name}
            <br />
            description: {description}
            <br />
            <Link route="campaign-detail" params={{ campaignId: id }} passHref>
              <a
                css={{
                  margin: '10px 0',
                  padding: 10,
                  background: '#efefef',
                  display: 'inline-block',
                }}>
                View detail
              </a>
            </Link>
          </div>
        )
      })}
    </Page>
  )
}
