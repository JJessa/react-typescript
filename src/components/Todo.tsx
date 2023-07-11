import React from "react";

type TodoStatus = "active" | "inactive" |"open" | "close" 

interface TodoProps {
    todo: string;
    // status?: string;//Si ponemos ? la propiedad ya es opcional
    status?: TodoStatus; //Creamos nuestro propio tipado, si cambiamos algo en status nos da un error
}

export const Todo : React.FC<TodoProps> = ({todo, status}) => {
const handleClick = (evt: React.MouseEvent) => {
    console.log(evt.type);//Utilizando el tipado de mousevent, desde el punto vemos todas las propiedades que podemos utilizar
};

    return (
        <>
            <i>{todo}</i>
            <h2>{status}</h2>
            <button onClick={handleClick}>Change text</button>
            <hr />
        </>
    );
}
