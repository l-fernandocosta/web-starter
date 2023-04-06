import { GetAllPokemonsUseCase } from "@/@core/application/pokemons/get-all-pokemons.usecase";
import { PokemonRegistry } from "@/@core/infra/registries/example.registry";
import { container } from "@/@core/infra/registries/http.registry";
import { QUERIES_KEYS } from "@/utils/queries/queries-key";
import { useQuery } from "react-query";

export const get = async () => {
  const usecase = container.get<GetAllPokemonsUseCase>(
    PokemonRegistry.GetAllPokemonsExampleUseCase
  );

  const pokemons = await usecase.execute();
  return pokemons;
};

export const useFetchPokemons = () => {
  return useQuery([QUERIES_KEYS.POKEMONS], get);
};
