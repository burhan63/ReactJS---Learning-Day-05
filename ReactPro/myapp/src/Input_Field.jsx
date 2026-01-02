import { useState } from "react";

function Input_Fields(){
    const [val,setVal] = useState("Burhan");
    return(
        <div>
            <h1>Welcome Form</h1>
            <input type="text" value={val} onChange={(event)=>setVal((event.target.value))} placeholder="Enter Username" />
            <h2>{val}</h2>
            <br/>
            <button onClick={()=>setVal("")}>Clear</button>
        </div>
    )
}

export default Input_Fields;