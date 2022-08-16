import React from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import {
  increment,
  decrement,
  reset,
  incrementByValue,
} from "../counter/counterSlice";
const CounterViewer = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);
  return (
    <div className="container mx-auto">
      <h1 className="text-center text-2xl text-rose-500 font-semibold ">
        Count: {count}
      </h1>

      <div className="flex items-center justify-center gap-6 mt-10 text-white">
        <button
          onClick={() => dispatch(increment())}
          className="px-6 py-2 bg-rose-500 rounded text-base font-medium hover:bg-rose-600"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-6 py-2 bg-rose-500 rounded text-base font-medium hover:bg-rose-600"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(reset())}
          className="px-6 py-2 bg-rose-500 rounded text-base font-medium hover:bg-rose-600"
        >
          Reset
        </button>
        <button
          onClick={() => dispatch(incrementByValue(5))}
          className="px-6 py-2 bg-rose-500 rounded text-base font-medium hover:bg-rose-600"
        >
          Increment By value
        </button>
      </div>
    </div>
  );
};

export default CounterViewer;
