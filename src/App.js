import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useState } from 'react';

function App(props) {

  const [number, setNumber] = useReducer((number, newNumber)=> number + newNumber, 0);
  const [checked, toggle] = useReducer(
    checked => !checked, false
  );

  const initState = {
    name: "Bhumi Patel",
    counter: 0
  }

  const reducer = (state, action) => {
    // eslint-disable-next-line default-case
    switch(action.type) {
      case "inc":
        return { ...state,
          counter: state.counter + 1 
        };
      case "dec":
        return { ...state,
          counter: state.counter - 1
        };
    }
  }

  const [state, dispatch] = useReducer( reducer , initState);

  return (
    <div>
      <h1>Learn React Hook</h1>
      <p onClick={()=>setNumber(1)}>{number}</p>
      <input
        type="checkbox"
        value={checked}
        onChange={toggle}
      />
      {checked ? "I am checked" : "I am not checked"}
      <h3>Counter craeted by {state.name}</h3>
      <p>{state.counter}</p>
      <button onClick={()=>dispatch({type: "inc"})}>Increment</button>
      <button onClick={()=>dispatch({type: "dec"})}>Decrement</button>
    </div>
  );
}

export default App;
