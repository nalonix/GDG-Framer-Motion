"use client"

import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";


export default function TriggerExamples() {
  return (
    <>
      <motion.div
        className="bg-orange-700 p-12 rounded-sm"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.80 }}
      >
        <span>
          <FaRobot size={50} />
        </span>
      </motion.div>

    </>
  )
}
