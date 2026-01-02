const StudentData =({student})=>{
    return(
        <div>
            <h4>Student Data</h4>
            {
                        student.map((student)=>(
                            <ul>
                                <li>
                                    <h3>Student Name: {student.Sname}</h3>
                                </li>
                            </ul>
                        ))
                    }
        </div>
    )

}

export default StudentData;