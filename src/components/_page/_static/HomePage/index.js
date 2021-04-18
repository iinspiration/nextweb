import React, { Fragment } from 'react'
import { useTheme } from 'emotion-theming'
import { Flex, Box } from '@grid'

import { Page } from '@lib/page'
import { Fetch, FetchMore } from '@lib/api'
import * as ArticleService from '@modules/article/services'

import PopularArticles from '@components/_page/article/ArticleDetailPage/PopularArticles'
import ArticleLatest, { ArticleList } from './ArticleLatest'
import * as metaConfig from './meta'

export default function HomePage({ articleLatest }) {
  const { variables } = useTheme()

  return (
    <Page metaConfig={metaConfig}>
      <Flex>
        <Box width={[1, 1]} pr={[0, 20]}></Box>
      </Flex>
    </Page>
  )
}
