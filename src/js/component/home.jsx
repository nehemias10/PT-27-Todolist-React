import React, { useState } from "react";


import TareaForm from "./tareaform.jsx";
import Tarea from "./Tarea.jsx";

//create your first component
const Home = () => {
  const [listaTareas, setListaTareas] = useState([]);

  const nuevaTarea = (tarea) => {
    setListaTareas([tarea, ...listaTareas]);
  };

const borrar = (id) => {
  const listaFiltrada = listaTareas.filter((e, index) => index !== id);
  setListaTareas(listaFiltrada);
}
  return (
   <div>
    <h2 className="todolist">Todo List</h2>
    <div className="todo">
      <TareaForm nuevaTarea={nuevaTarea} />
<div className="tareas">

{
        listaTareas.map((e, index) => <Tarea
          
                        tarea={e}
                        borrar={borrar}
                        id={index}
                        
                        />)
      }

</div>
      
    </div>
    </div>
  );
};

export default Home;
