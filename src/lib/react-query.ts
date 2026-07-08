import { QueryCache, QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => {
      //error is a type of Problem
      //throw notification
    },
  }),

  defaultOptions: {
    queries: {
      retry: false, //when query fails react query won't try it again. manage it ourselves
      refetchOnWindowFocus: false, //when u change tab or minimize web tab, it won't fetch again
      throwOnError: false, //We don't want default Error handling of react query
      gcTime: 1000 * 60 * 24, //after this time it will refetch
    },
  },
});
