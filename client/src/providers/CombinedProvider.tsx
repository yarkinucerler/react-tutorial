import React from "react";

import { FiltersProvider } from "./FiltersProvider";
import { FavoritesProvider } from "./FavoritesProvider";
import { LayoutProvider } from "./LayoutProvider";

const CombinedProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <FavoritesProvider>
      <FiltersProvider>
        <LayoutProvider>{children}</LayoutProvider>
      </FiltersProvider>
    </FavoritesProvider>
  );
};

export default CombinedProvider;
