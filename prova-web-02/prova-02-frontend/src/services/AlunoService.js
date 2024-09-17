import axios from 'axios';

const API_URL = 'http://localhost:3001/alunos';

class AlunoService{
    
        getAlunos(){
            return axios.get(API_URL + '/listar');
        }
    
        getAlunoById(alunoId){
            return axios.get(API_URL + '/recuperar/' + alunoId);
        }
    
        createAluno(aluno){
            return axios.post(API_URL + '/cadastrar', aluno);
        }
    
        updateAluno(id, aluno){
            return axios.put(API_URL + '/atualizar/' + id, aluno);
        }
    
        deleteAluno(alunoId){
            return axios.delete(API_URL + '/remover/' + alunoId);
        }
    }


export default AlunoService