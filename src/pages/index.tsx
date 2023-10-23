import { GET_CONTACT_LIST } from "@/modules/contacts/contactSchema";
import { useQuery } from "@apollo/client";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useQuery(GET_CONTACT_LIST);

  console.log({ data });
  return <h1>Hello world</h1>;
}
