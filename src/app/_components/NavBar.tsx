
"use client"

import { useState } from 'react';
import { FaHome, FaEnvelope, FaTools } from 'react-icons/fa';

// Menu data
const menuItems = [
  {
    name: 'Home',
    icon: <FaHome />,
    subItems: ['Dashboard', 'Profile', 'Settings'],
  },
  {
    name: 'Messages',
    icon: <FaEnvelope />,
    subItems: ['Inbox', 'Sent'],
  },
  {
    name: 'Tools',
    icon: <FaTools />,
    subItems: ['Analytics', 'Reports', 'Tasks', 'Calendar'],
  },
];

/* 
  SubMenu Component:
  - Displays subItems of the active menu.
  - Animations to add:
      * Wrap with <AnimatePresence> for exit animations.
      * Wrap the container with motion.div.
      * Add `initial={{ opacity: 0, y: -10 }}` for fade-in + slide from above.
      * Add `animate={{ opacity: 1, y: 0 }}` for visible state.
      * Add `exit={{ opacity: 0, y: -10 }}` for fade-out + slide up.
      * Add `transition={{ duration: 0.2 }}`
      * Each subItem can be wrapped with motion.div and add `layout` for smooth repositioning.
*/
const SubMenu = ({ subItems }: { subItems: string[] }) => {
  return (
    <div className="order-first">
      {subItems.map((subItem, index) => (
        <div
          key={index}
          className="w-full px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
        >
          {subItem}
        </div>
      ))}
    </div>
  )
}

/* 
  NavItem Component:
  - Represents a single main nav button with icon + label.
  - Animations to add:
      * Wrap outer div with motion.div.
      * Add `whileHover={{ scale: 1.1 }}` for slight grow on hover.
*/
const NavItem = ({
  item,
  isActive,
  onHover,
}: {
  item: { name: string; icon: React.ReactNode },
  isActive: boolean,
  onHover: () => void
}) => {
  return (
    <div
      className={`flex-1 flex items-center justify-center p-1 rounded-md cursor-pointer ${isActive ? 'bg-gray-300' : ''}`}
      onMouseEnter={onHover}
    >
      <span className="text-gray-700 text-xl">{item.icon}</span>
      <span className="text-gray-700 font-medium ml-2">{item.name}</span>
    </div>
  )
}

/* 
  NavBar Component:
  - Container for SubMenu and main nav items.
  - Animations to add:
      * Wrap outer div with motion.nav
      * Add `layout` prop for smooth height adjustment when submenu appears/disappears.
      * Add `transition={{ type: "spring", stiffness: 150, damping: 10 }}`
*/
const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null)

  return (
    <div
      className="fixed bottom-4 mx-auto left-0 right-0 w-96 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {activeMenu !== null && <SubMenu subItems={menuItems[activeMenu].subItems} />}

      <div className="flex gap-3 justify-around order-last px-3 py-2">
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            item={item}
            isActive={activeMenu === index}
            onHover={() => setActiveMenu(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default NavBar





/*


"use client"

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaEnvelope, FaTools } from 'react-icons/fa';

// Menu data
const menuItems = [
  {
    name: 'Home',
    icon: <FaHome />,
    subItems: ['Dashboard', 'Profile', 'Settings'],
  },
  {
    name: 'Messages',
    icon: <FaEnvelope />,
    subItems: ['Inbox', 'Sent'],
  },
  {
    name: 'Tools',
    icon: <FaTools />,
    subItems: ['Analytics', 'Reports', 'Tasks', 'Calendar'],
  },
];

// SubMenu Component
const SubMenu = ({ subItems }: { subItems: string[] }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="order-first"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {subItems.map((subItem, index) => (
          <motion.div
            key={index}
            layout
            className="w-full px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
          >
            {subItem}
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  )
}

// NavItem Component
const NavItem = ({
  item,
  isActive,
  onHover,
}: {
  item: { name: string; icon: React.ReactNode },
  isActive: boolean,
  onHover: () => void
}) => {
  return (
    <motion.div
      className={`flex-1 flex items-center justify-center p-1 rounded-md cursor-pointer ${isActive ? 'bg-gray-300' : ''}`}
      whileHover={{ scale: 1.1 }}
      onMouseEnter={onHover}
    >
      <span className="text-gray-700 text-xl">{item.icon}</span>
      <span className="text-gray-700 font-medium ml-2">{item.name}</span>
    </motion.div>
  )
}

// NavBar Component
const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState<number | null>(null)

  return (
    <motion.nav
      layout
      className="fixed bottom-4 mx-auto left-0 right-0 w-96 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
      transition={{ type: "spring", stiffness: 150, damping: 10 }}
      onMouseLeave={() => setActiveMenu(null)}
    >
      {activeMenu !== null && <SubMenu subItems={menuItems[activeMenu].subItems} />}

      <motion.div layout className="flex gap-3 justify-around order-last px-3 py-2">
        {menuItems.map((item, index) => (
          <NavItem
            key={index}
            item={item}
            isActive={activeMenu === index}
            onHover={() => setActiveMenu(index)}
          />
        ))}
      </motion.div>
    </motion.nav>
  )
}

export default NavBar


*/