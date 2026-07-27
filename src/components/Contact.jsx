import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


function Contact() {
  return (
    <section
      id="contact"
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
          top-20
          left-0
          w-[350px]
          h-[350px]
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
          w-[420px]
          h-[420px]
          rounded-full
          bg-[#EEF3FF]
          blur-[170px]
          opacity-60
        "
      />


      <div className="container relative z-10">


        {/* Heading */}

        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: .7,
          }}
          className="
            text-center
            mb-20
          "
        >

          <span
            className="
              uppercase
              tracking-[5px]
              text-[#7C8DFF]
              font-semibold
              text-sm
            "
          >
            Contact
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
            Let's Work Together
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
            Feel free to reach out if you're interested in collaborating,
            discussing a project, or simply saying hello.
          </p>

        </motion.div>

        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            items-start
          "
        >

          {/* Contact Info */}

          <motion.div
            initial={{
              opacity: 0,
              x: -40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .7,
            }}
            className="space-y-6"
          >

            {[
              {
                icon: <Mail size={24} />,
                title: "Email",
                value: "arwa.eisa.neami@gmail.com",
              },
              {
                icon: <Phone size={24} />,
                title: "Phone",
                value: "+966 537416246",
              },
              {
                icon: <MapPin size={24} />,
                title: "Location",
                value: "Riyadh, Saudi Arabia",
              },
            ].map((item) => (

              <motion.div
                key={item.title}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: .3,
                }}
                className="
                  flex
                  items-center
                  gap-5
                  bg-white
                  rounded-[30px]
                  p-7
                  border
                  border-[#EDF0F6]
                  shadow-[0_20px_60px_rgba(15,23,42,.05)]
                "
              >

                <div
                  className="
                    w-16
                    h-16
                    shrink-0
                    rounded-2xl
                    bg-[#EEF3FF]
                    flex
                    items-center
                    justify-center
                    text-[#7C8DFF]
                  "
                >
                  {item.icon}
                </div>


                <div>

                  <p
                    className="
                      text-sm
                      text-[#94A3B8]
                    "
                  >
                    {item.title}
                  </p>


                  <h3
                    className="
                      mt-1
                      font-bold
                      text-[#111827]
                    "
                  >
                    {item.value}
                  </h3>

                </div>


              </motion.div>

            ))}


            {/* Social Links */}

            <div
              className="
                flex
                gap-4
                pt-5
              "
            >

              <a
                href="https://github.com/Arwa14E"
                target="_blank"
                rel="noreferrer"
                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white
                  border
                  border-[#EDF0F6]
                  shadow-[0_15px_40px_rgba(15,23,42,.06)]
                  flex
                  items-center
                  justify-center
                  text-[#111827]
                  hover:-translate-y-1
                  hover:text-[#7C8DFF]
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
                  bg-white
                  border
                  border-[#EDF0F6]
                  shadow-[0_15px_40px_rgba(15,23,42,.06)]
                  flex
                  items-center
                  justify-center
                  text-[#111827]
                  hover:-translate-y-1
                  hover:text-[#7C8DFF]
                  transition-all
                "
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: .7,
            }}
            className="
              bg-white
              rounded-[35px]
              border
              border-[#EDF0F6]
              shadow-[0_25px_70px_rgba(15,23,42,.06)]
              p-8
              lg:p-10
            "
          >

            <div className="space-y-6">


              <input
                type="text"
                placeholder="Your Name"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#E5E7EB]
                  bg-[#FAFAF8]
                  px-5
                  py-4
                  text-[#111827]
                  outline-none
                  transition
                  focus:border-[#7C8DFF]
                  focus:bg-white
                "
              />


              <input
                type="email"
                placeholder="Your Email"
                className="
                  w-full
                  rounded-2xl
                  border
                  border-[#E5E7EB]
                  bg-[#FAFAF8]
                  px-5
                  py-4
                  text-[#111827]
                  outline-none
                  transition
                  focus:border-[#7C8DFF]
                  focus:bg-white
                "
              />


              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                  w-full
                  resize-none
                  rounded-2xl
                  border
                  border-[#E5E7EB]
                  bg-[#FAFAF8]
                  px-5
                  py-4
                  text-[#111827]
                  outline-none
                  transition
                  focus:border-[#7C8DFF]
                  focus:bg-white
                "
              />


              <button
                type="submit"
                className="
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-[#111827]
                  py-4
                  text-white
                  font-semibold
                  transition-all
                  duration-300
                  hover:bg-[#374151]
                  hover:-translate-y-1
                  shadow-lg
                "
              >

                Send Message

                <Send size={18} />

              </button>


            </div>


          </motion.form>

        </div>


      </div>

    </section>
  );
}

export default Contact;