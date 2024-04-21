export interface PokemonModel {
  id: number;
  name: string;
  image: string;
  type: string[];
  weight: number;
  sprites: PokemonModelSprites;
  types: any[];
}

export interface PokemonModelSprites {
  front_default: string;
  other: any;
  back_default: string;
  front_shiny: string;
  back_shiny: string;
}
