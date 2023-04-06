import { useFetchPokemons } from "@/utils/queries/pokemons";
import { useFavoriteRepoStore } from "@/utils/store/repositories/useFavoriteRepositories";
import { Button, Divider, Flex, Heading } from "@chakra-ui/react";

const items = [
  {
    id: 1,
    name: "teste",
  },
  {
    id: 2,
    name: "teste2",
  },
];

export default function Home() {
  const { data, isLoading } = useFetchPokemons();

  const favorites = useFavoriteRepoStore((state) => state.favorites);
  const add = useFavoriteRepoStore((state) => state.addToFavorites);
  const remove = useFavoriteRepoStore((state) => state.removeFromFavorites);

  console.log(data);
  console.log(favorites);

  return (
    <Flex flexDir={"column"} w="100%">
      <Heading>hello world</Heading>
      {isLoading ? <Heading>Carregando..</Heading> : <div>Hello world 2</div>}

      {items?.map((item) => (
        <>
          <Flex key={item.id} flexDir={"column"} gap={2} justify={"center"}>
            <Heading>{item.name}</Heading>
            <Button onClick={() => add(item.id)}>Adicionar</Button>
            <Button onClick={() => remove(item.id)}>remover</Button>
            <Divider w="100%" />
          </Flex>
        </>
      ))}
    </Flex>
  );
}
