import { useEffect, useState } from 'react';

const Questao03 = () => {
    // Estados para armazenar as capitais com maior e menor população
    const [capitalComMaiorPopulacao, setCapitalComMaiorPopulacao] = useState('');
    const [capitalComMenorPopulacao, setCapitalComMenorPopulacao] = useState('');

    useEffect(() => {
        const fetchCapitais = async () => {
            try {
                // Requisição para a API usando async/await
                const response = await fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
                const data = await response.json()
                data.sort((a, b) => b.population - a.population) // Ordena as capitais de acordo com a população
                setCapitalComMaiorPopulacao(data[0].capital[0]) // Armazena a capital com maior população
                setCapitalComMenorPopulacao(data[data.length - 1].capital[0]) // Armazena a capital com menor população
            } catch (error) {
                console.log(error);
            }
        }
        fetchCapitais()
    }, []);

    return (
        <div>
            <p>Capital Com Maior Populacao: {capitalComMaiorPopulacao}</p>
            <p>Capital Com Menor Populacao: {capitalComMenorPopulacao}</p>
        </div>
    );
};

export default Questao03;