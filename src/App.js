import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useState , useRef} from 'react';
import { useInput } from './useInput';

function App(props) {

  // const color = useRef();
  // const sound = useRef();

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#909090");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} and ${colorProps.value}`);
    // const soundVal = sound.current.value;
    // const colorVal = color.current.value;
    // alert(`${soundVal} and ${colorVal}`);
    // color.current.value = "";
    // sound.current.value = "";
  }

  return (
    <div>
      <h3>Welcome to useRef!</h3>
      {/* <form>
        <input ref={sound} type="text" placeholder='Sound' /><br/>
        <input ref={color} type="color"/><br/>
        <button onClick={submit}>Add</button>
      </form> */}
       <form>
        <input 
          {...titleProps}
          type="text"
          placeholder="Enter title"
        />
        <input 
          type="color"
          {...colorProps}
          placeholder="Choose Color"
        />
        <button onClick={submit}>Add</button>
      </form>
    </div>
  );
}

export default App;
