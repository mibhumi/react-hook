import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useState , useRef} from 'react';

function App(props) {

  const color = useRef();
  const sound = useRef();

  const submit = (e) => {
    e.preventDefault();
    const soundVal = sound.current.value;
    const colorVal = color.current.value;
    alert(`${soundVal} and ${colorVal}`);
    color.current.value = "";
    sound.current.value = "";
  }

  return (
    <div>
      <h3>Welcome to useRef!</h3>
      <form>
        <input ref={sound} type="text" placeholder='Sound' /><br/>
        <input ref={color} type="color"/><br/>
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default App;
