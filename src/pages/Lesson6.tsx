import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const Lesson6 = () => {
  const controls = useAnimationControls();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    controls.start((i) => ({ x: 200, transition: { delay: i * 2 } }));
  }, []);

  return (
    <div className="size-[600px] border border-red-500">
      <motion.div
        animate={controls}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        custom={1}
      ></motion.div>
      <motion.div
        animate={controls}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        custom={2}
      ></motion.div>
      <motion.div
        animate={controls}
        className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        custom={3}
      ></motion.div>
    </div>
  );
};

export default Lesson6;
