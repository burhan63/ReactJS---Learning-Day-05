import { useState } from "react";

function RadioButtons() {
    const [gender, setGender] = useState('male');
    const [city, setCity] = useState('Karachi');
    return (
        <div>
            <h1>Radio Buttons</h1>
            <h2>Select Gender</h2>
            <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" id="male" value={"male"} checked={gender=='male'} /><label htmlFor="male">Male</label>
            <input type="radio" onChange={(event) => setGender(event.target.value)} name="gender" id="female" value={"female"} checked={gender=='female'} /><label htmlFor="female">Female</label>
            <br />
            <h2>Selected Gender : {gender}</h2>

            <br/>
            <br/>
            <h1>Dropdowns</h1>
            <h2>Select City</h2>
            <select onChange={(event)=>setCity(event.target.value)} defaultValue={""}><option value="" disabled>Select City</option>
                <option value="karachi">Karachi</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="mirpurkhas">Mirpurkhas</option>
                <option value="kunri">Kunri</option>
                <option value="umerkot">Umerkot</option>
                <option value="tandojam">Tandojam</option>
            </select>
            <h2>Selected City : {city}</h2>
        </div>
    )
}

export default RadioButtons;