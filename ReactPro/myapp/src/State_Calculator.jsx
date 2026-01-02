import { useState } from "react";

function Calculator(){
    let Main_Heading = "Calculator";
    const [numbers,setNumbers]=useState(0);
    const number_handler=(num)=>{
        setNumbers(num);
    }
    return(
        <div>
            <h2>{Main_Heading}</h2>
            <h3>{numbers}</h3>
            <button onClick={()=>number_handler("0")}>1</button>
            <button onClick={()=>number_handler("2")}>2</button>
            <button onClick={()=>number_handler("3")}>3</button>
            <button onClick={()=>number_handler("4")}>4</button>
            <button onClick={()=>number_handler("5")}>5</button>
            <button onClick={()=>number_handler("6")}>6</button>
            <button onClick={()=>number_handler("7")}>7</button>
            <button onClick={()=>number_handler("8")}>8</button>
            <button onClick={()=>number_handler("9")}>9</button>
            <button onClick={()=>number_handler("0")}>0</button>
        </div>
    )
}

export default Calculator;