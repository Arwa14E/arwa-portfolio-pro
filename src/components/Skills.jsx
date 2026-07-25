import { motion } from "framer-motion";
import {
  Globe,
  Database,
  PenTool,
  GitBranch,
  Cpu,
  LayoutDashboard,
} from "lucide-react";

const skills = [
  {
    icon: Globe,
    title: "Frontend",
    stack: "HTML • CSS • JavaScript • React",
    level: "95%",
  },
  {
    icon: PenTool,
    title: "UI / UX",
    stack: "Figma • Tailwind CSS • Responsive",
    level: "90%",
  },
  {
    icon: Database,
    title: "Backend",
    stack: "Node.js • SQL • REST APIs",
    level: "80%",
  },
  {
    icon: Cpu,
    title: "Programming",
    stack: "C • C++ • Java • Python",
    level: "88%",
  },
  {
    icon: GitBranch,
    title: "Tools",
    stack: "Git • GitHub • VS Code",
    level: "92%",
  },
  {
    icon: LayoutDashboard,
    title: "Other",
    stack: "Problem Solving • AI • Databases",
    level: "85%",
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-36 bg-white"
    >
      {/* Background */}

      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-[#EEF3FF] blur-[140px] opacity-70"></div>

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-[#DDE8FF] blur-[170px] opacity-60"></div>

      <div className="container relative z-10">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[6px] text-[#7C8DFF] font-semibold">
            Skills
          </span>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black tracking-[-2px] text-[#111827]">
            Technologies I Use
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-[#64748B] text-center">
            I build modern, responsive and scalable web applications using
            the latest technologies with a strong focus on performance,
            maintainability and exceptional user experience.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {skills.map((skill, index) => {

            const Icon = skill.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: .6,
                  delay: index * .12,
                }}
                viewport={{ once: true }}
                className="
                group
                bg-white/75
                backdrop-blur-xl
                rounded-[32px]
                p-9
                border
                border-white
                shadow-[0_20px_60px_rgba(15,23,42,.06)]
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_35px_90px_rgba(15,23,42,.12)]
              "
              >

                {/* Top */}

                <div className="flex items-center justify-between">

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

                  <span
                    className="
                    px-4
                    py-2
                    rounded-full
                    bg-[#EEF3FF]
                    text-[#7C8DFF]
                    text-sm
                    font-bold
                  "
                  >
                    {skill.level}
                  </span>

                </div>

                {/* Title */}

                <h3 className="mt-8 text-[26px] font-black tracking-[-1px] text-[#111827]">
                  {skill.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-[15px] leading-8 text-[#64748B]">
                  {skill.stack}
                </p>

                {/* Progress */}

                <div className="mt-8">

                  <div className="flex justify-between text-sm text-[#64748B] mb-3">

                    <span>Proficiency</span>

                    <span>{skill.level}</span>

                  </div>

                  <div
                    className="
                    h-3
                    rounded-full
                    bg-[#EEF3FF]
                    overflow-hidden
                  "
                  >

                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: skill.level }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.2,
                        ease: "easeOut",
                      }}
                      className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-[#7C8DFF]
                      to-[#5D73FF]
                    "
                    />

                  </div>

                </div>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;