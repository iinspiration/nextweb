import React from 'react'
import { Global, css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import getGlobalStyles from '@features/_ui/globalStyles'

import normalize from './_normalize'
import reset from './_reset'
import clearFix from './_clearFix'

const getBaseStyles = colors => css`
  ${normalize}
  ${reset}
  ${clearFix}
  ${getGlobalStyles(colors)}
`

export default function BaseStyles() {
  const { colors } = useTheme()

  return (
    <React.Fragment>
      <Global styles={getBaseStyles(colors)} />
    </React.Fragment>
  )
}
