import React, { useState } from "react";

const TareaForm = (Props) => {
  const [inputText, setinputText] = useState("");
  const [validacion, setValidacion] = useState(true);

  const manejarFormulario = (event) => {
    setinputText(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== "") {
      Props.nuevaTarea(inputText);
      setinputText("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };

  return (
    <div className="form" onSubmit={submit}>
      <form>
        <span>Añadir Tarea</span>
        <input value={inputText} onChange={manejarFormulario} />
        <button className="boton">Añadir</button>
      </form>
      {
      !validacion && 
        <div className="validacion">Añada una tarea, Por favor...</div>
      }
    </div>
  );
};

export default TareaForm;
