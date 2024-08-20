import { useDispatch, useSelector } from "react-redux"
import { decrementar, decrementarPorQtd, incrementar, incrementarPorQtd, zerar } from "../slice/contadorSlice"

export function ContadorRedux() {

    const contador = useSelector((state) => state.contador.value)

    const despachante = useDispatch()

    return (
        <>
            <h1>Contador: {contador}</h1>
            <button onClick={()=>{
                despachante(incrementar())
            }}>Incrementar</button>
            <button onClick={()=>{
                despachante(incrementarPorQtd(10))
            }}>IncrementarPorQtd</button>
            <button onClick={()=>{
                despachante(zerar())
            }}>Zerar</button>
            <button onClick={()=>{
                despachante(decrementar())
            }}>Decrementar</button>
            <button onClick={()=>{
                despachante(decrementarPorQtd(10))
            }}>DecrementarPorQtd</button>
        </>
    )
}