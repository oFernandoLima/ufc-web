import style from './01Filho.module.css'

export function Filho({ altura, peso }) {
  const imc = peso / (altura * altura)

  function classificacaoIMC() {
    if (imc < 18) {
      return (
        <h3>
          Abaixo do peso <span className={style.yellow} />
        </h3>
      )
    } else if (imc > 25) {
      return (
        <h3>
          Acima do peso <span className={style.red}></span>
        </h3>
      )
    } else {
      return (
        <h3>
          Peso ideal <span className={style.green} />
        </h3>
      )
    }
  }

  return (
    <div className={style.filho}>
      <h2>Filho</h2>
      <div>
        <p>Altura: {altura}m</p>
        <p>Peso: {peso}kg</p>
        <p>IMC: {imc.toFixed(2)}</p>
      </div>
      {classificacaoIMC()}
    </div>
  )
}
