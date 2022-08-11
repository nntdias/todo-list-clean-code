import React from "react";
import Item from "./Item";

type Props = { todoItems: Array<any> };

const List = ({ todoItems }: Props) => {
  return (
    <div className="list">
      {todoItems.map((item: any) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
