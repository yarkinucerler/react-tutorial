import React, { ReactNode, useState } from "react";
import { LayoutContext } from "../contexts/layout.context";

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [layout, setLayout] = useState<React.ReactNode>(null);

  const renderLayout = () => {
    if (!layout) return children;
    return React.cloneElement(layout as React.ReactElement, {}, children);
  };

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {renderLayout()}
    </LayoutContext.Provider>
  );
};
