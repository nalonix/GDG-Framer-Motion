"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

interface AddTodoInputProps {
  addTodo: (text: string) => void;
}

export default function AddTodoInput({ addTodo }: AddTodoInputProps) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <div className="flex mb-6 w-80">
      <input
        type="text"
        className="flex-1 px-3 py-2 rounded-l-lg border border-zinc-700 outline-none text-black dark:text-white"
        placeholder="Add new todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <motion.button
        onClick={handleAdd}
        className="bg-blue-500 px-4 rounded-r-lg flex items-center justify-center"
      >
        <FaPlus size={20} />
      </motion.button>
    </div>
  );
}



/*

  1. Add Button:
     - Hover effect: slightly scale up to indicate interactivity
     - Tap/click effect: slightly scale down to show button press 
*/



// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { FaPlus } from "react-icons/fa";

// interface AddTodoInputProps {
//   addTodo: (text: string) => void;
// }

// export default function AddTodoInput({ addTodo }: AddTodoInputProps) {
//   const [input, setInput] = useState("");

//   const handleAdd = () => {
//     addTodo(input);
//     setInput("");
//   };

//   return (
//     <div className="flex mb-6 w-80">
//       <input
//         type="text"
//         className="flex-1 px-3 py-2 rounded-l-lg border border-zinc-700 outline-none text-black dark:text-white"
//         placeholder="Add new todo..."
//         value={input}
//         onChange={(e) => setInput(e.target.value)}
//         onKeyDown={(e) => e.key === "Enter" && handleAdd()}
//       />
//       <motion.button
//         onClick={handleAdd}
//         whileHover={{ scale: 0.9 }}
//         whileTap={{ scale: 1.1 }}
//         className="bg-blue-500 px-4 rounded-r-lg flex items-center justify-center"
//       >
//         <FaPlus size={20} />
//       </motion.button>
//     </div>
//   );
// }