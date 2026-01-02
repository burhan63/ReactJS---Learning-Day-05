function Testing_Function(){
    //simple definition
    function printapple(){
        return alert("This is Apple");
    }

    //arrow function
    const printbanana=()=>{
        return alert("This is Banana");
    }
    return(
        <div>
            <button onClick={printapple}>Apple Function</button>
            <button onClick={()=>printbanana()}>Banana Function</button>

        </div>
    )
}

export default Testing_Function;