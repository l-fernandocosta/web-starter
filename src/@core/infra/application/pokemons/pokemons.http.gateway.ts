import {
  PokemonInput,
  PokemonOutput,
} from "@/@core/domain/pokemons/dtos/pokemon.dto";
import { PokemonGateway } from "@/@core/domain/pokemons/gateway/pokemon.gateway";
import * as axios from "axios";

export class PokemonsHttpGateway implements PokemonGateway {
  constructor(private http: axios.AxiosInstance) {}

  create(input: PokemonInput): Promise<PokemonOutput> {
    throw new Error("Method not implemented.");
  }
  update(input: Partial<PokemonOutput>): Promise<PokemonOutput> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  get(id: string): Promise<PokemonOutput> {
    throw new Error("Method not implemented.");
  }

  async getAll(): Promise<PokemonOutput[]> {
    const pokemons: PokemonOutput[] = await this.http
      .get<PokemonOutput[]>("/ditto")
      .then((res) => res.data)
      .catch((e) => {
        throw e;
      });

    return pokemons;
  }
}
