"use client";

import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-row items-center overflow-hidden rounded-full border bg-white">
      {/* Search Icon */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="block w-fit aspect-square rounded-full p-3"
      >
        <FaSearch size={20} color="black" />
      </button>

      {/* Input box */}
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow px-2 text-black rounded-full outline-none"
        onFocus={() => setExpanded(true)}
        onBlur={() => setExpanded(false)}
      />
    </div>
  );
}

/* 
1. Container:
   - start with width of 45px
   - expand it to 300px 
   - add some transition

2. Input:
   - fade in the input box
   - transition={{ duration: 0.2 }}
*/








// "use client"

// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import { FaSearch } from "react-icons/fa";

// export default function SearchBar() {
//   const [expanded, setExpanded] = useState(false);

//   return (
//     <motion.div
//       className="flex flex-row items-center overflow-hidden rounded-full border bg-white"
//       initial={{ width: 45 }}
//       animate={{ width: expanded ? 300 : 45 }}
//       transition={{ duration: 0.4, ease: "easeInOut" }}
//     >
//       {/* Search Icon */}
//       <button
//         onClick={() => setExpanded(!expanded)}
//         className="block w-fit aspect-square rounded-full p-3"
//       >
//         <FaSearch size={20} color="black" />
//       </button>

//       {/* Input box */}
//         <motion.input
//           type="text"
//           placeholder="Search..."
//           className="flex-grow px-2 text-black rounded-full outline-none"
//           onFocus={() => setExpanded(true)}
//           onBlur={() => setExpanded(false)}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: expanded ? 1 : 0 }}
//           transition={{ duration: 0.2 }}
//         />
//     </motion.div>
//   );
// }
