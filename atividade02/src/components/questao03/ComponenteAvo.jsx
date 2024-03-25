import { useState } from 'react'
import { Filho } from './ComponenteFilho'
import { Contador } from './ContadorContexto'

import { Imagem } from './Imagem'
import { Decrementar } from './Decrementar'
import { Incrementar } from './Incrementar'

import style from './ComponenteAvo.module.css'

export function Avo() {
  const [numero, setNumero] = useState(4)

  return (
    <div className={style.avo}>
      <h1>Avo</h1>
      <Contador.Provider value={{ numero, setNumero }}>
        <Imagem id={numero} />
        <Filho />
        <Incrementar />
        <Decrementar />
      </Contador.Provider>
    </div>
  )
}
