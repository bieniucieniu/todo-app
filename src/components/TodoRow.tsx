import React from "react";

import { TodoRowProps } from "../types";

import styles from "../styles.module.scss";

export const TodoRow = ({
  todo: { id, task, completed },
  handleToggle: toggleTodo,
  handleDelete: deleteTodo,
}: TodoRowProps) => {
  return (
    <li className={styles.todoRow}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <p>{task}</p>
      <button onClick={() => deleteTodo(id)}>✖</button>
    </li>
  );
};
