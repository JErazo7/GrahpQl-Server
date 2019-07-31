const casual = require('casual')

exports.seed = async db => {
  await db('comentarios').del().then(() => {
    const promises = Array(40).fill().map((_, id) => {
      return db('comentarios').insert([{
        id,
        nombre: casual.name,
        cuerpo: casual.sentences(2),
        curso_id: casual.integer(1, 10)
      }])
    })

    return Promise.all(promises)
  })
}
