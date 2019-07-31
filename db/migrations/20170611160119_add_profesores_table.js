exports.up = async db => (
  await db.schema.createTable('profesores', (table) => {
    table.increments('id').primary().unsigned()
    table.string('nombre')
    table.string('nacionalidad')
    table.string('genero')
  })

)

exports.down = async db => (
  await db.schema.dropTable('profesores')

)
