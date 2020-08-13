import React, { useState } from 'react'
import { flowRight as compose } from 'lodash'

import { Router } from '@router'
import { inject } from '@lib/store'
import withDynamicPage from '@lib/page/withDynamicPage'

import { signIn } from '@features/_auth'
import Page from '@components/Page'

function LoginPage({ errorStore }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = e => {
    e.preventDefault()

    const { redirect } = Router.router.query

    signIn({ email, password, redirect }).catch(error => {
      errorStore.addError({
        title: error.message,
      })
    })
  }

  return (
    <Page>
      <form onSubmit={login}>
        <p>
          <label>
            Email:
            <input type="text" onChange={e => setEmail(e.target.value)} />
          </label>
        </p>
        <p>
          <label>
            Password:
            <input
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
          </label>
        </p>
        <button>Log in</button>
      </form>
    </Page>
  )
}

export default compose(
  withDynamicPage(),
  inject('errorStore', { observe: false }),
)(LoginPage)
