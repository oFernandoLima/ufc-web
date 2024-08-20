export const Questao01A = () => {
    const lista = [ 
        {a:10, b:3, c: 7},
        {a:5, b:-3, c: 9},
        {a:1, b:9, c: 40}
    ]

    return (
        <>
            <Questao01B lista={lista} /> {/* Passando a lista de objetos como propriedade para o componente Questao01B */}
        </>
    )

}

export function Questao01B({lista}) {
    return (
        <>
            {lista.map((item, index) => { // Map para percorrer a lista de objetos
                const maior = Math.max(item.a, item.b, item.c) // Math.max para pegar o maior valor entre os atributos a, b e c
                return <p key={index}>Objeto {index + 1}: Maior = {maior}</p>
            })}
        </>
    )
}