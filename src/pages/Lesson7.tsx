import { motion } from "framer-motion";

const Lesson7 = () => {
  return (
    <div className="size-[600px] border border-red-500">
      <motion.div
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        custom={1}
      ></motion.div>
    </div>
  );
};

export default Lesson7;
