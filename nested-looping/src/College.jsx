import StudentData from "./Student";

const CollegeDetails = ({ college }) => {
    return (
        <div style={{
            borderBottom: "2px solid black",
            borderRadius: "5px",
            backgroundColor: "lightgrey",
            width: "400px",
            padding: "5px",
            margin: "10px"
        }}>
            <ul>
                <li>
                    <h3>College Name: {college.name}</h3> </li>
                <li>
                    <h3>College UAN: {college.contact}</h3>
                </li>
                <li>
                    <h3>College Website: {college.website}</h3>
                </li>
                <li>
                    <StudentData student={college.student}/>
                </li>
            </ul>
        </div>
    )
}

export default CollegeDetails;