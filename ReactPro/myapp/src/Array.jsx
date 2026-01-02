function Array_Practice() {
    const UserData = [
        {
            name: "Burhan Ali",
            age: "25",
            contact: "03112329374",
            gender: "Male",
            nationality: "Pakistani",
            city: "Karachi"
        },
        {
            name: "Shahzad Sher Ali",
            age: "35",
            contact: "03112329654",
            gender: "Male",
            nationality: "Pakistani",
            city: "Karachi"
        },
        {
            name: "Talha Shahid",
            age: "28",
            contact: "03152325462",
            gender: "Male",
            nationality: "Hindustani",
            city: "Mumbai"
        },
        {
            name: "Asim Khan",
            age: "25",
            contact: "03112555654",
            gender: "Male",
            nationality: "Pakistani",
            city: "Karachi"
        }
    ];
    return (
        <div>
            <h1>Array Practice</h1>
            <h2>User Data</h2>
            <table border={1}
                style={{
                    margin: "auto",
                    textAlign: "center",
                    borderCollapse: "collapse",
                    width: "100%",
                    justifyContent:"center"
                }}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Contact</td>
                        <td>Gender</td>
                        <td>Nationality</td>
                        <td>City</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        UserData.map((user) => (
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>{user.contact}</td>
                                <td>{user.gender}</td>
                                <td>{user.nationality}</td>
                                <td>{user.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Array_Practice;