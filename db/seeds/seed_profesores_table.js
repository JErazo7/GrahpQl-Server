const casual = require('casual')

exports.seed = async db => {
  await db('profesores').del().then(() => {
    const promises = Array(10).fill().map((_, i) => {
      return db('profesores').insert([{
        id: i + 1,
        nombre: casual.name,
        nacionalidad: casual.country,
        genero: casual.random_element(['MASCULINO', 'FEMENINO'])
      }])
    })

    return Promise.all(promises)
  })
}
