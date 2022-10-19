import React, { ChangeEvent, FormEvent, useState } from "react";
import { v4 } from "uuid";

import { TodoProps } from "../types";
import { AddTodo } from "./AddTodo";
import { TodoRow } from "./TodoRow";

import styles from "../styles.module.scss";

export const TodoList = () => {
  const [todos, setTodos] = useState<TodoProps[]>([
    {
      id: "first",
      task: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, nesciunt aut! Delectus, ipsa adipisci quis totam unde velit sunt non dicta, asperiores corporis error nisi quam possimus mollitia, eaque ducimus.",
      completed: false,
    },
    {
      id: "secend",
      task: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, nesciunt aut! Delectus, ipsa adipisci quis totam unde velit sunt non dicta, asperiores corporis error nisi quam possimus mollitia, eaque ducimus.",
      completed: false,
    },
    {
      id: "third",
      task: "Lorem ipsum dolor, sit amet consectetur",
      completed: false,
    },
  ]);

  const handleToggle = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDelete = (id: string) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const [task, setNewTask] = useState("");

  const handleChange = (e: ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    setNewTask(value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const NewTodo: TodoProps = {
      id: v4(),
      task: task,
      completed: false,
    };

    if (task) {
      const updatedTodos = [...todos, NewTodo];
      setTodos(updatedTodos);
      setNewTask("");
    }
  };

  return (
    <div className={styles.todoList}>
      <AddTodo
        task={task}
        handleChanges={handleChange}
        handleSubmit={handleSubmit}
      />
      <ul>
        {todos.map((todo) => {
          return (
            <TodoRow
              key={todo.id}
              todo={todo}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};
