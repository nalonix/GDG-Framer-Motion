"use client";

import { AnimatePresence, motion } from "framer-motion";
import TodoItem from "./TodoItem";
import { Todo } from "./TodoListApp";

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoList({ todos, toggleTodo, deleteTodo }: TodoListProps) {
  return (
    <div className="w-80 space-y-3 relative">
      <AnimatePresence>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}



