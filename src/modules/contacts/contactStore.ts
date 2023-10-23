import { useQuery } from "@apollo/client";
import { GET_CONTACT_LIST } from "./contactSchema";
import { GetContactListQuery } from "@/__generated__/graphql";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { useShallow } from "zustand/react/shallow";
import { useRouter } from "next/router";

type ContactState = {
  favorites: GetContactListQuery["contact"];
  friends: GetContactListQuery["contact"];
};

type ContactAction = {
  addFavorite: (data: GetContactListQuery["contact"][0]) => void;
  getFavouritesId: () => Array<number>;
};

const useContactState = create<ContactState & ContactAction>()(
  persist(
    // immer takes away the immutable "boilerplate"
    // and makes state management looks like mutable
    // while still keeping the state immutable
    immer((set, get) => ({
      favorites: [],
      friends: [],
      addFavorite: (data) => {
        set((state) => {
          state.favorites.push(data);
        });
      },
      getFavouritesId: () => {
        const { favorites, friends } = get();

        return [...favorites, ...friends].map((f) => f.id);
      },
    })),
    { name: "contactStore" }
  )
);

export const useContactStore = () => {
  const router = useRouter();
  const [favorites, addFavorite, getFavouritesId] = useContactState(
    useShallow((state) => [
      state.favorites,
      state.addFavorite,
      state.getFavouritesId,
    ])
  );

  const response = useQuery(GET_CONTACT_LIST, {
    variables: {
      limit: 10,
      offset: +(router.query.page || 0),
      where: {
        id: { _nin: getFavouritesId() },
      },
    },
  });

  return {
    response,
    state: { favorites },
    action: { addFavorite },
  };
};
