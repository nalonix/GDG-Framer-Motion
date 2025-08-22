"use client";

import { motion } from "framer-motion";
import { Todo } from "./TodoListApp";

interface ProgressBarProps {
  todos: Todo[];
}

export default function ProgressBar({ todos }: ProgressBarProps) {
  const progress =
    todos.length === 0
      ? 0
      : (todos.filter((t) => t.completed).length / todos.length) * 100;

  return (
    <div className="w-80 mb-6 bg-gray-700 rounded-full h-3 overflow-hidden">
      <motion.div
        className="h-3 bg-blue-700"
      />
    </div>
  );
}

/*

  1. Progress Bar:
     - Animate width from 0 → current progress % when todos change
     - Use spring transition for a smooth, natural motion
       (stiffness and damping control bounciness and speed)

*/



/* 
  "use client";

import { motion } from "framer-motion";
import { Todo } from "./TodoListApp";

interface ProgressBarProps {
  todos: Todo[];
}

export default function ProgressBar({ todos }: ProgressBarProps) {
  const progress =
    todos.length === 0
      ? 0
      : (todos.filter((t) => t.completed).length / todos.length) * 100;

  return (
    <div className="w-80 mb-6 bg-gray-700 rounded-full h-3 overflow-hidden">
      <motion.div
        className="h-3 bg-blue-700"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
      />
    </div>
  );
}


*/