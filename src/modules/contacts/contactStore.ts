import { useQuery } from "@apollo/client";
import { GET_CONTACT_LIST } from "./contactSchema";

export const useContactStore = () => {
  const a = useQuery(GET_CONTACT_LIST);
};
