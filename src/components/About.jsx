import { motion } from "framer-motion";
import {
  GraduationCap,
  Code2,
  Laptop,
  Lightbulb,
} from "lucide-react";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "Bachelor of Computer Science",
  },
  {
    icon: Code2,
    title: "Development",
    text: "React • Node.js • Tailwind CSS",
  },
  {
    icon: Laptop,
    title: "Projects",
    text: "Modern Responsive Web Applications",
  },
  {
    icon: Lightbulb,
    title: "Goal",
    text: "Creating Elegant Digital Experiences",
  },
];

const stats = [
  {
    number: "04+",
    label: "Projects",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "100%",
    label: "Responsive",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-36"
    >
      {/* Background */}

      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-[#EEF3FF] blur-[140px] opacity-70"></div>

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#DDE8FF] blur-[170px] opacity-60"></div>

      <div className="container relative z-10">

        <div className="grid lg:grid-cols-[1fr_1fr] gap-20 items-center">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >

            <span className="uppercase tracking-[6px] text-[#7C8DFF] font-semibold">
              About Me
            </span>

            <h2 className="mt-5 text-5xl lg:text-6xl font-black leading-tight tracking-[-2px] text-[#111827]">
              Building Modern
              <br />
              Digital Experiences
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#64748B] max-w-xl text-center">
             
              I'm Arwa Alneami, a Computer Science student and Front-End
              Developer passionate about designing elegant, responsive,
              and user-friendly web experiences using modern technologies,
              clean architecture and thoughtful UI.

            </p>


            {/* Stats */}

            <div className="grid grid-cols-3 gap-8 mt-28">

              {stats.map((item) => (

                <div
                  key={item.label}
                  className="
                  bg-white/70
                  backdrop-blur-xl
                  rounded-3xl
                  border
                  border-white
                  shadow-lg
                  p-6
                  text-center
                "
                >

                  <h3 className="text-5xl font-black text-[#111827]">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-[#64748B] text-sm">
                    {item.label}
                  </p>

                </div>

              ))}

            </div>

          </motion.div>

          {/* RIGHT */}

          <div className="grid sm:grid-cols-2 gap-8">

            {cards.map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: .6,
                    delay: index * .15,
                  }}
                  viewport={{ once: true }}
                  className="
                  group
                  bg-white
                  rounded-[32px]
                  p-9
                  min-h-[250px]
                  border
                  border-[#EDF0F6]
                  shadow-[0_20px_60px_rgba(15,23,42,.05)]
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:shadow-[0_35px_80px_rgba(15,23,42,.12)]
                "
                >

                  <div
                    className="
                    w-20
                    h-20
                    rounded-[24px]
                    bg-gradient-to-br
                    from-[#EEF3FF]
                    to-white
                    shadow-md
                    flex
                    items-center
                    justify-center
                    transition
                    duration-500
                    group-hover:rotate-12
                  "
                  >

                    <Icon
                      size={34}
                      className="text-[#7C8DFF]"
                    />

                  </div>

                  <h3 className="mt-8 text-[26px] font-black tracking-[-1px] text-[#111827]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-8 text-[#64748B]">
                    {item.text}
                  </p>

                </motion.div>

              );

            })}

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;