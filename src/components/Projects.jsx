import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import hero3d from "../assets/hero-3d.png";


const projects = [
  {
    id: "01",
    title: "Ward Cafe",
    description:
      "تصميم وتطوير موقع إلكتروني لمقهى حديث يعكس الهوية البصرية للمكان ويوفر تجربة مستخدم سلسة ومتجاوبة.",
    image: project1,
    tags: ["React", "UI/UX", "Responsive"],
    status: "Completed",
  },

  {
    id: "02",
    title: "Personal Portfolio",
    description:
      "موقع شخصي احترافي لعرض المهارات والخبرات والمشاريع التقنية بأسلوب منظم وعصري.",
    image: project2,
    tags: ["Frontend", "Design", "Development"],
    status: "Completed",
  },

  {
    id: "03",
    title: "Arwa Portfolio",
    description:
      "معرض أعمال شخصي حديث تم تطويره باستخدام React مع تجربة بصرية تفاعلية وحركات سلسة لإبراز المشاريع والمهارات التقنية.",
    image: hero3d,
    tags: ["React", "Framer Motion", "Modern UI"],
    status: "Completed",
  },
];


function Projects() {
  return (
    <section
      id="projects"
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
          top-0
          right-0
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#EEF3FF]
          blur-[170px]
          opacity-60
        "
      />


      <div className="container relative z-10">


        {/* Header */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .6,
          }}
          viewport={{
            once: true,
          }}
          className="
            mb-20
            text-center
          "
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
            Featured Projects
          </span>


          <h2
            className="
              mt-5
              text-5xl
              lg:text-6xl
              font-black
              tracking-[-2px]
              text-[#111827]
            "
          >
            Selected Work
          </h2>

          <p
            className="
              mt-7
              max-w-2xl
              mx-auto
              text-lg
              leading-9
              text-[#64748B]
            "
          >
            A collection of projects that reflect my development process,
            attention to detail and modern UI design principles.
          </p>

        </motion.div>



        {/* Completed Projects */}


        <div
          className="
            grid
            md:grid-cols-2
            gap-10
          "
        >


          {projects.map((project, index) => (

            <motion.div

              key={project.id}

              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: .5,
                delay: index * .1,
              }}

              viewport={{
                once: true,
              }}

              className="
                group
                overflow-hidden
                rounded-[32px]
                bg-white
                border
                border-[#EDF0F6]
                shadow-[0_20px_60px_rgba(15,23,42,.05)]
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-[0_35px_80px_rgba(15,23,42,.12)]
              "
            >


              {/* Image */}

              <div
                className="
                  relative
                  overflow-hidden
                  h-[360px]
                  bg-[#F1F5F9]
                "
              >

                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />


                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition
                  "
                />

              </div>



              {/* Content */}

              <div className="p-8">


                <div
                  className="
                    flex
                    items-center
                    justify-between
                    mb-5
                  "
                >

                  <span
                    className="
                      text-sm
                      font-semibold
                      text-[#7C8DFF]
                    "
                  >
                    Project {project.id}
                  </span>


                  <ArrowUpRight
                    size={22}
                    className="
                      text-[#7C8DFF]
                      transition-transform
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </div>


                <h3
                  className="
                    text-2xl
                    font-black
                    text-[#111827]
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-4
                    text-[#64748B]
                    leading-8
                  "
                >
                  {project.description}
                </p>



                {/* Tags */}

                <div
                  className="
                    flex
                    flex-wrap
                    gap-2
                    mt-6
                  "
                >

                  {project.tags.map((tag) => (

                    <span
                      key={tag}
                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-[#EEF3FF]
                        text-[#5A6BFF]
                        text-sm
                        font-medium
                      "
                    >
                      {tag}
                    </span>

                  ))}

                </div>



                {/* Button */}

                <button
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    bg-[#111827]
                    px-6
                    py-3
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:bg-[#374151]
                    hover:-translate-y-1
                  "
                >

                  View Project

                  <ArrowUpRight
                    size={18}
                  />

                </button>


              </div>


            </motion.div>

          ))}


        </div>



        {/* Upcoming Projects */}


        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: .6,
          }}

          viewport={{
            once: true,
          }}

          className="
            mt-16
            rounded-[32px]
            border
            border-dashed
            border-[#C7D2FE]
            bg-[#EEF3FF]/60
            p-10
            lg:p-12
            text-center
          "
        >

          <span
            className="
              text-5xl
            "
          >
            🚀
          </span>


          <h3
            className="
              mt-5
              text-3xl
              font-black
              text-[#111827]
            "
          >
            Upcoming Projects
          </h3>

          <p
            className="
              mt-3
              text-[#64748B]
            "
          >
            مشاريع جديدة قادمة قريباً
          </p>


        </motion.div>


      </div>


    </section>
  );
}


export default Projects;