//import logo from "./logo.svg";
import "./reset.css";
import "./App.scss";
import Search from "./components/Search";
import Button from "./components/Button";
import List from "./components/List";
import { useState } from "react";

//CALLBACKS
// 1. Crear una funcion en nuestro padre
// 2. Pasar esa funcion de padre a hijo por props SIN EJECUTAR
// 3. Ejecutar la funcion en nuestro hijo ante una accion del usuario

function App() {
  const [task, setTask] = useState("");
  const [item, setItem] = useState([]);

  function handleInput(taskValue) {
    //console.log(inputValue);
    setTask(taskValue);
  }
  function addTask() {
    console.log("addTask: ", task);
    if (task !== " ") {
      const newTasks = [...item, task];
      // ... -> Spread operator
      setItem(newTasks);
      setTask("");
      // console.log(item);
    }
  }
  function handleOnKeyDown(keyCode) {
    if (keyCode === 13 && task !== " ") {
      addTask();
    }
  }
  function onDelete(position) {
    console.log(`trying to delete something in position ${position}`);
    const newTasks = item.filter((task, key) => {
      return key !== position;
    });
    setItem(newTasks);
  }

  return (
    <div className="App">
      <div className="wrapper">
        <h1 className="title">To Do List</h1>
        <Search
          handleCallback={handleInput}
          handleKeyDown={handleOnKeyDown}
          value={task}
        />
        <Button handleCallback={addTask} />
        <List tasks={item} handleDelete={onDelete} />
      </div>
    </div>
  );
}

export default App;
