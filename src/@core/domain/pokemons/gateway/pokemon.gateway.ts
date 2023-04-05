import { GatewayInterface } from "@/@core/domain/gateway-interface/gateway.interface";
import { PokemonInput, PokemonOutput } from "../dtos/pokemon.dto";

export abstract class PokemonGateway
  implements GatewayInterface<PokemonInput, PokemonOutput>
{
  abstract create(input: PokemonInput): Promise<PokemonOutput>;
  abstract update(input: Partial<PokemonOutput>): Promise<PokemonOutput>;
  abstract delete(id: string): Promise<void>;

  abstract get(id: string): Promise<PokemonOutput>;
  abstract getAll(): Promise<PokemonOutput[]>;
}
