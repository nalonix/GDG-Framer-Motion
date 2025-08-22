"use client";

import { useState } from "react";
import ProgressBar from "./ProgressBar";
import TodoList from "./TodoList";
import AddTodoInput from "./AddTodoInput";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function TodoListApp() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
  ]);

  const addTodo = (text: string) => {
    if (!text.trim()) return;
    setTodos([{ id: Date.now(), text, completed: false }, ...todos]);
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="flex flex-col items-center pt-10 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Animated Todo List</h1>
      <AddTodoInput addTodo={addTodo} />
      <ProgressBar todos={todos} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}
