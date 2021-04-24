import React from 'react'
import { Box, Flex } from 'reflexbox'
import IntroNav from './Intro'
import Navigation from './Navigation'
import { media } from '@lib/styles/helpers'

function bodyStyled() {
  return {
    backgroundColor: '#fff',
    borderTop: '2px solid #11698e',
    color: '#222',
    minHight: '100vh',
    width: '100%',
    display: 'flex',
    flexWrap: 'Wrap',
    '> *': {
      fontFamily: 'sukhumvit',
    },
  }
}

export default function MainLayout({ hotelInfo, children }) {
  return (
    <Flex flexWrap="wrap" css={bodyStyled()}>
      <Box
        width={[1, 1, 1 / 6, 1 / 8]}
        css={{
          overflow: 'auto',
          background: '#11698e',
          display: 'flex',
          flexDirection: 'column',
          [media('lg')]: { height: '100vh' },
        }}>
        <IntroNav />
        {hotelInfo !== undefined && <Navigation hotelInfo={hotelInfo} />}
      </Box>
      <Box
        width={[1, 1, 5 / 6, 7 / 8]}
        css={{
          height: '100vh',
          overflow: 'auto',
        }}>
        <main>{children}</main>
      </Box>
    </Flex>
  )
}
