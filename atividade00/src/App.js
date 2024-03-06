import  MeusDados  from "./components/atividade00/01MeusDados";
import  MeusDadosWithProps  from "./components/atividade00/02MeusDados";
import Temperatura from "./components/atividade00/03Temperatura";
import "./global.css";

function App() {
  return (
    <div className="container">
      <MeusDados />
      <MeusDadosWithProps 
        name="Luis Fernando Batista Lima" 
        course="Engenharia de Software" 
        university="Universidade Federal do Ceará - Campus Quixadá"
      />
      <Temperatura temperaturaEmKelvin={303.15} />
    </div>
  );
}

export default App;
