import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";


/*
First
[] Add rotation effect from 10deg to 0deg
Second
[] try to make it fade in from the top with no rotation - remember animatable props
[] 
*/


// export default function RotateIntro() {
//     return (
        
//         <motion.div
//             className="bg-blue-700 p-12 rounded-sm"
//             initial={{ x: -100, scale: 0.6 }}
//             animate={{ x: 0, scale: 1 }}
//             // transition={{ duration: 2, delay: 1, ease: "easeOut" }}
//         >
//             <span>
//                 <FaRobot size={50} />
//             </span>
//         </motion.div>

//     )
// }

export default function RotateIntro() {
    return (
        
        <motion.div
            className="bg-blue-700 p-12 rounded-sm"
            initial={{ y: -100, scale: 0.6, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1}}
            transition={{ duration: 0.3, delay: 1, ease: "easeInOut" }}
        >
            <span>
                <FaRobot size={50} />
            </span>
        </motion.div>

    )
}