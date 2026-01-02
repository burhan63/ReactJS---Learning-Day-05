function Objects_Prcatice(){
    let imgpath = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhSToxFl61x-43QJHXAoqMK4A-KOaDj-yJuw&s";
    const Userobj ={
        name:"Burhan Ali",
        email:"Burhan.Ali11556688@gmail.com",
        mykey: "NzxMWIFM7%x##X61#@QDwE^B",
        age:20
    }
    return(
        <div>
            <ul>
                <li>{Userobj.name}</li>
                <li>{Userobj.email}</li>
                <li>{Userobj.mykey}</li>
                <li>{Userobj.age}</li>
            </ul>
            <img src={imgpath}/>
        </div>
    )
}

export default Objects_Prcatice;