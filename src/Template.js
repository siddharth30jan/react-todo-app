import React from 'react'

let myStyle={
    font: "italic",
    textDecoration: "line-through"
    
}
function Template(props){
    return(
        <div>
            <input type="checkbox" checked={props.checked} onChange={()=>{props.handleChange(props.id)}} ></input>
        <p style={props.checked?myStyle:null}>{props.val}</p>
        </div>
    )
}

export default Template