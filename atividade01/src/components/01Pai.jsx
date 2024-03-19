import { Filho } from './01Filho'
import style from './01Pai.module.css'

export function Pai() {
  return (
    <div className={style.pai}>
      <h1>Pai</h1>
      <Filho altura={1.8} peso={60} />
      <Filho altura={1.8} peso={50} />
      <Filho altura={1.8} peso={90} />
    </div>
  )
}
