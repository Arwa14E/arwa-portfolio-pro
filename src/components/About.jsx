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
          -top-32
          -left-32
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#DCE6FF]
          blur-[160px]
          opacity-50
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
          bg-[#EEF3FF]
          blur-[180px]
          opacity-60
        "
      />

      <div className="container relative z-10">

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT CONTENT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
            About Me
          </span>


          <h2
            className="
              mt-5
              text-5xl
              lg:text-6xl
              font-black
              leading-[1.1]
              tracking-[-2px]
              text-[#111827]
            "
          >
            Building Modern
            <br />
            Digital Experiences
          </h2>


          <p
            className="
              mt-8
              text-lg
              leading-9
              text-[#64748B]
              max-w-xl
              text-center
              lg:text-left
            "
          >
            I'm Arwa Alneami, a Computer Science student and Front-End
            Developer passionate about designing elegant, responsive,
            and user-friendly web experiences using modern technologies,
            clean architecture and thoughtful UI.
          </p>


          {/* Stats */}

          <div
            className="
              grid
              grid-cols-3
              gap-4
              sm:gap-8
              mt-20
            "
          >

            {stats.map((item) => (

              <motion.div
                key={item.label}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="
                  bg-white/80
                  backdrop-blur-xl
                  rounded-3xl
                  border
                  border-[#EDF0F6]
                  shadow-[0_15px_40px_rgba(15,23,42,.05)]
                  p-5
                  text-center
                "
              >

                <h3
                  className="
                    text-3xl
                    sm:text-5xl
                    font-black
                    text-[#111827]
                  "
                >
                  {item.number}
                </h3>


                <p
                  className="
                    mt-2
                    text-xs
                    sm:text-sm
                    text-[#64748B]
                  "
                >
                  {item.label}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

id="7q6j7v"
        {/* RIGHT CARDS */}

        <div className="grid sm:grid-cols-2 gap-8">

          {cards.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  bg-white
                  rounded-[32px]
                  p-8
                  min-h-[250px]
                  border
                  border-[#EDF0F6]
                  shadow-[0_20px_60px_rgba(15,23,42,.05)]
                  transition-all
                  duration-500
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
                    border
                    border-[#EDF0F6]
                    shadow-sm
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-500
                    group-hover:rotate-6
                  "
                >

                  <Icon
                    size={34}
                    strokeWidth={2}
                    className="text-[#7C8DFF]"
                  />

                </div>


                <h3
                  className="
                    mt-8
                    text-2xl
                    font-black
                    tracking-[-1px]
                    text-[#111827]
                  "
                >
                  {item.title}
                </h3>


                <p
                  className="
                    mt-4
                    text-[15px]
                    leading-8
                    text-[#64748B]
                  "
                >
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