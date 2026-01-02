import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CollegeDetails from './College'

function App() {

  const CollegeData = [
    {
      name: "SSUET",
      contact: "021-111-111-425",
      website: "www.ssuet.edu.pk",
      student: [
        {
          Sname: "Burhan Ali",
          Sage: "25",
          Sdepartment: "Computer Science",
          SGender: "Male"
        },
        {
          Sname: "Ahsan Hameed",
          Sage: "30",
          Sdepartment: "Computer Science",
          SGender: "Male"
        },
        {
          Sname: "Shahzad Sher Ali",
          Sage: "32",
          Sdepartment: "Computer Science",
          SGender: "Male"
        }
      ]
    },
    {
      name: "NED",
      contact: "021-111-111-325",
      website: "www.ned.edu.pk",
      student: [
        {
          Sname: "Ahmed Hassan",
          Sage: "33",
          Sdepartment: "Software Engineering",
          SGender: "Male"
        },
        {
          Sname: "Syed Shamrooz",
          Sage: "29",
          Sdepartment: "Computer Engineering",
          SGender: "Male"
        },
        {
          Sname: "Rida Tariq",
          Sage: "22",
          Sdepartment: "Computer Science",
          SGender: "Female"
        }
      ]
    },
    {
      name: "KU",
      contact: "021-111-111-222",
      website: "www.ku.edu.pk",
      student: [
        {
          Sname: "Fahad Iqbal",
          Sage: "32",
          Sdepartment: "Software Engineering",
          SGender: "Male"
        },
        {
          Sname: "Talha Shahid",
          Sage: "29",
          Sdepartment: "Computer Engineering",
          SGender: "Male"
        },
        {
          Sname: "Kanwal Ali",
          Sage: "25",
          Sdepartment: "Computer Science",
          SGender: "Female"
        }
      ]
    },
    {
      name: "DUET",
      contact: "021-111-111-666",
      website: "www.duet.edu.pk",
      student: [
        {
          Sname: "Saleem",
          Sage: "40",
          Sdepartment: "Software Engineering",
          SGender: "Male"
        },
        {
          Sname: "Adnan Anwar",
          Sage: "32",
          Sdepartment: "Computer Science",
          SGender: "Male"
        },
        {
          Sname: "Behrooz Khan",
          Sage: "25",
          Sdepartment: "Computer Science",
          SGender: "Male"
        }
      ]
    }
  ];

  return (
    <>
      <h1>Nested Looping</h1>
      <div>
        {
          CollegeData.map((college) => (
            <CollegeDetails college={college} />
          ))
        }
      </div>
    </>
  )
}

export default App
