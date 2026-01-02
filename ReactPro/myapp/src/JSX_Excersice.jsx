function MyJSXExcersice(){
    return(
        <div>
            <h1>Burhan Ali Todos</h1>
             <img
        src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg"
        alt="Burhan Ali"
        className="myimg"
        width="200"
      />
            <ul>
                <li>Invent new traffic lights</li>
                <li>Rehearse a movie scene</li>
                <li>Improve the spectrum technology</li>
            </ul>
            <button onClick={()=>{ClickMe()}}>Click Me</button>

        </div>
    )
}

function ClickMe(){
    return(
        alert("Function Called")
    )
}

export default MyJSXExcersice;