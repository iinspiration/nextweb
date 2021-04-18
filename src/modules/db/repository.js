import connect from 'knex'

const knex = process.env.DB_HOST
  ? connect({
      client: 'mysql',
      connection: {
        host: `${process.env.DB_HOST}`,
        user: `${process.env.DB_USER}`,
        password: `${process.env.DB_PASS}`,
        port: `${process.env.DB_PORT}`,
        database: `${process.env.DB_DATABASE}`,
        timezone: 'Asia/Bangkok',
      },
    })
  : null

export function findAll({
  table,
  orderBy = [],
  where = null,
  offset = 0,
  limit = 10,
}) {
  return knex
    .select()
    .from(table)
    .offset(offset)
    .limit(limit)
    .orderBy(...orderBy)
    .where(where)
}

export function findById({ fields = [], table, where = null }) {
  return knex
    .select(fields)
    .limit(1)
    .where(where)
    .from(table)
}

export async function addItem(fields, { table }) {
  const row = await knex.insert(fields).into(table)
  return row
}

export async function updateItem(fields, { table, where = null }) {
  const row = await knex(table)
    .where(where)
    .update(fields)
  return row
}

// export async function deleteItem(data, { table, where = null }) {
//   const row = await knex(table)
//     .where(where)
//     .update(data)
//   return row
// }
