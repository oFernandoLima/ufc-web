import style from './02MeuPC.module.css'

export function PlacaMae({ nome, preco }) {
  return (
    <div className={style.pcComponent}>
      <h2>Placa Mãe</h2>
      <div>
        <p>
          <strong>Nome:</strong> {nome}
        </p>
        <p>
          <strong>Preco:</strong> {preco}
        </p>
      </div>
    </div>
  )
}

export function Memoria({ nome, preco }) {
  return (
    <div className={style.pcComponent}>
      <h2>Memória</h2>
      <div>
        <p>
          <strong>Nome:</strong> {nome}
        </p>
        <p>
          <strong>Preco:</strong> {preco}
        </p>
      </div>
    </div>
  )
}

export function PlacaDeVideo({ nome, preco }) {
  return (
    <div className={style.pcComponent}>
      <h2>Placa de Vídeo</h2>
      <div>
        <p>
          <strong>Nome:</strong> {nome}
        </p>
        <p>
          <strong>Preco:</strong> {preco}
        </p>
      </div>
    </div>
  )
}
