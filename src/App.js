import React,{useState} from "react";

const App=()=>{
    const[number, setNumber]= useState(0);
return <div>
    <div className="header">
    <p>Counter App</p>
    <h1>{number}</h1>
    </div>
    
    <button onClick={()=> setNumber(number+1)} className="button">Add</button>
    <button onClick={()=> setNumber(number-1)} className="button">Less</button>
    <button onClick={()=> setNumber(0)} className="button">Reset</button>
</div>
}
export default App;