import React, { createContext, useContext, ReactNode, useState } from "react";

export const LayoutContext = createContext<LayoutContextType | undefined>(
  undefined
);

export const useLayout = () => useContext(LayoutContext);
