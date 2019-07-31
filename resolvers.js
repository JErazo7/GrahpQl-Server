
const curso = require("./models/Curso")
const profesor = require("./models/Profesor")

const resolvers ={
    Query: {
        cursos:() => curso.query().eager('[profesor,comentarios]'),
        profesores:()=> profesor.query().eager('cursos'),
        curso:(rootValue, args) => curso.query().findById(args.id).eager('[profesor,comentarios]'),
        profesor:(rootValue, args) => profesor.query().findById(args.id).eager('cursos'),
        buscar:(_,args) => {
            return [
                profesor.query().findById(12),
                curso.query().findById(1)
            ]
        }
    },

    ResultadoBusqueda:{
        __resolveType:(obj)=>{
            if (obj.nombre) return 'Profesor'
            else return 'Curso'
        }
    },
    Mutation: {
        profesorAdd: (_, args)=>{
            return profesor.query().insert(args.profesor)
        },
        profesorEdit: (_,args)=>{
            return profesor.query().patchAndFetchById(args.profesorId, args.profesor)
        },
        profesorDelete: (_,args)=>{
            return profesor.query().findById(args.profesorId).then((profe)=>{
                return profesor.query().deleteById(args.profesorId).then((numFilas)=>{
                    if(numFilas > 0) return profe
                    throw new Error(`El profesor con id ${args.profesorId} no se pudo eliminar`)
                })
            })
        }
    }
}

module.exports = resolvers
