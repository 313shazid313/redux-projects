import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  reset,
  increseby5,
  incresebyAmount,
} from "./counterSlice";

const CounterView = () => {
  const counter = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Count : {counter} </h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <br />
      <button
        onClick={() => {
          dispatch(increseby5());
        }}
      >
        Increse By 5
      </button>
      <button
        onClick={() => {
          dispatch(incresebyAmount(512));
        }}
      >
        increse By Amount
      </button>
    </>
  );
};

export default CounterView;
