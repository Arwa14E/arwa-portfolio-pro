import { motion } from "framer-motion";

function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 bg-[#F8FBFF] z-[9999] flex items-center justify-center"
    >
      <div className="flex flex-col items-center">

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="w-20 h-20 rounded-full border-[6px]
          border-[#CFE7FF]
          border-t-[#5FA8FF]"
        />

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: .3,
          }}
          className="mt-8 text-2xl font-black tracking-widest"
        >
          Arwa Alneami
        </motion.h1>

      </div>
    </motion.div>
  );
}

export default LoadingScreen;