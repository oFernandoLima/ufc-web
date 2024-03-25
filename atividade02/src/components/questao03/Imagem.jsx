export function Imagem({ id }) {
  const url =
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

  return (
    <div>
      <img src={url + id + '.png'} alt="Imagem do Pokemon" width={100} />
    </div>
  )
}
