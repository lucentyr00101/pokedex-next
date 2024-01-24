import { PropsWithChildren } from "react";

const PokemonType = ({ children }: PropsWithChildren) => {
  return <span className="capitalize p-3">{children}</span>;
}
 
export default PokemonType;