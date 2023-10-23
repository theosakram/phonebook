import dynamic from "next/dynamic";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ContactListContainer = dynamic(
  () =>
    import("@/uikit/containers/ContactListContainer").then(
      (comp) => comp.ContactListContainer
    ),
  { ssr: false }
);

export default function Home() {
  return <ContactListContainer />;
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};
