export const Questao01A = () => {
    const lista = [
        {a:10, b:3, c: 7},
        {a:5, b:-3, c: 9},
        {a:1, b:9, c: 40}
    ]

    return (
        <>
            <Questao01B lista={lista} />
        </>
    )

}

export function Questao01B({lista}) {
    return (
        <>
            {lista.map((item, index) => {
                const maior = Math.max(item.a, item.b, item.c)
                return <p key={index}>Objeto {index + 1}: Maior = {maior}</p>
            })}
        </>
    )
}