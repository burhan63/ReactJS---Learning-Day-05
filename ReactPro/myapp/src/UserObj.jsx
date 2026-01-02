import { useState } from "react";

function User_Objects() {
    const user_obj1 = {
        name: "Burhan Ali",
        department: "Computer Science",
        rollno: "2018-BSCS-251",
        sec: "E",
        userKey: "BurhanNzxMWIFM7%x##X61#@QDwE^B"
    }

    const user_obj2 = {
        name: "Talha Shahid",
        department: "Computer Science",
        rollno: "2018-BSCS-250",
        sec: "E",
        userKey: "TalhaNzxMWIFM7%x##X61#@QDwE^B"
    }

    const [visibleUsers, setvisibleUsers] = useState("")
    return (
        <div>
            <h1>Sir Syed University Of Engineering & Technology Karachi</h1>
            <h2>Department of Computer Science</h2>
            <h3>Sec : E</h3>
            <br />
            <table
                border={1}
                style={{
                    margin: "auto",
                    textAlign: "center",
                    borderCollapse: "collapse",
                    width: "100%"
                }}
            >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Roll No</th>
                        <th>Section</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        visibleUsers === "Burhan" && (

                            <tr>
                                <td>{user_obj1.name}</td>
                                <td>{user_obj1.department}</td>
                                <td>{user_obj1.rollno}</td>
                                <td>{user_obj1.sec}</td>
                            </tr>
                        )}

                    {
                        visibleUsers === "Talha" && (

                            <tr>
                                <td>{user_obj2.name}</td>
                                <td>{user_obj2.department}</td>
                                <td>{user_obj2.rollno}</td>
                                <td>{user_obj2.sec}</td>
                            </tr>
                        )}
                </tbody>
            </table>
            <br />
            <button onClick={() => setvisibleUsers("Burhan")}>Display Burhan Data</button>
            &nbsp;
            <button onClick={() => setvisibleUsers("Talha")}>Display Talha Data</button>

        </div>
    )
}

export default User_Objects;