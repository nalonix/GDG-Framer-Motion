"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaTrash } from "react-icons/fa";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function AnimatedTodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Buy groceries", completed: false },
    { id: 2, text: "Walk the dog", completed: true },
  ]);
  const [input, setInput] = useState("");

  // Add a new todo
  const addTodo = () => {
    if (!input.trim()) return;
    setTodos([{ id: Date.now(), text: input, completed: false }, ...todos]);
    setInput("");
  };

  // Toggle completion
  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  // Delete todo
  const deleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  // Progress calculation
  const progress =
    todos.length === 0
      ? 0
      : (todos.filter((t) => t.completed).length / todos.length) * 100;

  return (
    <div className="flex flex-col items-center justify-start pt-5 min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">Checklist</h1>

      {/* Add input */}
      <div className="flex mb-6 w-80">
        <input
          type="text"
          className="flex-1 px-3 py-2 rounded-l-lg outline-none text-black dark:text-white placeholder  border border-zinc-700 "
          placeholder="Add new todo..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <motion.button
          onClick={addTodo}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 px-4 rounded-r-lg flex items-center justify-center"
        >
          <FaPlus size={20} />
        </motion.button>
      </div>

      {/* Progress Bar */}
      <div className="w-80 mb-6 bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="h-3 bg-blue-700"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        />
      </div>

      {/* Todo list */}
      <div className="w-80 space-y-3 relative">
        <AnimatePresence>
          {todos.map((todo) => (
            <motion.div
              key={todo.id}
              layout
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex items-center justify-between bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow cursor-pointer text-black"
            >
              {/* Checkbox + Text */}
              <div className="flex items-center space-x-3">
                <motion.div
                  onClick={() => toggleTodo(todo.id)}
                  className="w-6 h-6 border-2 border-gray-500 rounded flex items-center justify-center cursor-pointer"
                  whileTap={{ scale: 0.9 }}
                >
                  {todo.completed && (
                    <motion.div
                      initial={{ scale: 0, rotate: 180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      exit={{ scale: 0, rotate: 180 }}
                      className="w-4 h-4 bg-blue-500 rounded-sm"
                      transition={{ type: "spring", stiffness: 500, damping: 20 }}
                    />
                  )}
                </motion.div>

                <motion.span
                  className={`select-none ${todo.completed ? "line-through text-gray-500" : ""}`}
                  animate={{ opacity: todo.completed ? 0.7 : 1 }}
                >
                  {todo.text}
                </motion.span>
              </div>

              {/* Delete Button */}
              <motion.button
                onClick={() => deleteTodo(todo.id)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTrash size={18} />
              </motion.button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
