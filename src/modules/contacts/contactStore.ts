import { useQuery } from "@apollo/client";
import { GET_CONTACT_LIST } from "./contactSchema";
import { GetContactListQuery } from "@/__generated__/graphql";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { useShallow } from "zustand/react/shallow";

type ContactState = {
  favorites: GetContactListQuery["contact"];
  offset: number;
};

type ContactAction = {
  addFavorite: (data: GetContactListQuery["contact"][0]) => void;
  nextPage: () => void;
  prevPage: () => void;
};

const useContactState = create<ContactState & ContactAction>()(
  persist(
    // immer takes away the immutable "boilerplate"
    // and makes state management looks like mutable
    // while still keeping the state immutable
    immer((set) => ({
      favorites: [],
      addFavorite: (data) => {
        set((state) => {
          state.favorites.push(data);
        });
      },
      nextPage: () => {
        set((state) => (state.offset += 1));
      },
      prevPage: () => {
        set((state) => (state.offset -= 1));
      },
      offset: 0,
    })),
    { name: "contactStore" }
  )
);

export const useContactStore = () => {
  const [favorites, addFavorite, offset] = useContactState(
    useShallow((state) => [state.favorites, state.addFavorite, state.offset])
  );

  const response = useQuery(GET_CONTACT_LIST, {
    variables: {
      limit: 10,
      offset,
    },
  });

  return {
    response,
    state: { favorites },
    action: { addFavorite },
  };
};
