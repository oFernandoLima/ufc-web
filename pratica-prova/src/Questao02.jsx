import { useRef, useState } from "react"

export function Questao02() {
    function handleVirar(){
        setVirar(!virar)
        url.current.src = virar ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
    }

    const url = useRef("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")

    const [virar, setVirar] = useState(false)
  return (
    <>
        <h2>Pokemon</h2>
        <img ref={url} src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png" alt="Pikachu" />
        <button onClick={handleVirar}>Virar</button>
    </>
  )
}