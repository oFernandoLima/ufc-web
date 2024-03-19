import style from './App.module.css'
import dekuImg from './assets/deku.jpg'
import gojoImg from './assets/gojo.jpg'
import sukunaImg from './assets/sukuna.jpg'
import todorokiImg from './assets/todoroki.jpg'
import vsImg from './assets/vs.png'
import { Pai } from './components/01Pai'
import * as PcComponents from './components/02MeuPc'
import { Arena, Enemy, Hero, World } from './components/03Batalha'

export function App() {
  return (
    <div className={style.content}>
      <Pai />
      <div className={style.meuPC}>
        <h1>Meu PC</h1>
        <PcComponents.PlacaMae
          nome="Gigabyte B760M AORUS ELITE"
          preco="R$ 1.199,99"
        />
        <PcComponents.Memoria
          nome="Kingston Fury Beast RGB, 16GB, 3200MHz, DDR4"
          preco="R$ 299,99"
        />
        <PcComponents.PlacaDeVideo
          nome="RTX 4060 Ti VENTUS 3X 8G OC MSI"
          preco="R$ 2.549,99"
        />
      </div>
      <World>
        <Arena arena="Colegio Técnico de Magia Metropolitana de Tokio">
          <Hero name="Satoru Gojo" imagem={gojoImg} />
          <img src={vsImg} alt="" />
          <Enemy name="Ryomen Sukuna" imagem={sukunaImg} />
        </Arena>
        <Arena arena="Estádio do Festival de Esportes - U.A.">
          <Hero name="Izuku Midoriya" imagem={dekuImg} />
          <img src={vsImg} alt="" />
          <Enemy name="Shoto Todoroki" imagem={todorokiImg} />
        </Arena>
      </World>
    </div>
  )
}
