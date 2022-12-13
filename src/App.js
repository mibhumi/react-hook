import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App(props) {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h1>Learn React Hook</h1>
      <input type="checkbox" value={checked} onChange={()=>setChecked(!checked)} />
      <p>{checked ? "Checked" : "Not Checked"}</p>
    </div>
  );
}

export default App;
