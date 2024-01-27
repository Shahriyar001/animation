import { motion } from "framer-motion";
import { useRef } from "react";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 0.6,
    scale: 1,
  },
  hover: {
    opacity: 1,
  },
  tap: {
    scale: 1.1,
    boxShadow: "0px 10px 10px ",
  },
};

const Lesson4 = () => {
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

export default Lesson4;
