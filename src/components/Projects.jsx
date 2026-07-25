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
      className="py-32 px-8"
    >

      <div className="max-w-7xl mx-auto">


        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >

          <span
            className="
              uppercase
              tracking-[6px]
              text-[#7C8DFF]
              font-semibold
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
              leading-tight
              tracking-[-2px]
              text-[#111827]
            "
          >
            Selected Work
          </h2>


          <p
            className="
              mt-8
              text-lg
              leading-9
              text-[#64748B]
              max-w-xl
            "
          >
            A collection of projects that reflect my development process,
            attention to detail and modern UI design principles.
          </p>

        </motion.div>



        {/* Completed Projects */}

        <div className="grid md:grid-cols-2 gap-10">


          {projects.map((project, index) => (

            <motion.div

              key={project.id}

              initial={{
                opacity: 0,
                y: 50
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}

              viewport={{
                once: true
              }}

              className="
                group overflow-hidden
                rounded-[32px]
                bg-white
                border
                border-[#EDF0F6]
                shadow-[0_20px_60px_rgba(15,23,42,.05)]
                hover:-translate-y-3
                hover:shadow-[0_35px_80px_rgba(15,23,42,.12)]
                transition duration-500
                cursor-pointer
              "

            >


              {/* Image */}

              <div className="
                overflow-hidden
                h-[360px]
                bg-[#F7F5F2]
              ">

                <img

                  src={project.image}

                  alt={`${project.title} preview`}

                  className="
                    w-full
                    h-full
                    object-cover
                    transition duration-500
                    group-hover:scale-110
                  "

                />

              </div>




              {/* Content */}

              <div className="p-8">


                <div className="flex justify-between items-center mb-4">


                  <span className="
                    text-sm
                    text-[#556B5D]
                    font-medium
                  ">
                    Project {project.id}
                  </span>


                  <ArrowUpRight

                    className="
                      text-[#556B5D]
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                      transition
                    "

                  />


                </div>



                <h3 className="
                  text-2xl
                  font-bold
                  mb-3
                  text-[#111827]
                ">
                  {project.title}
                </h3>



                <p className="
                  text-gray-600
                  leading-7
                ">
                  {project.description}
                </p>



                <div className="
                  flex
                  flex-wrap
                  gap-2
                  mt-6
                ">

                  {project.tags.map((tag)=>(

                    <span

                      key={tag}

                      className="
                        px-4
                        py-2
                        rounded-full
                        bg-[#F7F5F2]
                        text-sm
                        text-[#374151]
                      "

                    >
                      {tag}
                    </span>

                  ))}

                </div>



                <button

                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    text-[#556B5D]
                    font-semibold
                    group-hover:gap-4
                    transition-all
                  "

                >

                  View Project

                  <ArrowUpRight size={18}/>

                </button>



              </div>


            </motion.div>

          ))}


        </div>





        {/* Upcoming Projects */}


        <motion.div

          initial={{
            opacity:0,
            y:40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          transition={{
            duration:0.6
          }}

          viewport={{
            once:true
          }}

          className="
            mt-16
            rounded-[32px]
            border
            border-dashed
            border-[#556B5D]
            bg-[#C9BEAE]/20
            p-12
            text-center
          "

        >


          <span className="text-5xl">
            🚀
          </span>



          <h3 className="
            text-3xl
            font-bold
            mt-5
            text-[#111827]
          ">
            Upcoming Projects
          </h3>



          <p className="
            text-gray-600
            mt-3
          ">
            مشاريع جديدة قادمة قريباً
          </p>



        </motion.div>



      </div>


    </section>
  );
}


export default Projects;