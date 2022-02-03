import React, { useMemo } from "react";
import Item from "./Item";

const sort = (list: Array<any>): Array<any> => {
  return [...list].sort((a, b) => a.text.trim().localeCompare(b.text.trim()));
};

type Props = { todoItems: Array<any> };

const List = ({ todoItems }: Props) => {
  const orderedList = useMemo(() => sort(todoItems), [todoItems]);

  return (
    <div className="list">
      {orderedList.map((item: any) => (
        <Item item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
