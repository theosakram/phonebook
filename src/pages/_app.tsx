import { QueryProviders } from "@/providers/QueryProviders";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryProviders>
      <Component {...pageProps} />
    </QueryProviders>
  );
}
