import axios from 'axios'

const defaultTimeout = 10000

export function fetchAPI({
  apiUrl = process.env.NODE_ENV === 'production'
    ? process.env.API_URL
    : process.env.DEVAPI_URL,
  path,
  token,
  timeout = defaultTimeout,
  ...options
}) {
  return axios({
    baseURL: `${apiUrl}${path}`,
    headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    timeout,
    ...options,
  }).then(({ data }) => data)
}

export function postAPI({
  apiUrl = process.env.NODE_ENV === 'production'
    ? process.env.API_URL
    : process.env.DEVAPI_URL,
  path,
  data,
  token,
  timeout = defaultTimeout,
  ...options
}) {
  return axios({
    method: 'post',
    url: `${apiUrl}${path}`,
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    data,
    timeout,
    ...options,
  }).then(({ data }) => data)
}

export function fetchGQL({
  apiUrl = process.env.NODE_ENV === 'production'
    ? process.env.API_URL
    : process.env.DEVAPI_URL,
  query,
  timeout = defaultTimeout,
  variables = null,
}) {
  return axios({
    method: 'post',
    url: apiUrl,
    headers: { 'Content-Type': 'application/json' },
    data: {
      query,
      variables,
      operationName: null,
    },
    timeout,
  }).then(({ data }) => data)
}

export function throwError(status = 500, { errorCode = '' } = {}) {
  const err = new Error()
  err.response = { status, errorCode }
  throw err
}
