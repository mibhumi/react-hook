import logo from './logo.svg';
import './App.css';
import { useEffect, useReducer, useState , useRef, useContext} from 'react';
import { useInput } from './useInput';
import {TreeContext, useTree} from './index';
import {useFetch} from './useFetch';

function App(props) {

  // const {trees} = useContext(TreeContext);

  const {trees} = useTree();

  // const color = useRef();
  // const sound = useRef();

  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#909090");
  const {loading, data, error} = useFetch("https://api.github.com/users");

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

      <div>
        <h3>List of Trees</h3>
        <ul>
          {
            trees.map((tree)=>(
              <li key={tree.id}>{tree.type}</li>
            ))
          }
        </ul>
      </div>
      <div>
        <h3>Data using useFetch</h3>
        { loading ? <p>Your data is loading...</p> : null }
        { error ? <p>Sorry we got an error... {JSON.stringify(error, null, 2)}</p> : null }
        { data ?
            Object.keys(data).map( (user) => {
              const userData = data[user];
              return (
                <div>
                  <h3>Name: {userData.login}</h3>
                  <img src={userData.avatar_url}/>
                </div>
              )
            })
        : null }
      </div>
    </div>
  );
}

export default App;
