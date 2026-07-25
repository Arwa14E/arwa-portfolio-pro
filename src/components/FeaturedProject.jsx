import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import projectImage from "../assets/project1.png";

function FeaturedProject() {
  return (
    <section
      id="featured"
      className="relative py-40 bg-[#F8F9FF] overflow-hidden"
    >
      {/* Background */}

      <div className="absolute -top-32 -left-32 w-[850px] h-[850px] bg-[#EEF3FF] blur-[260px] opacity-60 rounded-full" />

      <div className="absolute bottom-0 right-0 w-[520px] h-[520px] bg-[#DCE6FF] blur-[220px] opacity-60 rounded-full" />

      <div className="container relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-28"
        >

          <span className="uppercase tracking-[6px] text-[#7C8DFF] font-semibold">
            Featured Project
          </span>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black tracking-[-2px] text-[#111827]">
            Selected Work
          </h2>

          <p className="mt-7 max-w-3xl mx-auto text-lg leading-9 text-[#64748B]">
            A highlighted project that reflects my development process,
            attention to detail and modern UI design principles.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="
          grid
          lg:grid-cols-[1fr_1fr]
          gap-24
          items-center
          bg-white/70
          backdrop-blur-xl
          rounded-[44px]
          p-12
          lg:p-16
          border
          border-white
          shadow-[0_35px_90px_rgba(15,23,42,.08)]
          "
        >

          {/* IMAGE */}

          <div className="relative flex justify-center">

            <div className="absolute -inset-16 bg-[#DCE6FF] blur-[140px] opacity-60 rounded-full" />

            <motion.img
              whileHover={{
                scale: 1.04,
                rotate: -1,
              }}
              transition={{ duration: .4 }}
              src={projectImage}
              alt="Ward Coffee"
              className="
              relative
              z-10
              w-full
              max-w-[720px]
              rounded-[34px]
              object-cover
              shadow-[0_40px_80px_rgba(15,23,42,.12)]
              "
            />

          </div>

          {/* CONTENT */}

          <div className="max-w-[650px] w-full">

            <div className="flex items-center gap-5 mb-8">

              <span className="text-5xl font-black text-[#7C8DFF]">
                01
              </span>

              <div className="w-24 h-[2px] bg-[#7C8DFF]" />

            </div>

            <span className="uppercase tracking-[4px] font-semibold text-[#7C8DFF]">
              Front-End Website
            </span>

            <h3 className="mt-4 text-5xl font-black leading-tight text-[#111827]">
              Ward Coffee
            </h3>

            <p
              className="
              mt-8
              text-[18px]
              leading-[2.1]
              text-[#64748B]
              "
            >
              Ward Coffee is a premium café website designed with a modern,
              elegant user experience. The project combines responsive layouts,
              smooth animations and clean visual hierarchy to create an engaging
              digital identity while maintaining excellent performance across
              all devices.
            </p>

            <div className="grid grid-cols-3 gap-10 mt-12">

              <div>
                <p className="text-sm text-[#94A3B8]">Role</p>
                <h4 className="mt-2 text-xl font-bold text-[#111827]">
                  Front-End
                </h4>
              </div>

              <div>
                <p className="text-sm text-[#94A3B8]">Duration</p>
                <h4 className="mt-2 text-xl font-bold text-[#111827]">
                  3 Weeks
                </h4>
              </div>

              <div>
                <p className="text-sm text-[#94A3B8]">Year</p>
                <h4 className="mt-2 text-xl font-bold text-[#111827]">
                  2026
                </h4>
              </div>

            </div>

            <div className="flex flex-wrap gap-3 mt-10 mb-10">

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

            <div className="flex items-center gap-4 flex-wrap">

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
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
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
                  className="transition-transform duration-300 group-hover:rotate-12"
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