import Image from "next/image";
import PokemonType from "@/components/pokemon-type";

interface Type {
  slot: number;
  type: {
    name: string;
    url: string;
  }
}

interface Props {
  pokemon: {
    name: string;
    id: number;
    types: Type[];
    sprite_front_default: string;
  }
}

const PokemonDetails = ({
  pokemon
}: Props
) => {
  const { name, id, types, sprite_front_default } = pokemon
  return (
    <div className="m-2 border border-neutral-300 rounded">
      <div className="flex min-w-80 justify-between p-3 bg-neutral-400 text-black font-bold">
        <p className="capitalize">{name}</p>
        <p>{id}</p>
      </div>
      <Image
        className="bg-white"
        src={sprite_front_default}
        alt={name}
        width={400}
        height={400}
        style={{objectFit: 'contain'}}
        priority
      />
      {types.map((_type: Type, index: number) => {
        return <PokemonType key={index}>{_type.type.name}</PokemonType>
      })}
    </div>
  );
}
 
export default PokemonDetails;