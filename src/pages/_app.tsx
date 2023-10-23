import { QueryProviders } from "@/providers/QueryProviders";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter } from "next/font/google";
import { Sidebar } from "@/uikit/components/Sidebar";
import { stack } from "../../styled-system/patterns";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Phonebook App</title>
      </Head>
      <QueryProviders>
        <main className={inter.className}>
          <div
            className={stack({
              direction: "row",
              w: "100%",
              h: "100vh",
              overflowY: "hidden",
              gap: "0rem",
            })}
          >
            <Sidebar
              menus={[
                {
                  title: "All Contacts",
                  href: { pathname: "/", query: { type: "all" } },
                },
                {
                  title: "Friends",
                  href: { pathname: "/", query: { type: "friends" } },
                },
              ]}
            />
            <Component {...pageProps} />
          </div>
        </main>
      </QueryProviders>
    </>
  );
}
