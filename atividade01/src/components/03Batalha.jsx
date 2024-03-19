import { Children, cloneElement } from 'react'

import style from './03Batalha.module.css'

export function Hero({ name, imagem, arena }) {
  return (
    <div className={style.fighter}>
      <h3>Arena: {arena}</h3>
      <img src={imagem} height={200} width={200} alt="" />
      <h3>{name}</h3>
    </div>
  )
}

export function Enemy({ name, imagem, arena }) {
  return (
    <div className={style.fighter}>
      <h3>Arena: {arena}</h3>
      <img src={imagem} alt="" />
      <h3>{name}</h3>
    </div>
  )
}

export function Arena({ arena, children }) {
  return (
    <div className={style.arena}>
      {/* <h2>{arena}</h2> */}
      {/* <div className={style.fight}>{children}</div> */}
      <div className={style.fight}>
        {Children.map(children, (fighter, index) => {
          return cloneElement(fighter, { key: index, arena })
        })}
      </div>
    </div>
  )
}

export function World({ children }) {
  return <div className={style.world}>{children}</div>
}
