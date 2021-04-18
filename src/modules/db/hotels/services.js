/* eslint-disable camelcase */
import * as Repository from '../repository'

const HOUR7 = 7 * 60 * 60 * 1000
const currentDate = new Date(new Date().getTime() + HOUR7)
  .toISOString()
  .split('T')[0]
const currentTime = new Date(new Date().getTime() + HOUR7)
  .toISOString()
  .split('T')[1]
  .split('.')[0]

export async function findAll({ offset = 0, limit = 10 }) {
  const rows = await Repository.findAll({
    table: 'hotels',
    orderBy: ['id', 'desc'],
    where: { status: 1 },
    offset,
    limit,
  }).then(rows => rows)

  return {
    result: {
      numRows: rows.length ?? 0,
      data: rows.length > 0 ? JSON.parse(JSON.stringify(rows)) : null,
    },
  }
}

export async function findById({ id, fields = [], table = 'hotels' }) {
  const rows = await Repository.findById({
    fields,
    table,
    where: { id, status: 1 },
  }).then(rows => rows)

  return {
    result: {
      numRows: rows.length ?? 0,
      data: rows.length > 0 ? JSON.parse(JSON.stringify(rows)) : null,
    },
  }
}

export async function addItem(
  { name, description, address, location, tel, rooms, staffs },
  { table = 'hotels' },
) {
  if (
    !name ||
    !description ||
    !address ||
    !location ||
    !tel ||
    !rooms ||
    !staffs
  ) {
    return false
  }
  const id = await Repository.addItem(
    {
      name,
      description,
      address,
      location,
      tel,
      rooms,
      staffs,
      status: 1,
      created_date: `${currentDate} ${currentTime}`,
    },
    { table },
  ).then(rows => [rows])

  const result = await findById({ id, table })
  return result
}

export async function updateItem(fields, { table, id }) {
  const rows = await Repository.updateItem(fields, {
    table,
    where: { id: id },
  })
  if (rows) {
    const result = await findById({ id, table: 'hotels' })
    console.log('updateItem result', result)
    return result
  }
  return null
}

export async function deleteItem({ id }) {
  const rows = await Repository.updateItem(
    { status: 0 },
    {
      table: 'hotels',
      where: { id: id },
    },
  ).then(rows => rows)

  if (rows) {
    const result = await findAll({ offset: 0, limit: 10 })
    return result
  }
  return null
}
