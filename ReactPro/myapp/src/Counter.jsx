import { useState } from "react";

function Counter(){
    const [num,setNum] = useState(0);
    const [Rcounter,setRcounter] = useState(10);
    return(
        <div>
            <h1>Counter</h1>
            <br/>
            <h2>Counter : {num}</h2>
            <h2>Reverse Counter : {Rcounter}</h2>
            <button onClick={()=>{setNum(num+1)}}>Update Counter</button>
            <button onClick={()=>{setRcounter(Rcounter-1)}}>Reverse Counter</button>
        </div>
    )
}

export default Counter;