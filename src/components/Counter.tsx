import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state: any) => state.settings.count);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  return (
    <>
      <div className="div-count">MAX: {count}</div>
      <button className="btn-increment" type="button" onClick={handleClick}>
        INCREMENT
      </button>
    </>
  );
};

export default Counter;
