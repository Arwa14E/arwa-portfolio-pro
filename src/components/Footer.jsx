import { ArrowUp, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";


function Footer() {

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];


  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#FAFAF8]
        pt-24
      "
    >

      {/* Background Glow */}

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[400px]
          h-[400px]
          rounded-full
          bg-[#EEF3FF]
          blur-[160px]
          opacity-60
        "
      />


      <div className="container relative z-10">


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
            rounded-[40px]
            bg-white/80
            backdrop-blur-xl
            border
            border-[#EDF0F6]
            shadow-[0_25px_70px_rgba(15,23,42,.06)]
            p-8
            lg:p-14
          "
        >

          <div
            className="
              grid
              lg:grid-cols-3
              gap-12
              items-center
            "
          >
          {/* Left Content */}

          <div>

            <h2
              className="
                text-4xl
                font-black
                tracking-[-1px]
                text-[#111827]
              "
            >
              Arwa<span className="text-[#7C8DFF]">.</span>
            </h2>


            <p
              className="
                mt-6
                max-w-sm
                leading-8
                text-[#64748B]
              "
            >
              Front-End Developer passionate about crafting
              elegant digital experiences with clean code,
              beautiful interfaces and modern technologies.
            </p>

          </div>



          {/* Navigation Links */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-x-8
              gap-y-5
            "
          >

            {links.map(([name, href]) => (

              <a
                key={name}
                href={href}
                className="
                  relative
                  font-semibold
                  text-[#64748B]
                  transition-all
                  hover:text-[#111827]
                  after:absolute
                  after:left-0
                  after:-bottom-2
                  after:h-[2px]
                  after:w-0
                  after:bg-[#7C8DFF]
                  after:transition-all
                  hover:after:w-full
                "
              >
                {name}
              </a>

            ))}

          </div>

          {/* Social Links */}

          <div
            className="
              flex
              justify-center
              lg:justify-end
              gap-4
            "
          >

            <a
              href="https://github.com/Arwa14E"
              target="_blank"
              rel="noreferrer"
              className="
                w-14
                h-14
                rounded-2xl
                bg-[#EEF3FF]
                flex
                items-center
                justify-center
                text-[#111827]
                transition-all
                duration-300
                hover:bg-[#7C8DFF]
                hover:text-white
                hover:-translate-y-1
              "
            >
              <FaGithub size={22} />
            </a>


            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="
                w-14
                h-14
                rounded-2xl
                bg-[#EEF3FF]
                flex
                items-center
                justify-center
                text-[#111827]
                transition-all
                duration-300
                hover:bg-[#7C8DFF]
                hover:text-white
                hover:-translate-y-1
              "
            >
              <FaLinkedin size={22} />
            </a>


            <a
              href="#home"
              className="
                w-14
                h-14
                rounded-2xl
                bg-[#111827]
                text-white
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:scale-110
                hover:shadow-lg
              "
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </a>

          </div>
        </div>

        </motion.div>


        {/* Bottom Bar */}

        <div
          className="
            mt-14
            pt-8
            border-t
            border-[#EDF0F6]
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-4
          "
        >

          <p
            className="
              text-sm
              text-[#64748B]
              text-center
            "
          >
            © 2026 Arwa Alneami. All rights reserved.
          </p>

          <p
            className="
              flex
              items-center
              gap-2
              text-sm
              text-[#64748B]
            "
          >
            Made with

            <Heart
              size={16}
              className="
                text-red-500
                fill-red-500
              "
            />

            using React & Tailwind CSS

          </p>


        </div>


      </div>


    </footer>
  );
}

export default Footer;