import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Clock from './Clock'

function App() {
  const [color,setColor] = useState();
  const [bccolor,setbccolor] = useState();

  return (
    <>
      <h2>Please select your Clock Color</h2>
      <select onChange={(event)=>setColor(event.target.value)} defaultValue={"Select Color"}
      style={{
        height:"30px",
        width:"200px",
        color:"white",
        backgroundColor:"black",
        fontSize:"16px"
      }}
      >
        <option value="" disabled>Select Color</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="white">White</option>
        <option value="black">Black</option>
      </select>

      <h2>Please select your Background Clock Color</h2>
      <select onChange={(event)=>setbccolor(event.target.value)} defaultValue={"Select Color"}
      style={{
        height:"30px",
        width:"200px",
        color:"white",
        backgroundColor:"black",
        fontSize:"16px"
      }}
      >
        <option value="" disabled>Select Background Color</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
        <option value="yellow">Yellow</option>
        <option value="green">Green</option>
        <option value="white">White</option>
        <option value="black">Black</option>
      </select>
      <Clock  color={color} bccolor={bccolor}/>
    </>
  )
}

export default App
