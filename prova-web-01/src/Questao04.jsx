import { useEffect, useState } from 'react';

const promessa = new Promise((resolve) => { // Promise retornando a lista
    resolve([ 
        {"capital":["Dublin"],"population":4994724},
        {"capital":["Nicosia"],"population":1207361},
        {"capital":["Madrid"],"population":47351567}
    ])    
})

const Questao04 = () => {
    // Estados para armazenar as capitais com maior e menor população
    const [capitalComMaiorPopulacao, setCapitalComMaiorPopulacao] = useState('');
    const [capitalComMenorPopulacao, setCapitalComMenorPopulacao] = useState('');

    useEffect(() => {
        const fetchCapitais = async () => {
            try {
                // Requisição para a Promise usando async/await
                const response = await promessa
                response.sort((a, b) => b.population - a.population) // Ordena as capitais de acordo com a população
                setCapitalComMaiorPopulacao(response[0].capital[0]) // Armazena a capital com maior população
                setCapitalComMenorPopulacao(response[response.length - 1].capital[0]) // Armazena a capital com menor população
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

export default Questao04;