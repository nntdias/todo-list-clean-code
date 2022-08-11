import { useReducer } from "react";
import { ThemeContext, ThemeContextAction } from "./ThemeContext";

type Props = {
  children: any;
};

const initialState = {
  filterBy: [],
  checkedFilter: {},
};

const changeColor = (state: any, action: any) => {
  return {
    ...state,
    itemBackgroundColor:
      state.itemBackgroundColor === "red" ? "whitesmoke" : "red",
  };
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "CHANGE_BG": {
      return changeColor(state, action);
    }
    case "CHANGE_COLOR": {
      return {
        ...state,
        itemColor: "green",
      };
    }
    default: {
      return state;
    }
  }
};

const ThemeProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContextAction.Provider value={dispatch}>
      <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    </ThemeContextAction.Provider>
  );
};

export default ThemeProvider;
