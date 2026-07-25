import { useEffect, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-8 pt-6">

        <motion.nav
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className={`
            flex items-center justify-between
            rounded-full
            transition-all duration-500

            ${
              scrolled
                ? "px-7 py-3 bg-white/90 backdrop-blur-xl shadow-[0_12px_40px_rgba(15,23,42,.10)] border border-white/70"
                : "px-8 py-4 bg-white/80 backdrop-blur-lg shadow-[0_8px_30px_rgba(15,23,42,.06)] border border-white/60"
            }
          `}
        >

          {/* Logo */}

          <a href="#home">

            <h1 className="
              text-3xl
              font-black
              tracking-tight
              transition
              duration-300
              hover:scale-105
            ">

              <span className="text-[#111827]">
                Arwa
              </span>

              <span className="text-[#7C8DFF]">
                .
              </span>

            </h1>

          </a>

          {/* Desktop */}

          <ul className="hidden lg:flex items-center gap-10">

            {links.map(([name, link]) => (

              <li key={name}>

                <a
                  href={link}
                  className="
                    relative
                    text-slate-600
                    font-semibold
                    transition-all
                    duration-300
                    hover:text-[#7C8DFF]

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

              </li>

            ))}

          </ul>

          {/* Right */}

          <div className="flex items-center gap-4">

            <a
              href="#contact"
              className="
                group
                hidden
                md:flex
                items-center
                gap-2

                rounded-full

                bg-[#7C8DFF]

                px-7
                py-3

                text-white
                font-semibold

                shadow-lg

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-[#6677ff]
                hover:shadow-xl
              "
            >

              Let's Connect

              <ArrowRight
                size={18}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </a>

            <button
              className="
                lg:hidden
                w-11
                h-11
                rounded-full
                bg-white
                shadow-md
                flex
                items-center
                justify-center
              "
            >
              <Menu size={22} />
            </button>

          </div>

        </motion.nav>

      </div>

    </header>
  );
}

export default Navbar;