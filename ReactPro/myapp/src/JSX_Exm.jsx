function Example(){
    const MyName = "Burhan Ali";
    let x = 5;
    return(
        <div>
            <h1>Its my Example Component</h1>
            <h4>JSX Example</h4>
            <h3>My Name is : {MyName}</h3>
            <h3>{x*75}</h3>
            <button onClick={()=>alert(sum())}>Result</button>
        </div>
    )

    
}

function sum(){
    let x = 5;
    return x*75;
}

export default Example;