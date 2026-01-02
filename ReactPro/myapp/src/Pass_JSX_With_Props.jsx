function Pass_JSX({children, color="green"}){
    return(
        <div style={{border:"1px solid green", color:color, margin:"10px",width:"200px"}}>
           {children}
        </div>
    )
}
export default Pass_JSX;