import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="py-36 bg-[#F8F9FF]"
    >
      <div className="container">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <span className="uppercase tracking-[5px] text-[#7C8DFF] font-semibold">
            Contact
          </span>

          <h2 className="mt-5 text-5xl lg:text-6xl font-black text-[#111827]">
            Let's Work Together
          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-[#64748B]">
            Feel free to reach out if you're interested in collaborating,
            discussing a project, or simply saying hello.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
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

              <div
                key={item.title}
                className="
                  flex
                  items-center
                  gap-5
                  bg-white
                  rounded-[28px]
                  p-7
                  border
                  border-[#EDF0F6]
                  shadow-[0_20px_60px_rgba(15,23,42,.05)]
                  hover:-translate-y-1
                  transition-all
                "
              >

                <div className="w-16 h-16 rounded-2xl bg-[#EEF3FF] flex items-center justify-center text-[#7C8DFF]">
                  {item.icon}
                </div>

                <div>

                  <p className="text-sm text-[#94A3B8]">
                    {item.title}
                  </p>

                  <h3 className="font-bold text-[#111827] mt-1">
                    {item.value}
                  </h3>

                </div>

              </div>

            ))}

            <div className="flex gap-4 pt-6">

              <a
                href="https://github.com/Arwa14E"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-white border border-[#EDF0F6] shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="w-14 h-14 rounded-2xl bg-white border border-[#EDF0F6] shadow-lg flex items-center justify-center hover:-translate-y-1 transition"
              >
                <FaLinkedin size={22} />
              </a>

            </div>

          </motion.div>

          {/* Right */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
              bg-white
              rounded-[35px]
              border
              border-[#EDF0F6]
              shadow-[0_25px_70px_rgba(15,23,42,.06)]
              p-10
            "
          >

            <div className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-2xl border border-[#E5E7EB] p-5 outline-none focus:border-[#7C8DFF]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-2xl border border-[#E5E7EB] p-5 outline-none focus:border-[#7C8DFF]"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full resize-none rounded-2xl border border-[#E5E7EB] p-5 outline-none focus:border-[#7C8DFF]"
              />

              <button
                className="
                  w-full
                  flex
                  justify-center
                  items-center
                  gap-3
                  rounded-2xl
                  bg-[#111827]
                  py-5
                  text-white
                  font-semibold
                  hover:bg-black
                  hover:-translate-y-1
                  transition-all
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