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
    <footer className="bg-[#FCFCFF] pt-24">

      <div className="container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="
            rounded-[40px]
            bg-white
            border
            border-[#EDF0F6]
            shadow-[0_25px_70px_rgba(15,23,42,.06)]
            p-10
            lg:p-14
          "
        >

          <div className="grid lg:grid-cols-3 gap-12 items-center">

            {/* Left */}

            <div>

              <h2 className="text-4xl font-black text-[#111827]">
                Arwa<span className="text-[#7C8DFF]">.</span>
              </h2>

              <p className="mt-6 leading-8 text-[#64748B] max-w-sm">
                Front-End Developer passionate about crafting
                elegant digital experiences with clean code,
                beautiful interfaces and modern technologies.
              </p>

            </div>

            {/* Center */}

            <div className="flex flex-wrap justify-center gap-8">

              {links.map(([name, href]) => (

                <a
                  key={name}
                  href={href}
                  className="
                    relative
                    font-semibold
                    text-[#64748B]
                    hover:text-[#111827]
                    transition
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

            {/* Right */}

            <div className="flex justify-center lg:justify-end gap-4">

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
                  hover:bg-[#7C8DFF]
                  hover:text-white
                  hover:-translate-y-1
                  transition-all
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
                  hover:bg-[#7C8DFF]
                  hover:text-white
                  hover:-translate-y-1
                  transition-all
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
                  hover:scale-110
                  transition
                "
              >
                <ArrowUp size={20} />
              </a>

            </div>

          </div>

          {/* Bottom */}

          <div className="mt-14 pt-8 border-t border-[#EDF0F6] flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-[#64748B] text-sm">
              © 2026 Arwa Alneami. All rights reserved.
            </p>

            <p className="flex items-center gap-2 text-sm text-[#64748B]">
              Made with
              <Heart
                size={16}
                className="text-red-500 fill-red-500"
              />
              using React & Tailwind CSS
            </p>

          </div>

        </motion.div>

      </div>

    </footer>
  );
}

export default Footer;