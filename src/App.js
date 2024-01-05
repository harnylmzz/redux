import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect, useState } from "react";
import {
  decrement,
  increment,
  reset,
} from "./redux/features/counter/counterSlice";
import { getCountry } from "./redux/features/country/countrySlice";

function App() {
  const dispatch = useDispatch();

  const { counter } = useSelector((state) => state.counter);
  const { country } = useSelector((state) => state.country);

  console.log(country);

  useEffect(() => {
    dispatch(getCountry());
  }, []);


  console.log(counter);

  return (
    <div className="App">

      <h1>Counter App</h1>

      <button onClick={() => dispatch(decrement())}>-</button> <br />
      <span>{counter}</span>
      <br />
      <button onClick={() => dispatch(increment())}>+</button>
      <br />  <br />
      <button onClick={() => dispatch(reset())}>Reset</button>
      <br />
    </div>
  );
}

export default App;
