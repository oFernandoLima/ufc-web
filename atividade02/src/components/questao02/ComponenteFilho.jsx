import { useContext } from 'react'
import { Neto } from './ComponenteNeto'
import { Contador } from './ContadorContexto'
import { Imagem } from './Imagem'

export function Filho() {
  const numero = useContext(Contador)

  return (
    <div>
      <h1>Filho</h1>
      <Imagem id={numero + 1} />
      <Neto />
    </div>
  )
}
