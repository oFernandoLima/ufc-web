import './App.css'
import { Questao01A } from './Questao01'
import Questao02 from './Questao02'
import Questao03 from './Questao03'
import Questao04 from './Questao04'

function App() {

  return (
    <>
      <div className='resposta'>
        <h2>Questão 01:</h2>
        <Questao01A />
      </div>
      <div className='resposta questao02'>
        <h2>Questão 02:</h2>
        <Questao02 />
      </div>
      <div className='resposta'>
        <h2>Questão 03:</h2>
        <Questao03 />
      </div>
      <div className='resposta'>
        <h2>Questão 04:</h2>
        <Questao04 />
      </div>
      <div className='resposta'>
        <h2>Questão 05:</h2>
        <p>
          O problema do "PROPS DRILLING" ocorre quando você precisa passar dados para um componente "profundo/distante", uma vez que será necessário passar esses dados através de vários componentes intermediários que, provavelmente, não irão utilizá-los. Sendo assim, a utilização de Contextos no React ajuda a solucionar esse problema ao permitir compartilhar dados ente componentes sem utilizar as "props", isso é possível ao criar um Contexto (createContext) com os dados a serem compartilhados e provê-los (Provider) aos componentes interessados que irão acessá-los através do hook useContext.
        </p>
        <p><strong>Exemplo no arquivo Questao05.txt</strong></p>
      </div>
    </>
  )
}

export default App
