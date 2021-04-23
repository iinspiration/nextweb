import React from 'react'
import { useRouter } from 'next/router'
import Form from '@lib/form/Form'
import { useMember } from '@lib/auth'

import Template from './Template'
import schema from './schema'
import onSubmit from './onSubmit'

import { getAsPathByRouteName } from '@lib/router/utils'

export default function LoginForm({ defaultValues }) {
  const { signInWithToken } = useMember()
  const router = useRouter()

  return (
    <Form
      css={{ maxWidth: '1320px' }}
      defaultValues={defaultValues}
      schema={schema}
      onSubmit={data =>
        onSubmit(data)
          .then(response => {
            signInWithToken(response.token)

            router.push(router.query.redirect || getAsPathByRouteName('hotel'))
          })
          .catch(e => {
            alert(e)
          })
      }>
      {Template}
    </Form>
  )
}
