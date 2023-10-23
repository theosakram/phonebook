import { PropsWithChildren } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { getEnv } from "@/shared/getEnv";

const {
  publicRuntimeConfig: { baseURL },
} = getEnv();

const client = new ApolloClient({
  uri: baseURL,
  cache: new InMemoryCache(),
});

export const QueryProviders = (props: PropsWithChildren) => {
  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};
