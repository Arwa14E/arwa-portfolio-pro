import { motion } from "framer-motion";
import heroImage from "../assets/hero-3d.png";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[var(--bg)] flex items-center pt-28"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute top-[-120px] right-[-180px] w-[760px] h-[760px] rounded-full bg-[#DCE6FF] blur-[190px] opacity-60"></div>

        <div className="absolute bottom-[-180px] left-[-120px] w-[520px] h-[520px] rounded-full bg-[#EEF4FF] blur-[170px] opacity-60"></div>

      </div>

      <div className="container mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 items-center gap-20">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="max-w-[560px]"
          >

            <div className="flex items-center gap-3 mb-8">

              <div className="w-12 h-[2px] bg-[#7C8DFF]" />

              <span className="uppercase tracking-[5px] text-sm font-semibold text-[#7C8DFF]">
                Front-End Developer
              </span>

            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-[-2px]">

              <span className="text-[#7C8DFF]">
                Arwa
              </span>

              <br />

              <span className="text-[#111827]">
                Alneami
              </span>

            </h1>

            <p className="mt-8 text-lg leading-9 text-[#64748B] max-w-[520px]">

              I build modern websites and web applications with clean code,
              elegant interfaces and outstanding user experiences focused on
              performance and usability.

            </p>

            {/* Buttons */}

            <div className="mt-12 flex gap-5 flex-wrap">

              <a
  href="#projects"
  className="
    group
    inline-flex
    items-center
    justify-center
    gap-2
    h-11
    px-6
    pr-10
    rounded-full
    bg-[#6C7CFF]
    text-white
    font-semibold
    text-lg
    shadow-lg
    transition-all
    duration-300
    hover:bg-[#586AF8]
    hover:-translate-y-1
    hover:shadow-2xl
  "
>
  <span
    className="
      flex
      items-center
      justify-center
      w-11
      h-11
      rounded-full
      bg-white
      text-[#111827]
      text-xl
      shrink-0
      transition-transform
      duration-300
      group-hover:rotate-45
    "
  >
    ↗
  </span>

  <span className="leading-none">
    View Projects
  </span>
</a>


              <a
  href="#contact"
  className="
    inline-flex
    items-center
    justify-center
    h-10
    px-10
    rounded-full
    bg-white
    border
    border-[#CBD5E1]
    shadow-lg
    text-[#111827]
    text-lg
    font-semibold
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-[#7C8DFF]
    hover:shadow-xl
  "
>
  <span className="leading-none">
    Contact Me
  </span>
</a>

            </div>

          </motion.div>

                    {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, scale: .9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: .9 }}
            className="flex justify-center lg:justify-end"
          >

            <div
              className="
              relative
              rounded-[42px]
              p-8
              bg-white/45
              backdrop-blur-2xl
              border
              border-white/70
              shadow-[0_40px_80px_rgba(15,23,42,.08)]
            "
            >

              <div className="absolute inset-0 rounded-[42px] bg-gradient-to-br from-white/50 to-transparent pointer-events-none"></div>

              <div className="absolute -inset-8 bg-[#DCE6FF] blur-[90px] opacity-40 rounded-full"></div>

              <img
                src={heroImage}
                alt="Arwa Developer"
                className="
                relative
                z-10
                w-full
                max-w-[620px]
                object-contain
                animate-[float_6s_ease-in-out_infinite]
              "
              />

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;