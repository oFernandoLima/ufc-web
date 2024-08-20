import { useState } from 'react';

const Questao02 = () => {
    const [isFront, setIsFront] = useState(true);

    const toggleImage = () => {
        setIsFront(!isFront);
    };

    return (
        <div>
            <img
                src={isFront ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'}
                alt="Pikachu"
            />
            <button onClick={toggleImage}>Virar Pokemon</button>
        </div>
    );
};

export default Questao02;