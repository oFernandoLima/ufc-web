import style from './03Batalha.module.css'

export function Hero({ name, imagem }) {
  return (
    <div className={style.fighter}>
      <img src={imagem} height={200} width={200} alt="" />
      <h3>{name}</h3>
    </div>
  )
}

export function Enemy({ name, imagem }) {
  return (
    <div className={style.fighter}>
      <img src={imagem} alt="" />
      <h3>{name}</h3>
    </div>
  )
}

export function Arena({ arena, children }) {
  console.log(children)
  return (
    <div className={style.arena}>
      <h2>{arena}</h2>
      <div className={style.fight}>{children}</div>
    </div>
  )
}

export function World({ children }) {
  return <div className={style.world}>{children}</div>
}
