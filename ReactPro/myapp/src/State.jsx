import { useState } from "react";

function Change_State(){
    // let mname = "Burhan";
    const [name,setName]=useState("Burhan");

    function changename(){
        setName("Shahzad");
    }

    
    return(
        <div>
            <h1>State in React</h1>
            <h1>{name}</h1>
            <button onClick={changename}>Change State</button>
        </div>
    )
}


export default Change_State;