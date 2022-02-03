import React from "react";

interface ContextType {
  itemBackgroundColor: string;
  itemColor: string;
}

export const ThemeContext = React.createContext<ContextType>({
  itemBackgroundColor: "",
  itemColor: "",
});
