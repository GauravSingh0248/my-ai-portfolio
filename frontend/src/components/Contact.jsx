import React from "react";
import contactImage from "../assets/Contact_Images/img2.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100 pt-22 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center"
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-white">
        {/* ================= LEFT SECTION ================= */}

        <div className="relative h-[450px] sm:h-[550px] lg:h-auto">
          <img
            src={contactImage}
            alt="Contact"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

          <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-white">
            <p
              className="uppercase tracking-[4px] text-orange-300 text-xs sm:text-sm lg:text-base font-semibold"
              style={{
                textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              Ready to Build Something?
            </p>

            <h2 className="font-anime text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mt-2 tracking-wider drop-shadow-xl">
              Contact
              <br />
              Gaurav
            </h2>

            <p className="mt-4 text-gray-200 max-w-sm text-sm sm:text-base leading-7">
              Whether it's a project, collaboration or just saying hi, I'd love
              to hear from you.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/gauravsingh0248"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/gauravsingh0248"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:officialgaurav0408@gmail.com"
                className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-orange-500 hover:scale-110 transition-all duration-300"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SECTION ================= */}

        <div className="bg-white flex items-center justify-center p-8 sm:p-10 lg:p-16">
          <div className="w-full max-w-xl">
            <span className="text-orange-500 font-semibold uppercase tracking-widest">
              Let's Connect
            </span>

            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mt-3">
              Have a Project in Mind?
            </h1>

            <p className="text-gray-500 mt-4">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>

            <form className="mt-10 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-500 transition"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>

                  <input
                    type="email"
                    placeholder="example@gmail.com"
                    className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-500 transition"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Project Discussion"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-500 transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Tell me about your project..."
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-orange-300 transition duration-300"
              >
                Send Message
                <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
