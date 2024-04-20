import { PokemonResultModel } from "./pokemon-result.model";

export interface PokemonPageModel {
  count: number;
  next: string;
  previous: any;
  results: PokemonResultModel[];
}
