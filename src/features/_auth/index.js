import { trimEnd } from 'lodash'
import { postAPI } from '@lib/api/helpers'
import { deleteCookie } from '@lib/cookie'
import { getFullUrlByRoute } from '@router/utils'

import { AUTH_COOKIE_NAME } from './constants'

export function signIn({ email, password, redirect }) {
  return postAPI({
    apiUrl: process.env.HOST,
    path: '/api/signIn',
    data: {
      email,
      password,
    },
  })
    .then(({ token }) => {
      if (redirect) {
        location.href = `${redirect}?token=${token}`
        return
      }

      location.href = `/?token=${token}`
    })
    .catch(({ response }) => {
      throw new Error(response.data.message)
    })
}

export function signOut() {
  deleteCookie(AUTH_COOKIE_NAME)
  location.href = getFullUrlByRoute('home')
}

export function resetAuthentication({ redirect = '' }) {
  deleteCookie(AUTH_COOKIE_NAME)
  location.href = trimEnd(getFullUrlByRoute('auth-login', { redirect }), '/')
}
