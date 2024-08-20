// Hooks são funções que permitem o uso de estado e outros recursos do React em componentes funcionais, que antes 
// só eram possíveis em componentes de classe. Eles simplificam a lógica do código e promovem reutilização.

// useState: Gerencia o estado em um componente funcional. Exemplo:

import { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>{contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}

// useEffect: Executa efeitos colaterais em componentes funcionais, como buscar dados ou manipular o DOM. Exemplo:

import { useEffect, useState } from 'react';

function DadosUsuario() {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    fetch('https://api.exemplo.com/usuario')
      .then(resposta => resposta.json())
      .then(dados => setDados(dados));
  }, []);

  return <div>{dados ? `Usuário: ${dados.nome}` : 'Carregando...'}</div>;
}

// Esses hooks são essenciais para tornar componentes funcionais mais poderosos e flexíveis.