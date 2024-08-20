import { useEffect, useState } from "react"

const Questao01A = () => {
    const alunos = [
        { nome: "Sicrano", notas: {ap1: 8.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }
    ]

    const [medias, setMedias] = useState([])
    const [loading, setLoading] = useState(true)

    function receberNotas(notas) {
        setMedias(notas)
        setLoading(false)
        handleAlunos()
    }

    function handleAlunos() {
        return medias.map((media, index) => {
            if(media >= 6) {
                return <li key={index}>{alunos[index].nome} - Aprovado</li>
            }
            return null
        })
    }
        
    return (
        <div>
            <Questao01B alunos={alunos} enviarNotas={receberNotas}/>
            {loading ? <p>Carregando...</p> : <ul>{handleAlunos()}</ul>}
        </div>
    )
}

function Questao01B({alunos, enviarNotas}) {
    useEffect(() => {
        const medias = alunos.map(aluno => {
            return (aluno.notas.ap1 + aluno.notas.ap2) / 2
        })
        enviarNotas(medias)
    }, [])
    return (
        <div>
            <p>Component B</p>
        </div>
    )
}

export { Questao01A, Questao01B }