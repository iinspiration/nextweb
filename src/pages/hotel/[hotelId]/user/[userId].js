import withDynamicRendering from '@lib/page/withDynamicRendering'
import * as UserService from '@modules/apiData/user/service'
import { throwError } from '@lib/api'
export { default } from '@components/_page/UserDetailPage'

export async function getServerSideProps(context) {
  const enhancedFetchData = await withDynamicRendering()(fetchData)
  return enhancedFetchData(context)
}

async function fetchData(context) {
  const {
    query: { id },
  } = context

  const res = await UserService.getUserById({ id })
  const data = await res?.data

  if (!data) {
    throwError(400)
  }

  return {
    props: { data },
  }
}
