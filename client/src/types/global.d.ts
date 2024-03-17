interface Movie {
  [key: string]: string | number | boolean;
  id: string;
  name: string;
  year: number;
  country: string;
  imdb: string;
  category: string;
  isTvSeries: boolean;
  summary: string;
}

interface LayoutContextType {
  layout: any;
  setLayout: (layout: any) => void;
}

interface FiltersContextType {
  filtering: string;
  sorting: string;
  searchTerm: string;
  handleFiltering?: (newSelection: string) => void;
  handleSorting?: (newSelection: string) => void;
  handleSearch?: (newSelection: string) => void;
}

interface FavoritesContextType {
  favorites: Movie[];
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movieId: string) => void;
  isFavorite: (movieId: string) => boolean;
}
