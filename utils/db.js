const faunadb = require('faunadb')
export const q = faunadb.query

export const client = new faunadb.Client({
  secret: 'fnAEd6hxlfACT0t2cF19Tq6cZY6ciQSJQ-sANytc'
})