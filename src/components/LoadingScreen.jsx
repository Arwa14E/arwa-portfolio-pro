import { motion } from "framer-motion";


function LoadingScreen() {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="
        fixed
        inset-0
        z-[9999]
        flex
        items-center
        justify-center
        bg-[#FAFAF8]
      "
    >

      <div
        className="
          flex
          flex-col
          items-center
        "
      >

        {/* Loader */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
          className="
            w-20
            h-20
            rounded-full
            border-[5px]
            border-[#DCE6FF]
            border-t-[#7C8DFF]
          "
        />

        {/* Name */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .3,
            duration: .6,
          }}
          className="
            mt-8
            text-2xl
            font-black
            tracking-[3px]
            text-[#111827]
          "
        >
          Arwa<span className="text-[#7C8DFF]">.</span>
        </motion.h1>


        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: .5,
          }}
          className="
            mt-3
            text-sm
            text-[#64748B]
            tracking-wide
          "
        >
          Front-End Developer
        </motion.p>


      </div>


    </motion.div>
  );
}

export default LoadingScreen;