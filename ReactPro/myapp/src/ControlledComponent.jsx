import { useState } from "react";

function Controlled_Component(){
    const [username,setUsername] = useState();
    const [password,setPassword] = useState();
    const [email,setEmail] = useState();

    function ResetFields(){
        setUsername("");
        setPassword("");
        setEmail("");
    }
    return(
        <div>
            <form action="" method="get">
                <h2>Controlled Component Example</h2>
                <input type="text" value={username} onChange={(event)=>setUsername(event.target.value)} placeholder="Enter Username" style={{ height: "25px", width: "200px", borderRadius: "5px" }} />
                <h2>{username}</h2>
                <br/>
                <input type="password" value={password} onChange={(event)=>setPassword(event.target.value)} placeholder="Enter Passwoord" style={{ height: "25px", width: "200px", borderRadius: "5px" }} />
                <h2>{password}</h2>
                <br/>
                <input type="text" value={email} onChange={(event)=>setEmail(event.target.value)} placeholder="Enter Email" style={{ height: "25px", width: "200px", borderRadius: "5px" }} />
                <h2>{email}</h2>
                <br/>
                <button>Submit</button>
                &nbsp;
                <button onClick={ResetFields}>Clear</button>
            </form>
        </div>
    )
}

export default Controlled_Component;