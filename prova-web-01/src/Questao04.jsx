import { useEffect, useState } from 'react';

const promessa = new Promise((resolve) => {
    resolve([
        {"capital":["Dublin"],"population":4994724},
        {"capital":["Nicosia"],"population":1207361},
        {"capital":["Madrid"],"population":47351567}
    ])    
})

const Questao04 = () => {
    const [capitalComMaiorPopulacao, setCapitalComMaiorPopulacao] = useState('');
    const [capitalComMenorPopulacao, setCapitalComMenorPopulacao] = useState('');

    useEffect(() => {
        const fetchCapitais = async () => {
            try {
                const response = await promessa
                response.sort((a, b) => b.population - a.population)
                setCapitalComMaiorPopulacao(response[0].capital[0])
                setCapitalComMenorPopulacao(response[response.length - 1].capital[0])
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