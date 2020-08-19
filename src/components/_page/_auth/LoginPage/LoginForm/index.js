import React from 'react'
import Form from '@lib/form/Form'

import Template from './Template'
import schema from './schema'
import onSubmit from './onSubmit'

export default function LoginForm({ defaultValues }) {
  return (
    <Form defaultValues={defaultValues} schema={schema} onSubmit={onSubmit}>
      {Template}
    </Form>
  )
}
