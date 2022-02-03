import React, { useContext } from "react";
import { ThemeContext } from "../contex/ThemeContext";

type Props = {
  item: {
    id: number;
    text: number;
  };
};

const useTheme = () => useContext(ThemeContext);

const Item = ({ item }: Props) => {
  const { itemBackgroundColor, itemColor } = useTheme();

  return (
    <div className="list-item">
      <div
        className="list-item-container"
        style={{ backgroundColor: itemBackgroundColor, color: itemColor }}
      >
        <div className="list-item-first">{item.id}</div>
        <div className="list-item-second">{item.text}</div>
      </div>
    </div>
  );
};

export default Item;
