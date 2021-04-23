import React from 'react'
import { getStatic } from '@lib/static'
import { useRouter } from 'next/router'
import { getAsPathByRouteName } from '@lib/router/utils'

export default function IntroNav() {
  const router = useRouter()
  return (
    <div css={{ width: '100%' }}>
      <div
        css={{
          display: 'block',
          width: '100%',
          padding: '6px 0',
          backgroundColor: '#fff',
          textAlign: 'center',
          cursor: 'pointer',
        }}
        onClick={() => router.push(getAsPathByRouteName('hotel'))}>
        {/* <img
          css={{
            maxWidth: '150px',
            margin: 'auto',
            padding: 5,
            width: 'calc(100% - 10px)',
          }}
          src={`${getStatic('images/logo-s-campaign.svg')}`}
        /> */}
      </div>
      <div css={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="fristRow">
          <h2
            css={{
              display: 'none',
              fontFamily: 'sukhumvit',
              fontSize: '3.25em',
              fontWeight: 'bold',
              marginBottom: '.25em',
            }}>
            Hotels Report
          </h2>
        </div>
      </div>
    </div>
  )
}
