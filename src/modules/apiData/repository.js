import { fetchAPI } from '@lib/api'

export function find({ path, ...options }) {
  return fetchAPI({
    path,
    token: process.env.API_SECRET,
    ...options,
  })
}
