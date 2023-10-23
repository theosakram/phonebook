import { PropsWithChildren, useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";
import { persistCache, LocalStorageWrapper } from "apollo3-cache-persist";
import { getEnv } from "@/shared/getEnv";

const {
  publicRuntimeConfig: { baseURL },
} = getEnv();

const cache = new InMemoryCache();

export const QueryProviders = (props: PropsWithChildren) => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject>>();

  useEffect(() => {
    const init = async () => {
      // persist cache for
      // apollo client
      await persistCache({
        cache,
        storage: new LocalStorageWrapper(window.localStorage),
      });

      setClient(
        new ApolloClient({
          uri: baseURL,
          cache,
        })
      );
    };

    init().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!client) {
    return <h2>Initializing app...</h2>;
  }

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};
