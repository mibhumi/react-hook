import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

function App(props) {

  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");

  const CreateArray = (length) => [...Array(length)];

  useEffect(()=>{
    document.title = `Celebrate ${name}`;
  },[name]);


  function Star({selected=false, onSelect}) {
    return <FaStar color={selected ? "Red" : "Gray"} onClick={onSelect}/>
  }

  function StarRatiing({totalStars = 5}) {

    const [selectedStar, setSelectedStar] = useState(0);

    return (
      <>
        {CreateArray(totalStars).map((n,i)=>
            <Star 
              key={i} 
              selected= {selectedStar > i} 
              onSelect={() => setSelectedStar(i+1)}
            />
        )}
        <p> {selectedStar} of {totalStars}</p>
      </>
      )
  }

  return (
    <div>
      <h1>Learn React Hook</h1>
      <input type="checkbox" value={checked} onChange={()=>setChecked(!checked)} />
      <p>{checked ? "Checked" : "Not Checked"}</p>
      <StarRatiing totalStars={5}/>
      <p>Congratulations {name}!</p>
      <button onClick={()=>setName("Bhumi")}>Change winner</button>
    </div>
  );
}

export default App;
