import { useCallback, useEffect, useState } from "react";
import { Items } from "../domains/items";
import { getData } from "../service";

const DELAY_MS = 500;

const useTodoItems = (filterText: string) => {
  const [todoItems, setTodoItems] = useState<Items>([]);

  const fetchData = useCallback((query: string) => {
    getData().then((data) => {
      const items = data.filter((item) => item.text.indexOf(query) !== -1);
      setTodoItems(items);
    });
  }, []);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      fetchData(filterText);
    }, DELAY_MS);
    return () => {
      clearTimeout(timeoutID);
    };
  }, [fetchData, filterText]);

  return {
    todoItems,
    fetchData,
  };
};

export default useTodoItems;
