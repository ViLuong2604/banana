
import { useEffect, useRef, useState } from "react";
import Banana from "./components/Banana";
import "./index.css"

function App() {
  const fruits = useRef([
    {name :"banana",val :1},
    {name :"apple",val :1},
  ]);
  // const[fruits,setFruits] = useState([]);
  const[change,setChange]= useState(false);
  const[name,setName] = useState('');
  const addhandle = ()=>{
    var check = false;
    var index ;
   for (let i = 0; i <fruits.current.length; i++) {
      if(fruits.current[i].name===name) {
        check = true  ;
        index = i;
        break;
      }
   }
   check ? fruits.current[index].val = fruits.current[index].val +1
    :fruits.current.push({name ,val :1});
    setName('');
    setChange(!change);
  }
  return (
   <>
    {
      fruits.current.map(f => <Banana change={change} setChange={setChange} fruits={fruits}  fruit={f} />)
    }
        
     <div className="add">
            <input value={name} onChange={e=> setName(e.target.value)} type="text" />
            <button onClick={addhandle} > add</button>
        </div>
   </>
  );
}

export default App;
