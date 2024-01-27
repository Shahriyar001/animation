import { motion } from "framer-motion";

const parent = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.5,
    },
  },
  tap: {
    scale: 1,
    rotate: 45,
  },
};

const Lesson3 = () => {
  return (
    <div>
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial="hidden"
        animate="visible"
        whileHover="hover"
        whileTap="tap"
        onHoverStart={() => console.log("Hoverd")}
        onHoverEnd={() => console.log("Hoverddddd")}
      ></motion.div>
    </div>
  );
};

export default Lesson3;
