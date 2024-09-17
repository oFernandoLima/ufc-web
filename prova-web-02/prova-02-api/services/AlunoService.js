const AlunoModel = require("../models/AlunoModel")
const alunos = require("../data/data")

let id = 7

class AlunoService {
    static list(){
        return alunos
    }

    static register(data) {
        let aluno = new AlunoModel(
            id++,
            data.nome,
            data.curso,
            data.ira,
        )
        alunos.push(aluno)
        return aluno
    }

    static retrieve(id){
        for(let i=0;i<alunos.length;i++)
            if(alunos[i].id == id) return alunos[i]
        return null
    }

    static update(id,data){
        for(let i=0;i<alunos.length;i++)
            if(alunos[i].id == id){
                alunos[i].nome = data.nome
                alunos[i].curso = data.curso
                alunos[i].ira = data.ira
                return alunos[i]
            }
        return null
    }

    static delete(id) {
        for(let i=0;i<alunos.length;i++)
            if(alunos[i].id == id){
                alunos.splice(i,1) 
                return true
            }
        return false
    }
}

module.exports = AlunoService