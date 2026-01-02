import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User1 from './User'
import User from './User'
import Header,{HeaderMenu} from './Header'
import Example from './JSX_Exm'
import MyJSXExcersice from './JSX_Excersice'
import JSX_CurlyBraces from './JSX_With_Curly_Braces'
import Objects_Prcatice from './objects'
import Testing_Function from './functions'
import Change_State from './State'
import Calculator from './State_Calculator'
import Counter from './Counter'
import Toggle_functionality from './Toggle'
import User_Objects from './UserObj'
import Multiple_Condition from './Multiple_Conditions'
import Props_Learning from './Props'
import Student from './Student'
import Default_Props from './Default_Props'
import Pass_JSX from './Pass_JSX_With_Props'
import Input_Fields from './Input_Field'
import Task_Input from './Task_Input_Fields'
import Controlled_Component from './ControlledComponent'
import CheckBox_Skills from './CheckBoxs'
import Practice_Checkbox from './myOwnCheckboxPr'
import RadioButtons from './Radio_Buttons'
import Array_Practice from './Array'
import Reuse_Component from './ReuseComponent'
import AllThings from './allthingsinone'

function App() {
  // const [counter, Setcounter] = useState(0)
  // let Uname = "Burhan Ali";
  // let Uage = 25;
  // let Uemail = "Burhan@gmail.com";
  // let Usec = "E";

  // const User_OBJ1={
  //   name:"Burhan Ali",
  //   age:"25",
  //   email: "Burhan@gmail.com",
  //   sec:"E"
  // }

  // const User_OBJ2={
  //   name:"Ahsan Hameed",
  //   age:"56",
  //   email: "Ahsan@gmail.com",
  //   sec:"E"
  // }

  // let Collegename = ['NED','SSUET','UIT','KU','ZU','NUST','MAJU'];

  // const [student,setStudent] = useState();

  // let Sname = "Burhan Ali";

  // const userdataarray = [

  //       {
  //           name: "Burhan Ali",
  //           age: "25",
  //           contact: "03112329374",
  //           gender: "Male",
  //           nationality: "Pakistani",
  //           city: "Karachi"
  //       },
  //       {
  //           name: "Shahzad Sher Ali",
  //           age: "35",
  //           contact: "03112329654",
  //           gender: "Male",
  //           nationality: "Pakistani",
  //           city: "Karachi"
  //       },
  //       {
  //           name: "Talha Shahid",
  //           age: "28",
  //           contact: "03152325462",
  //           gender: "Male",
  //           nationality: "Hindustani",
  //           city: "Mumbai"
  //       },
  //       {
  //           name: "Asim Khan",
  //           age: "25",
  //           contact: "03112555654",
  //           gender: "Male",
  //           nationality: "Pakistani",
  //           city: "Karachi"
  //       }
  //   ];


  return (
    <>
    {/* <Header />
    <HeaderMenu/>
    <Example/>
    <h1>Counter : {counter}</h1>
    <User />
    <button onClick={()=>Setcounter(counter + 1)}>Increase Count</button>
    
    <button onClick={()=> Setcounter(counter -1)}>Decrease Counter</button> */}
    {/* <MyJSXExcersice/> */}
    {/* <JSX_CurlyBraces/> */}
    {/* <Objects_Prcatice/> */}
    {/* <Testing_Function/> */}
    {/* <Change_State/> */}
    {/* <Calculator/> */}
    {/* <Counter/> */}
    {/* <Toggle_functionality/> */}
    {/* <User_Objects/> */}
    {/* <Multiple_Condition/> */}
    {/* <Props_Learning name={Uname} age={Uage} email={Uemail} sec={Usec}/> */}
     {/* <h1>Props</h1>  */}
    {/* <Props_Learning user={User_OBJ1}/>
    <Props_Learning user={User_OBJ2}/> */}
    {/* <Props_Learning cname ={Collegename}/> */}
    {/* {
      student && <Student name={student}/>
    }
    
    <button onClick={()=>setStudent("Shahzad")}>Update Student Name</button> */}
    {/* <Default_Props name={Sname}/>
    <Default_Props/> */}

    {/* <Pass_JSX color="orange">
      <h1>Hello</h1>
    </Pass_JSX>

    <Pass_JSX>
      <h1>Hello</h1>
      <h2>Burhan Ali</h2>
    </Pass_JSX> */}

    {/* <Input_Fields/> */}
    {/* <Task_Input/> */}
    {/* <Controlled_Component/> */}
    {/* <CheckBox_Skills/> */}
    {/* <Practice_Checkbox/> */}
    {/* <RadioButtons/> */}
    {/* <Array_Practice/> */}
    {/* <div>
            {
                userdataarray.map((user)=>(
                    <Reuse_Component data={user}/>
                ))
            }
        </div> */}
        <AllThings/>

    </>
  )
}

export default App

                                                                                                                                                                                                                                                                                                                                                                                                                                                