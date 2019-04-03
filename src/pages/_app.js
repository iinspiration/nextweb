import React from 'react'
import Helmet from 'react-helmet'
import App, { Container } from 'next/app'
import { flowRight as compose } from 'lodash'

import withData from '@lib/app/withData'
import GlobalStyles from '@lib/styles/GlobalStyles'
import MainLayout from '@components/_layouts/main'

class MyApp extends App {
  render() {
    const { Component, router } = this.props

    return (
      <Container>
        <GlobalStyles />
        <MainLayout>
          <Helmet titleTemplate={`%s - nextweb.js`} />
          <Component {...this.props.pageProps} router={router} />
        </MainLayout>
      </Container>
    )
  }
}

export default compose(withData)(MyApp)
