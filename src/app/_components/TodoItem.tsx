"use client";

import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { Todo } from "./TodoListApp";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <motion.div
      className="flex items-center justify-between bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow cursor-pointer text-black"
    >
      {/* Checkbox + Text */}
      <div className="flex items-center space-x-3">
        <motion.div
          onClick={() => toggleTodo(todo.id)}
          className="w-6 h-6 border-2 border-gray-500 rounded flex items-center justify-center cursor-pointer"
        >
          {todo.completed && (
            <motion.div
              className="w-4 h-4 bg-blue-500 rounded-sm"
            />
          )}
        </motion.div>

        <motion.span
          className={`select-none ${todo.completed ? "line-through text-gray-500" : ""}`}
        >
          {todo.text}
        </motion.span>
      </div>

      {/* Delete Button */}
      <motion.button
        onClick={() => deleteTodo(todo.id)}
      >
        <FaTrash size={18} />
      </motion.button>
    </motion.div>
  );
}

/*

  1. Todo Item Container:
     - Entry animation: opacity 0 → 1, y -20 → 0
     - Exit animation: opacity 1 → 0, y 0 → 20
     - Layout changes smoothly when items are added/removed (layout prop)
     - Use spring transition for natural motion

  2. Checkbox:
     - Tap/click: scale down slightly on press
     - Checked state: animate scale 0 → 1 and rotate 180 → 0
     - Exit animation: scale 1 → 0 when unchecked

  3. Todo Text:
     - Fade opacity slightly when checked
     - Line-through text decoration applied instantly (optional)

  4. Delete Button:
     - Hover: scale up slightly
     - Tap: scale down slightly

*/



/*

"use client";

import { motion } from "framer-motion";
import { FaTrash } from "react-icons/fa";
import { Todo } from "./TodoListApp";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="flex items-center justify-between bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow cursor-pointer text-black"
    >
 
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



      <motion.button
        onClick={() => deleteTodo(todo.id)}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaTrash size={18} />
      </motion.button>
    </motion.div>
  );
}


*/