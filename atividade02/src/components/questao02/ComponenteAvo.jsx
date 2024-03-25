import { Filho } from './ComponenteFilho'
import { Contador } from './ContadorContexto'

import { Imagem } from './Imagem'
import style from './ComponenteAvo.module.css'

export function Avo() {
  const numero = 1

  return (
    <div className={style.avo}>
      <h1>Avo</h1>
      <Contador.Provider value={numero}>
        <Imagem id={numero} />
        <Filho />
      </Contador.Provider>
    </div>
  )
}
