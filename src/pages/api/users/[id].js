import get from 'lodash/get'
import * as API from '@modules/db/users/services'

export default async function usersId(req, res) {
  const method = get(req, 'method', null)
  if (method === 'GET') {
    const rtn = await itemAPI(req)
    res.status(200)
    return res.json(rtn)
  } else if (method === 'PATCH') {
    const rtn = await updateAPI(req)
    res.status(200)
    return res.json(rtn)
  } else if (method === 'DELETE') {
    const rtn = await delAPI(req)
    res.status(200)
    return res.json(rtn)
  } else {
    res.status(405)
    return res.json({
      message: 'Method not allowed',
    })
  }
  // POST, PATCH, DELETE
}

async function itemAPI(req, res) {
  const id = get(req, 'query.id', 0)
  const data = await API.findById({ id })

  if (!data.result.data) {
    return {
      statusCode: 404,
      message: 'Not found',
    }
  }

  return JSON.stringify(data, null, 2)
}

async function updateAPI(req, res) {
  const id = get(req, 'query.id', 0)
  const updateData = get(req, 'body', {})
  const data = await API.updateItem(updateData, { table: 'users', id })

  if (!data.result.data) {
    return {
      statusCode: 404,
      message: 'Not found',
    }
  }

  return JSON.stringify(data, null, 2)
}

async function delAPI(req, res) {
  const id = get(req, 'query.id', 0)
  const data = await API.deleteItem({ id })

  if (!data.result.data) {
    return {
      statusCode: 404,
      message: 'Not found',
    }
  }

  return JSON.stringify(data, null, 2)
}
