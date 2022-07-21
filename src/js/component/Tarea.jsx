import React from "react";


const Tarea = (props) => {

const borrarTarea = () => {
    props.borrar(props.id);
}

    return (
        <div>
<div className="tarea">
    <span className="propstareas"><li>{props.tarea}</li></span>   <span onClick={borrarTarea}><img src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png" alt="" /></span> 
</div>

        </div>
    )
}

export default Tarea;