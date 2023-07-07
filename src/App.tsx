// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

import React, {useState, useEffect} from 'react'; 
import { Todo } from "./components/Todo";

/*Una interfaz describe la forma de un objeto, especificando los nombres y tipos de sus propiedades y métodos. Al definir una interfaz, estás estableciendo un contrato que otros objetos pueden seguir para garantizar que cumplan con ciertas propiedades y métodos específicos*/

interface DataTodo {
 todos: {
  completed: boolean;
  id: number;
  todo: string;
  userid: number;
 }[]; //Aquí indicamos que la propiedad todos guarda un arreglo de objetos
 total: number;
 skip: number;
 limit: number;
}


export const App : React.FC = () => {
  const [name, setName] = useState("Henry") //No hace falta definir el dato porque le asignamos un valor por defecto
  const [isActive, setIsActive] = useState<boolean>(false) //Tampoco hace falta
  const [todosList, setTodosList] = useState<DataTodo>() //Es un objeto

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetch("https://dummyjson.com/todos");
      const result = await data.json();
      console.log(result);
      setTodosList(result);
    };
    getTodos();
  }, []);

  return <div>{
    todosList?.todos.map((todo) => {
      return <Todo key={todo.id} todo = {todo.todo} status={todo.completed ? "active" : "inactive"}/>
    })
    }</div>;
  

};


//Contador

//   const [numClics, setNumClics] = useState<number>(0);

//con void definimos que es una función que no tiene retorno

//   const manejarClic = ():void => {
//     setNumClics(numClics + 1);
//     //console.log("Clic");
//   }
//   const reiniciarContador = ():void => {
//     setNumClics(0);
//   }

//   (
//     <div className="App">
//       <div className="freecodecamp-logo-contenedor">
//         <img className="freecodecamp-logo"
//         src={freecodecampLogo}
//         alt='logo de freecodecamp'  />
//       </div>
//       <div className='contenedor-principal'>
//         <Contador
//         numClics={numClics} />

//         <Boton 
//         texto='Clic' 
//         esBotonDeCLic={true} 
//         manejarClic={manejarClic} />
//         <Boton 
//         texto='Reiniciar' 
//         esBotonDeCLic={false}
//          manejarClic={reiniciarContador} />
//       </div>
//     </div>
//   );


//Componente boton


interface BotonProps {
  texto: string;
  esBotonDeCLic: boolean;
  manejarClic: MouseEventHandler<HTMLButtonElement>;
}

const Boton: React.FC<BotonProps> = ({ texto, esBotonDeCLic, manejarClic }) => {
  return (
    <button
      className={esBotonDeCLic ? "boton-clic" : "boton-reiniciar"}
      onClick={manejarClic}
    >
      {texto}
    </button>
  );
};

//Componente contador



interface ContadorProps {
  numClics: number;
}

//ContadorProps define las propiedades que se esperan del componente contador
const Contador: React.FC<ContadorProps> = ({ numClics }) => {
  return (
    <div className="contador">
      {numClics}
    </div>
  );
};

export default Contador;
