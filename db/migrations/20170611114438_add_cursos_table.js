exports.up = async db => (
  await db.schema.createTable('cursos', (table) => {
    table.increments('id').primary().unsigned()
    table.string('titulo')
    table.string('descripcion')
    table.integer('profesor_id').unsigned()
    table.string('genero')
    table.double('rating').unsigned()
  })

)

exports.down = async db => (  
    await db.schema.dropTable('cursos')
)
