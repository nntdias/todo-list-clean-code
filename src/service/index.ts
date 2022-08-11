import axios from "axios";
import { Items } from "../domains/items";

export const getData = async (): Promise<Items> => {
  const { data } = await axios.get(process.env.PUBLIC_URL + "data.json");
  return data as Items;
};
