import { ThemeContext } from "./ThemeContext";

type Props = {
  children: any;
};

const ThemeProvider = ({ children }: Props) => {
  const value = {
    itemBackgroundColor: "whitesmoke",
    itemColor: "black",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
