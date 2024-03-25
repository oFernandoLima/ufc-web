import { useContext } from 'react'
import { Contador } from './ContadorContexto'

export function Incrementar() {
  const { setNumero } = useContext(Contador)

  function incrementarNumero() {
    setNumero((numero) => numero + 1)
  }

  return (
    <div>
      <button onClick={incrementarNumero}>Incrementar</button>
    </div>
  )
}
