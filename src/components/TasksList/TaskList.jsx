import React, { Component } from "react";
import style from "./TaskList.module.css";
import { nanoid } from "nanoid";
export class TaskList extends Component {
  state = {
    tasks: [
      { id: 1, text: "вивчити react" },
      { id: 2, text: "більше практикуватися" },
      { id: 3, text: "не забувати повторювати JS" },
    ],
    newTaskText: "",
  };

  handleDelete = (taskId) => {
    this.setState({
      tasks: this.state.tasks.filter(({ id }) => {
        return id !== taskId;
      }),
    });
  };

  handleInput = (evt) => {
    this.setState({ newTaskText: evt.target.value });
  };

  handleAdd = () => {
    const text = this.state.newTaskText;
    if (text === "") {
      return;
    }
    const newTask = { id: nanoid(), text: text };
    this.setState({
      tasks: [...this.state.tasks, newTask],
      newTaskText: "",
    });
  };

  render() {
    return (
      <div className={style.container}>
        <h2 className={style.title}>Список завдань</h2>
        <div className={style.box}>
          <input
            value={this.state.newTaskText}
            onInput={this.handleInput}
            className={style.input}
            type="text"
            placeholder="Введіть нове завдання"
          />
          <button
            className={style.addBtn}
            onClick={this.handleAdd}
            type="button"
          >
            Додати
          </button>
        </div>
        <ul className={style.list}>
          {this.state.tasks.map(({ id, text }) => {
            return (
              <li className={style.item} key={id}>
                {text}
                <button
                  className={style.delBtn}
                  onClick={() => this.handleDelete(id)}
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
}
//