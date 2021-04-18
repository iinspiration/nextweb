import get from 'lodash/get'
import { checkReqAuth } from '@lib/auth'
import * as API from '@modules/db/hotels/services'

export default async function hotels(req, res) {
  const method = get(req, 'method', null)
  const headers = get(req, 'headers', {})
  if (!checkReqAuth(headers)) {
    res.status(401)
    return res.json(
      JSON.stringify(
        {
          statusCode: 401,
          message: 'Unauthorized',
        },
        null,
        2,
      ),
    )
  }

  if (method === 'GET') {
    const rtn = await getAll(req)
    res.status(200)
    return res.json(rtn)
  } else if (method === 'POST') {
    const rtn = await add(req)
    res.status(200)
    return res.json(rtn)
  } else {
    res.status(405)
    return res.json({
      message: 'Method not allowed',
    })
  }
}

async function getAll(req, res) {
  const offset = get(req, 'query.offset', 0)
  const limit = get(req, 'query.limit', 10)
  const option = {
    table: ['hotels'],
    offset,
    limit,
  }
  const data = await API.findAll(option)
  if (!data.result.data) {
    return {
      statusCode: 404,
      message: 'Not found',
    }
  }
  return JSON.stringify(data, null, 2)
}

async function add(req, res) {
  // const ipAddress = req.connection
  const options = req.body
  let data = null
  try {
    data = await API.addItem({ ...options }, { table: 'hotels' })
  } catch (error) {
    return {
      statusCode: 400,
      message: error,
    }
  }

  if (data !== null) {
    return JSON.stringify(data, null, 2)
  }
  return {
    statusCode: 400,
    message: 'Bad Request',
  }
}
