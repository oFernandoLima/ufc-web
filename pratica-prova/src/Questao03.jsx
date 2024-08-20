import { useEffect, useState } from 'react';

const Questao03 = () => {
    const [highestPopulationCapital, setHighestPopulationCapital] = useState('');
    const [lowestPopulationCapital, setLowestPopulationCapital] = useState('');

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            .then(response => response.json())
            .then(data => {
                let highestPopulationIndex = 0;
                let lowestPopulationIndex = 0;

                for (let i = 1; i < data.length; i++) {
                    if (data[i].population > data[highestPopulationIndex].population) {
                        highestPopulationIndex = i;
                    }

                    if (data[i].population < data[lowestPopulationIndex].population) {
                        lowestPopulationIndex = i;
                    }
                }

                setHighestPopulationCapital(data[highestPopulationIndex].capital[0]);
                setLowestPopulationCapital(data[lowestPopulationIndex].capital[0]);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>Capital with Highest Population: {highestPopulationCapital}</h2>
            <h2>Capital with Lowest Population: {lowestPopulationCapital}</h2>
        </div>
    );
};

export default Questao03;