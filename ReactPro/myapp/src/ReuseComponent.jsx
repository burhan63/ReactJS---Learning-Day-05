function Reuse_Component({data}){
    return(
        <div style={{border:"1px solid green",borderRadius:"10px", width:"400px", padding:"10px", margin:"10px"}}>     
            <h4><span style={{color:"green"}}>Name: {data.name}</span></h4>
            <h4>Age: {data.age}</h4>
            <h4>Contact: {data.contact}</h4>
            <h4>Gender: {data.gender}</h4>
            <h4>Nationality: {data.nationality}</h4>
            <h4>City: {data.city}</h4>
        </div>
    )
}
export default Reuse_Component;