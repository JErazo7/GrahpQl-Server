exports.up = async db => (
  await db.schema.createTable('comentarios', (table) => {
      table.increments('id').primary().unsigned()
      table.string('nombre')
      table.string('cuerpo')
      table.integer('curso_id').unsigned()
    })
  
)

exports.down = async db => (
  await db.schema.dropTable('comentarios')
  
)
