import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import AlunoService from "../services/AlunoService";

const Listar = () => {
  const [pintarAlunos, setPintarAlunos] = useState(false);
  const [alunos, setAlunos] = useState([]);
  const [atualizar, setAtualizar] = useState(false);

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
  }, [atualizar]);

  function handlePintarAlunos() {
    setPintarAlunos(!pintarAlunos);
  }

  const verificarCorAluno = (ira) => {
    if (!pintarAlunos) return ""; // Sem cor se não estiver aplicado

    const media = calcularMediaIraAlunos();
    if (ira >= media) return "table-info"; // Azul
    return "table-danger"; // Vermelho
  };

  const handleDelete = async (id) => {
    const alunoService = new AlunoService();
    setAtualizar(false);
    if (window.confirm("Tem certeza que deseja deletar esse aluno?")) {
      try {
        const res = await alunoService.deleteAluno(id); // Tenta deletar o aluno
        console.log(res); // Verifica a resposta da API
        alert("Aluno deletado com sucesso!");
        setAlunos(alunos.filter((aluno) => aluno.id !== id)); // Atualiza a lista de alunos
        setAtualizar(true);
      } catch (error) {
        console.error("Erro ao deletar o aluno:", error); // Log do erro
        alert("Erro ao deletar o aluno!");
      }
    }
  };

  function calcularMediaIraAlunos() {
    let somaIra = 0;
    alunos.forEach((aluno) => {
      somaIra += Number(aluno.ira);
    });
    return somaIra / alunos.length;
  }

  const tabelaAlunos = () => {
    const alunosTabelados = alunos.map((aluno) => (
      <tr key={aluno.id} className={verificarCorAluno(aluno.ira)}>
        <th scope="row">{aluno.id}</th>
        <td>{aluno.nome}</td>
        <td>{aluno.curso}</td>
        <td>{Number(aluno.ira).toFixed(1)}</td>
        <td>
          <div>
            <Link
              className="btn btn-primary button-space"
              to={`/alunos/editar/${aluno.id}`}
            >
              Editar
            </Link>
            <button
              onClick={() => handleDelete(aluno.id)}
              className="btn btn-danger ml-4"
            >
              Deletar
            </button>
          </div>
        </td>
      </tr>
    ));

    return (
      <div>
        <table className="table table-content ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Ira</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>{alunosTabelados}</tbody>
          <tfoot>
            <tr>
              <td className="table-success" colSpan="3">
                Média IRA:
              </td>
              <td className="table-success">{calcularMediaIraAlunos().toFixed(1)}</td>
              <td className="table-success"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  };

  return (
    <div className="page-content mx-auto p-4">
      <button onClick={handlePintarAlunos} className="btn btn-secondary mb-3">
        {pintarAlunos ? "Cancelar" : "Verificar IRA"}
      </button>
      <h2>Listar Alunos</h2>
      {tabelaAlunos()}
    </div>
  );
};

export default Listar;
