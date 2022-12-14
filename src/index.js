import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {useContext} from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const TreeContext = createContext();

const trees = [
  {id: "1", type: "maple"},
  {id: "2", type: "apple"},
  {id: "3", type: "oak"},
  {id: "4", type: "peach"},
  {id: "5", type: "banana"}
];

root.render(
  <TreeContext.Provider value={{trees}} >
    <App/>
  </TreeContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
