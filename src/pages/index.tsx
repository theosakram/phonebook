import dynamic from "next/dynamic";

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
