import React from "react";

import { AddTodoPorps } from "../types";

import styles from "../styles.module.scss";

export const AddTodo = ({
  task,
  handleChanges,
  handleSubmit,
}: AddTodoPorps) => {
  return (
    <form onSubmit={handleSubmit} className={styles.addTodo}>
      <input
        type="text"
        name="task"
        value={task}
        onChange={handleChanges}
        autoComplete="off"
        placeholder="Add a new todo"
      />
      <button type="submit">+</button>
    </form>
  );
};
