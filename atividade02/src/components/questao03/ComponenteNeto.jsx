import { useContext } from 'react'
import { Imagem } from './Imagem'
import { Contador } from './ContadorContexto'

export function Neto() {
  const { numero } = useContext(Contador)

  return (
    <div>
      <h1>Neto</h1>
      <Imagem id={numero + 2} />
    </div>
  )
}
