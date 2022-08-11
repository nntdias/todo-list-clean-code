import React from "react";
import { useDispatch, useSelector } from "react-redux";

const InputSearch = (props: any) => {
  const { filterText } = useSelector((state: any) => state.settings);
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    const { value } = event.target;
    dispatch({
      type: "SET_FILTER_TEXT",
      filterText: value,
    });
  };

  return (
    <input
      placeholder="Search..."
      type="text"
      value={filterText}
      onChange={handleChange}
      {...props}
    />
  );
};

export default InputSearch;
