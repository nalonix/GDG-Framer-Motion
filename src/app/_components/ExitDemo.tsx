"use client"

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FaRobot } from "react-icons/fa";

export default function ExitDemo() {
    const [isVisible, setIsVisible] = useState(true);

    return (
        <>
            <AnimatePresence>
                {
                    isVisible && (
                        <motion.div
                            className="bg-green-700 p-12 rounded-sm"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                        >
                            <FaRobot size={50} />
                        </motion.div>
                    )
                }
            </AnimatePresence>

            <div>
                <button
                    className="bg-blue-700 text-white p-2 rounded-sm"
                    onClick={() => setIsVisible(!isVisible)}>Toggle</button>
            </div>
        </>
    )
}