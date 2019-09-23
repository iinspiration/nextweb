import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import App from 'next/app'
import { Provider } from 'mobx-react'

import initMobXStore from '@lib/store'
import * as font from '@lib/font'
import { GlobalStyles } from '@lib/styles'

export default class MyApp extends App {
  componentDidMount() {
    const WebFont = require('webfontloader')
    WebFont.load(font.config)
  }

  render() {
    const { Component, router } = this.props
    const rootStore = initMobXStore()

    return (
      <Fragment>
        <GlobalStyles />
        <Helmet titleTemplate={`%s - nextweb.js`} />
        <Provider RootStore={rootStore}>
          <Component {...this.props.pageProps} router={router} />
        </Provider>
      </Fragment>
    )
  }
}
