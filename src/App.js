import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

function App(props) {

  const [checked, setChecked] = useState(false);
  const [name, setName] = useState("");
  const [admin, setAdmin] = useState();
  const [data, setData] = useState([]);

  const CreateArray = (length) => [...Array(length)];

  useEffect(()=>{
    document.title = `Celebrate ${name}`;
    console.log(`name is: ${name}`)
  },[name]);

  useEffect(()=>{
    console.log(`admin is: ${admin}`);
  },[admin]);

  // cause data flikering
  useEffect(()=>{
    fetch(`https://api.github.com/users`)
    .then(response=>response.json())
    .then(setData);
  },[data]);

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
      <button onClick={()=>setAdmin(true)}>Change Admin</button>
      {
        data && data.map(user=>(
          <li key={user.id}>{user.login}</li>
        ))
      }
      {
        data && <button onClick={()=>setData([])}>Remove Data</button>
      }
    </div>
  );
}

export default App;
