import { PokemonOutput } from "@/@core/domain/pokemons/dtos/pokemon.dto";
import { PokemonGateway } from "@/@core/domain/pokemons/gateway/pokemon.gateway";

export class GetAllPokemonsUseCase {
  constructor(private gateway: PokemonGateway) {}

  async execute(): Promise<PokemonOutput[]> {
    const pokemons = await this.gateway.getAll();
    return pokemons;
  }
}
