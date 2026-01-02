import { act, useState } from "react";

function AllThings() {
    const [EName, setEname] = useState();
    const [Eemail, setEemail] = useState();
    const [Egender, setEgender] = useState();
    const [Ecity, setEcity] = useState();
    const [active, setactive] = useState([]);

    const HandleStatus=(event)=>{
        console.log(event.target.value, event.target.checked);

        if(event.target.checked){
            setactive([...active,event.target.value]);
        }
        else{
            setactive([active.filter((item)=>item!=event.target.value)]);

        }
    }

    const ResetAllFields = () => {
        setEname("");
        setEemail("");
        setEgender("");
        setEcity("");
        setactive("");
    }


    return (
        <div>
            <h1>All Learning Things</h1>
            <form action="">
                <label style={{ fontFamily: "sans-serif", fontSize: "15px" }} htmlFor="">Name: </label>&nbsp;&nbsp;
                <input type="text" onChange={(event) => setEname(event.target.value)} placeholder="Enter Name" style={{ height: "25px", width: "250px", borderRadius: "5px", fontFamily: "sans-serif", fontSize: "15px" }} /><br /><br />
                <label style={{ fontFamily: "sans-serif", fontSize: "15px" }} htmlFor="">Email: </label>&nbsp;&nbsp;&nbsp;
                <input type="text" onChange={(event) => setEemail(event.target.value)} placeholder="Enter Email" style={{ height: "25px", width: "250px", borderRadius: "5px", fontFamily: "sans-serif", fontSize: "15px" }} /><br /><br />
                <label htmlFor="Egender">Gender: </label>
                <input type="radio" onChange={(event) => setEgender(event.target.value)} id="male" name="Egender" value={"male"} checked={Egender == 'male'} /><label htmlFor="male">Male</label>
                <input type="radio" onChange={(event) => setEgender(event.target.value)} id="female" name="Egender" value={"female"} checked={Egender == 'female'} /><label htmlFor="female">Female</label>
                <br /><br />
                <label style={{ fontFamily: "sans-serif", fontSize: "15px" }} htmlFor="">City: </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select onChange={(event) => setEcity(event.target.value)} style={{ height: "25px", width: "260px", borderRadius: "5px", fontFamily: "sans-serif", fontSize: "15px" }}>
                    <option value="karachi">Karachi</option>
                    <option value="hyderabad">Hyderabad</option>
                    <option value="tandojam">Tandojam</option>
                    <option value="tandoAllahYar">Tando-Allah-Yar</option>
                    <option value="mirpurKhas">MirpurKhas</option>
                    <option value="kunri">Kunri</option>
                </select><br /><br />
                <label htmlFor="active">Status: </label>
                <input onChange={HandleStatus} type="checkbox" id="active"  value="active" /><label htmlFor="active">Active</label>
                <input onChange={HandleStatus} type="checkbox" id="inactive"  value="inactive" /><label htmlFor="inactive">InActive</label>
                <br /><br />
                <button onClick={ResetAllFields} style={{ border: "1px solid black" }}>Reset</button>

                <h4>Selected Name: {EName}</h4>
                <h4>Selected Email: {Eemail}</h4>
                <h4>Selected Gender: {Egender}</h4>
                <h4>Selected City: {Ecity}</h4>
                <h4>Selected Status: {active.toString()}</h4>
            </form>
        </div>
    )
}

export default AllThings;


//input fields, Radio Buttons, Forms, Buttons, Dropdowns , styles, tables