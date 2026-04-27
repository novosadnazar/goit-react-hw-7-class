// 


import { useState } from "react";
import style from "./TaskList.module.css";
import { nanoid } from "nanoid";
const TaskList= ()=> {
  // state = {
  //   tasks: [
  //     { id: 1, text: "вивчити react" },
  //     { id: 2, text: "більше практикуватися" },
  //     { id: 3, text: "не забувати повторювати JS" },
  //   ],
  //   newTaskText: "",
  // };

  const [tasks, setTasks] = useState([
      { id: 1, text: "вивчити react" },
      { id: 2, text: "більше практикуватися" },
      { id: 3, text: "не забувати повторювати JS" },
  ]
  )
  const [newTaskText, setNewTaskText] = useState("");

  const handleDelete = (taskId) => {
    // this.setState({
    //   tasks: this.state.tasks.filter(({ id }) => {
    //     return id !== taskId;
    //   }),
    // });

    setTasks((prevTasks)=> prevTasks.filter(({id})=> id !== taskId))
  };

  const handleInput = (evt) => {
    // this.setState({ newTaskText: evt.target.value });
    setNewTaskText(evt.target.value)
  };

  const handleAdd = () => {
   
    // const text = this.state.newTaskText;
    // if (text === "") {
    //   return;
    // }
    // const newTask = { id: nanoid(), text: text };
    // this.setState({
    //   tasks: [...this.state.tasks, newTask],
    //   newTaskText: "",
    // });
    const text = newTaskText;
    if (text === "") {
      return;
    }
const newTask = { id: nanoid(), text: text };
    setTasks((prevTask) => [...prevTask, newTask]);
    setNewTaskText("")
  };

  
    return (
      <div className={style.container}>
        <h2 className={style.title}>Список завдань</h2>
        <div className={style.box}>
          <input
            value={newTaskText}
            onInput={handleInput}
            className={style.input}
            type="text"
            placeholder="Введіть нове завдання"
          />
          <button
            className={style.addBtn}
            onClick={handleAdd}
            type="button"
          >
            Додати
          </button>
        </div>
        <ul className={style.list}>
          {tasks.map(({ id, text }) => {
            return (
              <li className={style.item} key={id}>
                {text}
                <button
                  className={style.delBtn}
                  onClick={() => handleDelete(id)}
                  type="button"
                >
                  Видалити
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

export default TaskList