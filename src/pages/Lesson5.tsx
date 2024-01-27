import { motion } from "framer-motion";
import { useRef } from "react";

const parent = {
  hidden: { x: 0, y: 0 },
  visible: {
    x: [0, 300, -300, 0],
    y: [0, 300, -300, 0],
    rotate: [0, 300, -300, 0],
    opacity: 1,
    transition: {
      ease: "linear",
      duration: 2,
      repeat: Infinity,
      opacity: {
        duration: 0.5,
      },
    },
  },
  hover: {
    opacity: 1,
  },
  tap: {
    scale: 1.1,
    boxShadow: "0px 10px 10px ",
  },
};

const Lesson5 = () => {
  const parentRef = useRef(null);
  return (
    <div ref={parentRef} className="size-[500px] border border-red-500">
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        drag
        dragElastic={0.7}
        dragConstraints={parentRef}
        whileDrag="tap"
      ></motion.div>
    </div>
  );
};

export default Lesson5;
