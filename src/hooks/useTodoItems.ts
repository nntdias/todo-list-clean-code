import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Items } from "../domains/items";

const DELAY_MS = 500;

const useTodoItems = (filterText: string) => {
  const [todoItems, setTodoItems] = useState<Items>([]);

  const fetchData = useCallback((query: string) => {
    axios.get(process.env.PUBLIC_URL + "data.json").then(({ data }) => {
      const items = (data as Items).filter(
        (item) => item.text.indexOf(query) !== -1
      );
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
