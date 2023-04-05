import { useFetchPokemons } from "@/utils/queries/pokemons";
import { Flex, Heading } from "@chakra-ui/react";

export default function Home() {
  const { data, isLoading } = useFetchPokemons();
  return (
    <Flex flexDir={"column"} w="100%">
      <Heading>hello world</Heading>
      {isLoading ? (
        <Heading>Carregando..</Heading>
      ) : (
        <div>{JSON.stringify(data)}</div>
      )}
    </Flex>
  );
}
