import React from "react";
import { useSelector } from "react-redux/es/exports";
const CounterViewer = () => {
  const { count } = useSelector((state) => state.counter);
  return <div>Count: {count}</div>;
};

export default CounterViewer;
