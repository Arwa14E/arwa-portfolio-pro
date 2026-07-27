import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import heroImage from "../assets/hero-3d.png";


function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-[#FAFBFF]
        pt-32
        lg:pt-24
      "
    >

      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute
            right-[-220px]
            top-[-180px]
            h-[620px]
            w-[620px]
            rounded-full
            bg-[#E7EDFF]
            blur-[150px]
            opacity-70
          "
        />

        <div
          className="
            absolute
            left-[-180px]
            bottom-[-220px]
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#F2F5FF]
            blur-[130px]
            opacity-80
          "
        />

      </div>


      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-6
          lg:px-10
        "
      >

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-2
          "
        >


          {/* LEFT */}

          <motion.div
            initial={{
              opacity:0,
              y:30,
            }}

            animate={{
              opacity:1,
              y:0,
            }}

            transition={{
              duration:.8,
            }}

            className="
              max-w-[620px]
            "
          >

            <span
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-[#E4E7EC]
                bg-white
                px-5
                py-2.5
                text-xs
                font-semibold
                tracking-[0.25em]
                uppercase
                text-[#6C7CFF]
                shadow-sm
              "
            >
              Front-End Developer
            </span>

            <h1
              className="
                mt-8
                text-[56px]
                lg:text-[84px]
                font-black
                leading-[0.95]
                tracking-[-3px]
                text-[#111827]
              "
            >

              Building
              <br />

              modern digital
              <br />

              experiences.

            </h1>



            <p
              className="
                mt-8
                max-w-[520px]
                text-[17px]
                leading-8
                text-[#667085]
              "
            >
              I design and develop modern websites with clean interfaces,
              thoughtful user experiences, and high performance for businesses
              that value quality.
            </p>



            {/* Buttons */}


            <div
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-5
              "
            >


              <motion.a
                href="#projects"

                whileHover={{
                  y:-3,
                }}

                transition={{
                  duration:.25,
                }}

                className="
                  inline-flex
                  h-14
                  items-center
                  gap-2
                  rounded-full
                  bg-[#111827]
                  px-8
                  text-base
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  hover:bg-[#1F2937]
                "
              >

                View Projects

                <ArrowUpRight
                  size={18}
                />

              </motion.a>



              <motion.a
                href="#contact"

                whileHover={{
                  y:-3,
                }}

                transition={{
                  duration:.25,
                }}

                className="
                  inline-flex
                  h-14
                  items-center
                  rounded-full
                  border
                  border-[#E5E7EB]
                  bg-white
                  px-8
                  text-base
                  font-semibold
                  text-[#111827]
                  shadow-sm
                  transition-all
                  hover:border-[#7C8DFF]
                "
              >

                Contact

              </motion.a>


            </div>


          </motion.div>

          {/* RIGHT */}


          <motion.div

            initial={{
              opacity:0,
              x:40,
            }}

            animate={{
              opacity:1,
              x:0,
            }}

            transition={{
              duration:.8,
              delay:.15,
            }}

            className="
              relative
              flex
              justify-center
              lg:justify-end
            "

          >


            {/* Glow Behind Image */}

            <div
              className="
                absolute
                h-[420px]
                w-[420px]
                rounded-full
                bg-[#E8EEFF]
                blur-[110px]
                opacity-80
              "
            />



            <motion.img

              src={heroImage}

              alt="Arwa Alneami"

              whileHover={{
                scale:1.04,
                rotate:1,
              }}

              transition={{
                duration:.4,
              }}

              className="
                relative
                z-10
                w-full
                max-w-[560px]
                object-contain
                drop-shadow-[0_30px_60px_rgba(15,23,42,.12)]
                animate-[float_6s_ease-in-out_infinite]
              "

            />


          </motion.div>


        </div>


      </div>


    </section>
  );
}


export default Hero;