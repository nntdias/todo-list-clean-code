import { useCallback, useContext } from "react";
import { ThemeContextAction } from "../contex/ThemeContext";

export const useActions = () => {
  const dispatch = useContext(ThemeContextAction);

  const setColor = useCallback(() => {
    dispatch({
      type: "CHANGE_COLOR",
    });
  }, [dispatch]);

  const setBg = useCallback(() => {
    dispatch({
      type: "CHANGE_BG",
    });
  }, [dispatch]);

  return {
    setBg,
    setColor,
  };
};
