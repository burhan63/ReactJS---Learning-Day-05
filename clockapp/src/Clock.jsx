import { useEffect, useState } from "react";

function Clock({color, bccolor}) {
    const [time, setTime] = useState(0);

    //useEffect for time change
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);
    return (
        <div>
            <h2>React Clock App - UseEffect Hook</h2>
            <h1
            style={{
                height:"60px",
                color:color,
                backgroundColor:bccolor,
                width:"220px",
                textAlign:"center",
                padding:"5px",
                borderRadius:"10px",
                margin:"0 auto"              
            }}
            >{time}</h1>

        </div>
    )
}

export default Clock;