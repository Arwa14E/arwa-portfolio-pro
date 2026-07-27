import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    ["About", "#about"],
    ["Projects", "#projects"],
    ["Services", "#services"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-6 pt-6">
      <div className="mx-auto max-w-7xl">
        <motion.nav
          initial={{ y: -25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className={`
            flex items-center justify-between
            rounded-full
            transition-all duration-300
            ${
              scrolled
                ? "bg-white/85 backdrop-blur-xl border border-[#ECEFF3] shadow-[0_12px_40px_rgba(15,23,42,.06)]"
                : "bg-white/65 backdrop-blur-lg border border-white/70"
            }
            px-6 py-3
          `}
        >
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold tracking-tight text-[#111827]"
          >
            Arwa<span className="text-[#7C8DFF]">.</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                className="
                  relative
                  text-sm
                  font-medium
                  text-[#64748B]
                  transition
                  hover:text-[#111827]
                  after:absolute
                  after:-bottom-2
                  after:left-0
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
          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="
                rounded-full
                bg-[#111827]
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#374151]
                hover:-translate-y-0.5
              "
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="
              flex
              md:hidden
              items-center
              justify-center
              rounded-full
              p-2
              text-[#111827]
              transition
              hover:bg-[#F1F5F9]
            "
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </motion.nav>
      </div>
    </header>
  );
}
export default Navbar;