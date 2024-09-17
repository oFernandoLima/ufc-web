import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AlunoService from '../services/AlunoService';

function Criar() {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [curso, setCurso] = useState('');
    const [ira, setIra] = useState();

    function handleSubmit(e) {
        e.preventDefault();
        console.log(nome, curso, ira);

        if (!nome || !curso || !ira) {
            alert('Preencha todos os campos!');
            return;
        }
       
        const alunoService = new AlunoService();
        alunoService.createAluno({nome, curso, ira})
            .then(res => {
                console.log(res.data);
                alert('Aluno criado com sucesso!');
                navigate('/alunos/listar');
            })
            .catch(err => {
                console.error(err);
                alert('Erro ao criar aluno!');
            });

        setNome('');
        setCurso('');
        setIra('');
    }

    return (
        <div>
            <h1 style={{width: 540, marginLeft: 16, marginBottom: 4}}>Criar Aluno</h1>
            <form className="form-content" onSubmit={handleSubmit}>
                <div style={{width: 540, marginLeft: 16, marginBottom: 4}}>
                    <label className="form-label" htmlFor="inputNome">Nome:</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        id="inputNome"
                    />
                </div>
                <div style={{width: 540, marginLeft: 16, marginBottom: 4}}>
                    <label className="form-label" htmlFor="inputCurso">Curso:</label>
                    <input 
                        type="text" 
                        className='form-control' 
                        value={curso} 
                        onChange={(e) => setCurso(e.target.value)} 
                        id="inputCurso"
                    />
                </div>
                <div style={{width: 540, marginLeft: 16, marginBottom: 4}}>
                    <label className="form-label" htmlFor="inputIRA">IRA:</label>
                    <input 
                        type="number" 
                        className="form-control" 
                        value={ira} 
                        onChange={(e) => setIra(e.target.value)} 
                        id="inputIRA"
                    />
                </div>
                <button  style={{marginTop: 16, marginLeft: 16}} className="btn btn-primary" type="submit">Criar</button>
            </form>
        </div>
    );
}

export default Criar;