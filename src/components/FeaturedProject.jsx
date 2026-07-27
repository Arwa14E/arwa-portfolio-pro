import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projectImage from "../assets/project1.png";


function FeaturedProject() {
  return (
    <section
      id="featured"
      className="
        relative
        overflow-hidden
        py-32
        lg:py-40
        bg-[#FAFAF8]
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          -top-40
          -left-40
          w-[800px]
          h-[800px]
          rounded-full
          bg-[#EEF3FF]
          blur-[260px]
          opacity-60
        "
      />


      <div
        className="
          absolute
          bottom-0
          right-0
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#DCE6FF]
          blur-[220px]
          opacity-60
        "
      />


      <div className="container relative z-10">


        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
          className="
            text-center
            mb-20
          "
        >

          <span
            className="
              uppercase
              tracking-[6px]
              text-[#7C8DFF]
              font-semibold
              text-sm
            "
          >
            Featured Project
          </span>


          <h2
            className="
              mt-5
              text-5xl
              lg:text-6xl
              font-black
              tracking-[-2px]
              text-[#111827]
            "
          >
            Selected Work
          </h2>


          <p
            className="
              mt-7
              max-w-3xl
              mx-auto
              text-lg
              leading-9
              text-[#64748B]
            "
          >
            A highlighted project that reflects my development process,
            attention to detail and modern UI design principles.
          </p>


        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .8,
          }}
          className="
            grid
            lg:grid-cols-2
            gap-14
            lg:gap-20
            items-center
            bg-white/80
            backdrop-blur-xl
            rounded-[44px]
            p-8
            lg:p-14
            border
            border-[#EDF0F6]
            shadow-[0_35px_90px_rgba(15,23,42,.08)]
          "
        >


          {/* IMAGE */}

          <div
            className="
              relative
              flex
              justify-center
            "
          >

            <div
              className="
                absolute
                -inset-16
                bg-[#DCE6FF]
                blur-[140px]
                opacity-60
                rounded-full
              "
            />


            <motion.img
              whileHover={{
                scale: 1.04,
                rotate: -1,
              }}
              transition={{
                duration: .4,
              }}
              src={projectImage}
              alt="Ward Coffee"
              className="
                relative
                z-10
                w-full
                max-w-[650px]
                rounded-[34px]
                object-cover
                shadow-[0_40px_80px_rgba(15,23,42,.12)]
              "
            />

          </div>


          {/* CONTENT */}

          <div
            className="
              max-w-[620px]
              w-full
            "
          >

            <div
              className="
                flex
                items-center
                gap-5
                mb-7
              "
            >

              <span
                className="
                  text-5xl
                  font-black
                  text-[#7C8DFF]
                "
              >
                01
              </span>


              <div
                className="
                  w-24
                  h-[2px]
                  bg-[#7C8DFF]
                "
              />

            </div>


            <span
              className="
                uppercase
                tracking-[4px]
                text-sm
                font-semibold
                text-[#7C8DFF]
              "
            >
              Front-End Website
            </span>


            <h3
              className="
                mt-4
                text-5xl
                font-black
                leading-tight
                tracking-[-1px]
                text-[#111827]
              "
            >
              Ward Coffee
            </h3>

            <p
              className="
                mt-8
                text-lg
                leading-[2]
                text-[#64748B]
              "
            >
              Ward Coffee is a premium café website designed with a modern,
              elegant user experience. The project combines responsive layouts,
              smooth animations and clean visual hierarchy to create an engaging
              digital identity while maintaining excellent performance across
              all devices.
            </p>


            {/* Project Details */}

            <div
              className="
                grid
                grid-cols-3
                gap-6
                mt-12
              "
            >

              <div>

                <p
                  className="
                    text-sm
                    text-[#94A3B8]
                  "
                >
                  Role
                </p>


                <h4
                  className="
                    mt-2
                    text-lg
                    font-bold
                    text-[#111827]
                  "
                >
                  Front-End
                </h4>

              </div>


              <div>

                <p
                  className="
                    text-sm
                    text-[#94A3B8]
                  "
                >
                  Duration
                </p>


                <h4
                  className="
                    mt-2
                    text-lg
                    font-bold
                    text-[#111827]
                  "
                >
                  3 Weeks
                </h4>

              </div>


              <div>

                <p
                  className="
                    text-sm
                    text-[#94A3B8]
                  "
                >
                  Year
                </p>


                <h4
                  className="
                    mt-2
                    text-lg
                    font-bold
                    text-[#111827]
                  "
                >
                  2026
                </h4>

              </div>


            </div>


            {/* Technologies */}

            <div
              className="
                flex
                flex-wrap
                gap-3
                mt-10
                mb-10
              "
            >

              {[
                "React",
                "Vite",
                "Tailwind CSS",
                "Framer Motion",
                "Responsive",
              ].map((item) => (

                <span
                  key={item}
                  className="
                    px-5
                    py-2.5
                    rounded-full
                    bg-[#EEF3FF]
                    text-[#5A6BFF]
                    font-semibold
                    text-sm
                  "
                >
                  {item}
                </span>

              ))}


            </div>

            {/* Buttons */}

            <div
              className="
                flex
                flex-wrap
                gap-4
              "
            >

              <a
                href="https://ward-cafe-nu.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  h-14
                  min-w-[180px]
                  px-8
                  rounded-full
                  bg-[#6C7CFF]
                  text-white
                  font-semibold
                  shadow-lg
                  transition-all
                  duration-300
                  hover:bg-[#586AF8]
                  hover:-translate-y-1
                  hover:shadow-[0_20px_40px_rgba(108,124,255,.35)]
                "
              >

                Live Demo

                <ArrowUpRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                  "
                />

              </a>


              <a
                href="https://github.com/Arwa14E"
                target="_blank"
                rel="noreferrer"
                className="
                  group
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  h-14
                  min-w-[180px]
                  px-8
                  rounded-full
                  bg-white
                  border
                  border-[#D9DFEC]
                  text-[#111827]
                  font-semibold
                  shadow-md
                  transition-all
                  duration-300
                  hover:border-[#7C8DFF]
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >

                <FaGithub
                  size={20}
                  className="
                    transition-transform
                    duration-300
                    group-hover:rotate-12
                  "
                />

                GitHub

              </a>

            </div>


          </div>


        </motion.div>


      </div>

    </section>
  );
}

export default FeaturedProject;