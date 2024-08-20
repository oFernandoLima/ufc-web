import './App.css'
import { Questao01A } from './Questao01'
import { Questao02 } from './Questao02'
import Questao03 from './Questao03'
import  MyComponent, {MyContextProvider}  from './Questao04'

function App() {

  return (
    <>
      <Questao01A />
      <Questao02 />
      <Questao03 />
      <MyContextProvider>
          <MyComponent />
      </MyContextProvider>
    </>
  )
}

export default App
