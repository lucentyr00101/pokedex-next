import SearchPokemon from "@/components/search";
import { getPokemonIndex } from "@/app/api/pokemon";
import PokemonPreviewCard from '@/components/pokemon-preview-card'

const  PokemonIndex = async () => {

  const data = await getPokemonIndex()

  console.log(data)

  return (
    <>
      <div>
        <SearchPokemon />
      </div>
      <div>
        {data?.map((pokemon: any) => {
          return <PokemonPreviewCard key={pokemon.id} pokemon={pokemon} />
        })}
      </div>
    </>
  )
}
 
export default PokemonIndex ;