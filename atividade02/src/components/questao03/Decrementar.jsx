import { useContext } from 'react'
import { Contador } from './ContadorContexto'

export function Decrementar() {
  const { setNumero } = useContext(Contador)

  function decrementarNumero() {
    setNumero((numero) => numero - 1)
  }

  return (
    <div>
      <button onClick={decrementarNumero}>Decrementar</button>
    </div>
  )
}
