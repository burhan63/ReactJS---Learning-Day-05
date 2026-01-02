import { useState } from "react";

function CheckBox_Skills() {
    const [skills,setSkills] = useState([]);

    const HandleSkills=(event)=>{
        console.log(event.target.value, event.target.checked);

        if(event.target.checked){
            setSkills([...skills,event.target.value]); //... means spread operator
        }
        else{
            setSkills([skills.filter((item)=>item!=event.target.value)]);
        }
    }
    return (
        <div>
            <h1>Check Boxes - Handling</h1>
            <h2>Please mark your Skills</h2>

            {/* //creating Check boxes */}
            <input onChange={HandleSkills} type="checkbox"  id="php" value="php" /><label htmlFor="php">PHP</label><br />
            <input onChange={HandleSkills} type="checkbox"  id="Java" value="Java" /><label htmlFor="Java">JAVA</label><br />
            <input onChange={HandleSkills} type="checkbox"  id="TypeScr" value="TypeScr" /><label htmlFor="TypeScr">Type Script</label><br />
            <input onChange={HandleSkills} type="checkbox"  id="NextJS" value="NextJS" /><label htmlFor="NextJS">Next JS</label><br />
            <input onChange={HandleSkills} type="checkbox"  id="ReactJS" value="ReactJS" /><label htmlFor="ReactJS">React JS</label><br />
            <br/>
            <h2>{skills.toString()}</h2>
        </div>
    )
}
export default CheckBox_Skills;