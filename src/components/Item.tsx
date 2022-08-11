import React from "react";
import { useActions } from "../hooks/useActions";
import { useTheme } from "../hooks/useTheme";

type Props = {
  item: {
    id: number;
    text: number;
  };
};

const Item = ({ item }: Props) => {
  const { setBg } = useActions();
  const { itemBackgroundColor, itemColor } = useTheme();

  return (
    <div className="list-item">
      <div
        className="list-item-container"
        style={{ backgroundColor: itemBackgroundColor, color: itemColor }}
        onClick={() => setBg()}
      >
        <div className="list-item-first">{item.id}</div>
        <div className="list-item-second">{item.text}</div>
      </div>
    </div>
  );
};

export default Item;
