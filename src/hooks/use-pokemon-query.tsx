import { fetchPokemonList } from "@/services/pokemon-api";
import { useInfiniteQuery } from "@tanstack/react-query";

export const usePokemonQuery = () =>
  useInfiniteQuery({
    queryKey: ["pokemon"],
    queryFn: ({ pageParam }) => fetchPokemonList(pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.next,
  });
