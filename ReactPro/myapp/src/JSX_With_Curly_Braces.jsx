function JSX_CurlyBraces(){
    const myname = "Burhan Ali";
    let age = 18;
    function sum(a,b){
            return a + b
        }
    function NIC_Check(){
        if(age>=18){
            return alert("NIC issued");
        }
        else{
            return alert("Not Eligible");
        }
    }

    return(
        
        <div>
            <h1>{myname}</h1>
            <h2>{name?name:"User Not Found"}</h2>
            <h2>The Sum is : {sum(10,5)}</h2>
            <button onClick={()=>{NIC_Check()}}>NADRA Verification</button>
            <br/>
            <button onClick={()=>alert(age>=18?"Nic Issued":"Contact to Administrator")}>Check Ternaory Operator</button>

        </div>
    )

}

export default JSX_CurlyBraces;


function TernaryOperator(){
    let age = 20;
    return(
        <div>
            <h5>{age>=18?"Nic Issued":"Not Eligible"}</h5>
        </div>
    )
}
