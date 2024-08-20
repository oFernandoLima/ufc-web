import { useState } from 'react';

const Questao02 = () => {
    const [isFront, setIsFront] = useState(true); // Estado para controlar a imagem do Pokemon

    const toggleImage = () => {
        setIsFront(!isFront); // Altera o estado da imagem do Pokemon
    };

    return (
        <div>
            <img
                // Renderiza a imagem do Pokemon de acordo com o estado isFront
                src={isFront ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png'}
                alt="Pikachu"
            />
            <button onClick={toggleImage}>Virar Pokemon</button> {/* Botão para virar a imagem do Pokemon */}
        </div>
    );
};

export default Questao02;