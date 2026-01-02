import { useState } from "react";

function Task_Input() {
    const [username,setusername] = useState();
    const [fathername,setfathername] = useState();
    const [contact,setcontact] = useState();
    const [age,setAge] = useState();

    function resetfields(){
       setusername("");
       setfathername("");
       setcontact("");
       setAge("");

    }
    return (
        <div>
            <h3>Task by Code Step By Step</h3>
            <label>Username: </label>
            <input type="text" value={username} onChange={(event)=>setusername((event.target.value))} placeholder="Enter Username" style={{ height: "25px", width: "200px", borderRadius: "5px" }} />
            <h2>{username}</h2>
             &nbsp;&nbsp;
            <label>Father Name: </label>
            <input type="text" value={fathername} onChange={(event)=>setfathername((event.target.value))} placeholder="Enter Father Name" style={{ height: "25px", width: "200px", borderRadius: "5px" }} />
            <h2>{fathername}</h2>
            &nbsp;&nbsp;
            <label>Contact: </label>
            <input type="text" value={contact} onChange={(event)=>setcontact((event.target.value))} placeholder="Enter Contact" style={{ height: "25px", width: "200px", borderRadius: "5px" }} />
            <h2>{contact}</h2>
            <br/>
            <label>Age: </label>
            <input type="text" value={age} onChange={(event)=>setAge(event.target.value)} placeholder="Enter Age" style={{height: "25px", width: "200px", borderRadius: "5px"}} />
            <h2>{age}</h2>
            <br/>
            <button onClick={resetfields}>Reset</button>
        </div>
    )
}

export default Task_Input;