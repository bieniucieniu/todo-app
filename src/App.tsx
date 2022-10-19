import React from "react";

import styles from "./styles.module.scss";

import { TodoList } from "./components/TodoList";

export const App = () => {
  return (
    <div className={styles.app}>
      <h1>ToDo App</h1>

      <TodoList />
    </div>
  );
};
