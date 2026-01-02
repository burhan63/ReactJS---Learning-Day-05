import { useState } from "react";

function Toggle_functionality(){
    const [display,setDisplay] = useState(true) //true means hide and show per work hai
    return(
        <div>    
            {/* Toggle Functionality Implementation */}
            {
                display?<h1>Burhan Ali</h1>:null
            }
             <br/>

            <button onClick={()=>setDisplay(!display)}>Toggle</button>
        </div>
    )
}

export default Toggle_functionality;