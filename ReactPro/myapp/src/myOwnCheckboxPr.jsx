import { useState } from "react";

function Practice_Checkbox(){
    const [gender,setGender] = useState([]);

    const handleGender=(event)=>{
        console.log(event.target.value)

        if(event.target.checked){
            setGender([...gender,event.target.value]);
        }
        else{
            setGender([gender.filter((item)=>item!= event.target.value)])
        }
    } 
    return(
        <div>
            <h1>My Own Practice</h1>
            <input onChange={handleGender} type="checkbox" id="male" value="male" /><label htmlFor="male">Male</label><br/>
            <input onChange={handleGender} type="checkbox" id="female" value="female" /><label htmlFor="female">Female</label>
            <br/>
            <h2>{gender.toString()}</h2>
        </div>
    )
}
export default Practice_Checkbox;