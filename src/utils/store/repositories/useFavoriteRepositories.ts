import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STORE_KEYS } from "../store-keys";

type FavoriteRepositoryStore = {
  favorites: number[];
  addToFavorites: (id: number) => void;
  removeFromFavorites: (id: number) => void;
};

const useFavoriteRepoStore = create(
  persist<FavoriteRepositoryStore>(
    (set) => ({
      favorites: [],

      addToFavorites: (id: number) => {
        set((state) => ({
          favorites: [...state.favorites, id],
        }));
      },

      removeFromFavorites: (id: number) => {
        set((state) => ({
          favorites: state.favorites.filter((favorite) => favorite != id),
        }));
      },
    }),
    { name: STORE_KEYS.REPOSITORIES }
  )
);

export { useFavoriteRepoStore };
