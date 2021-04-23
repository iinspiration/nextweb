import React from 'react'
import { Page } from '@lib/page'
import { Box, Flex } from 'reflexbox'
import Link from '@lib/router/Link'
import MainLayout from '@components/_page/_layouts/main'

import * as metaConfig from '@components/_page/HomePage/meta'

export default function HotelPage(props) {
  const { data } = props
  console.log('HotelPage props', props)
  return (
    <Page metaConfig={metaConfig} options={{ restricted: true }}>
      <MainLayout>
        <div
          css={{
            padding: '1rem',
            color: '#11698e',
            fontSize: '2em',
            fontWeight: '600',
            width: '100%',
            height: '60px',
          }}>
          Hotel Management System
        </div>
        <Flex flexWrap="wrap" mx={-2} px={3} py={1}>
          {data.map(({ id, name, description }) => {
            return (
              <Box width={[1, 1, 1 / 2, 1 / 3]} p={2} key={id}>
                <div
                  css={{
                    padding: '1rem',
                    borderBottom: '1px solid #ddd',
                    color: '#fff',
                    borderRadius: '10px',
                    boxShadow: '1px 1px 10px 0px rgba(0,0,0,0.1)',
                    background: '#16c79a',
                  }}>
                  <div
                    css={{
                      fontSize: '1.4em',
                      fontWeight: '700',
                      margin: '0 0 .75em 0',
                    }}>
                    {id}. {name}
                  </div>
                  <div css={{ fontSize: '1em', fontWeight: '500' }}>
                    {description}
                  </div>
                  <Link route="hotel-detail" params={{ hotelId: id }} passHref>
                    <a
                      css={{
                        padding: 10,
                        marginLeft: 'auto',
                        marginTop: '25px',
                        background: '#fff',
                        display: 'inline-block',
                        fontWeight: '500',
                        fontFamily: 'sukhumvit',
                        borderRadius: '5px',
                        fontSize: '1em',
                        '&:hover': {
                          background: '#222',
                          color: '#f9f9f9',
                        },
                      }}>
                      View detail
                    </a>
                  </Link>
                </div>
              </Box>
            )
          })}
        </Flex>
      </MainLayout>
    </Page>
  )
}
