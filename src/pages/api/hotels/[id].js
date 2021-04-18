import get from 'lodash/get'
import * as API from '@modules/db/hotels/services'

const table = 'hotels'

export default async function hotelsId(req, res) {
  const method = get(req, 'method', null)
  if (method === 'GET') {
    const rtn = await getOne(req)
    res.status(200)
    return res.json(rtn)
  } else if (method === 'PATCH') {
    const rtn = await update(req)
    res.status(200)
    return res.json(rtn)
  } else if (method === 'DELETE') {
    const rtn = await softDelete(req)
    res.status(200)
    return res.json(rtn)
  } else {
    res.status(405)
    return res.json({
      message: 'Method not allowed',
    })
  }
}

async function getOne(req, res) {
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

async function update(req, res) {
  const id = get(req, 'query.id', 0)
  const updateData = get(req, 'body', {})
  const data = await API.updateItem(updateData, { table, id })

  if (!data.result.data) {
    return {
      statusCode: 404,
      message: 'Not found',
    }
  }

  return JSON.stringify(data, null, 2)
}

async function softDelete(req, res) {
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
