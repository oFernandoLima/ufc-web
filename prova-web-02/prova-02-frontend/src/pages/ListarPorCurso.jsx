import { useState, useEffect } from "react";
import AlunoService from "../services/AlunoService";
import { Link } from "react-router-dom";

function ListarPorCurso() {
  const [alunos, setAlunos] = useState([]);
  const [pintarAlunos, setPintarAlunos] = useState(false);

  useEffect(() => {
    const fetchAlunos = async () => {
      try {
        const alunoService = new AlunoService();
        const res = await alunoService.getAlunos();
        setAlunos(res.data);
      } catch (error) {
        console.error("Erro ao buscar os alunos:", error);
      }
    };

    fetchAlunos();
  }, []);

  const alunosPorCurso = alunos.reduce((acc, aluno) => {
    if (!acc[aluno.curso]) {
      acc[aluno.curso] = [];
    }
    acc[aluno.curso].push(aluno);
    return acc;
  }, {});

  function handlePintarAlunos() {
    setPintarAlunos(!pintarAlunos);
  }

  const verificarCorAluno = (ira) => {
    if (!pintarAlunos) return ""; // Sem cor se não estiver aplicado

    if (ira >= 7) return "table-info"; // Azul
    return "table-danger"; // Vermelho
  };

  return (
    <div className="page-content mx-auto p-4">
      <button onClick={handlePintarAlunos} className="btn btn-secondary mb-3">
        {pintarAlunos ? "Cancelar" : "Verificar IRA"}
      </button>
      <h2>Listar Alunos por Curso</h2>
      {Object.keys(alunosPorCurso).map((curso) => (
        <div key={curso}>
          <table className="table table-content">
            <thead>
              <tr>
                <th className="table-primary" colSpan="2"></th>
                <th className="table-primary">{curso}</th>
                <th className="table-primary"></th>
              </tr>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">IRA</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {alunosPorCurso[curso].map((aluno) => (
                <tr key={aluno.id} className={verificarCorAluno(aluno.ira)}>
                  <th scope="row">{aluno.id}</th>
                  <td>{aluno.nome}</td>
                  <td>{aluno.ira}</td>
                  <td>
                    <div className="">
                      <Link
                        to={`/alunos/editar/${aluno.id}`}
                        className="btn btn-primary mx-2"
                      >
                        Editar
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default ListarPorCurso;
