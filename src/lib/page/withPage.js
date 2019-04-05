import { flowRight as compose } from 'lodash'

import withMeta from './withMeta'
import withGtmScript from '../stats/gtm/withGtmScript'
import withStats from '../stats/withStats'
import withLayout from './withLayout'
import withErrorHandling from './withErrorHandling'

export default function withPage(options = {}) {
  return function(Component) {
    const hocs = [
      withMeta,
      withGtmScript,
      withStats,
      withLayout(options.layout),
      withErrorHandling,
    ]

    return compose(...hocs)(Component)
  }
}
