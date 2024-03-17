import { createContext, useContext } from "react";

export const FavoritesContext = createContext<FavoritesContextType>({
  favorites: [],
  addFavorite: () => {}, // Boş fonksiyon
  removeFavorite: () => {}, // Boş fonksiyon
  isFavorite: () => false, // Varsayılan değer olarak false dön
});

export const useFavorites = () => useContext(FavoritesContext);
