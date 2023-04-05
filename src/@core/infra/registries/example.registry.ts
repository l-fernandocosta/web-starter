import { GetAllPokemonsUseCase } from "@/@core/application/pokemons/get-all-pokemons.usecase";
import { PokemonGateway } from "@/@core/domain/pokemons/gateway/pokemon.gateway";
import { PokemonsHttpGateway } from "../application/pokemons/pokemons.http.gateway";
import { HttpRegistry, container } from "./http.registry";

export const PokemonRegistry = {
  PokemonGateway: Symbol.for("PokemonGateway"),
  GetAllPokemonsExampleUseCase: Symbol.for("GetAllPokemonsExampleUseCase"),
};

container
  .bind<PokemonGateway>(PokemonRegistry.PokemonGateway)
  .toDynamicValue((ctx) => {
    return new PokemonsHttpGateway(
      ctx.container.get(HttpRegistry.AxiosAdapter)
    );
  });

container
  .bind<GetAllPokemonsUseCase>(PokemonRegistry.GetAllPokemonsExampleUseCase)
  .toDynamicValue(
    (ctx) =>
      new GetAllPokemonsUseCase(
        ctx.container.get(PokemonRegistry.PokemonGateway)
      )
  );
