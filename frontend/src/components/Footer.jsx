import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100 pt-2 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Divider */}
        <div className="h-px bg-white/70 mb-6"></div>

        {/* Footer Card */}
        <div className="bg-white/50 backdrop-blur-xl rounded-3xl border border-white/70 shadow-lg px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Left */}

            <div className="text-center md:text-left">
              <h2 className="text-3xl font-black text-gray-800">
                Gaurav<span className="text-orange-500">Singh</span>
              </h2>

              <p className="text-gray-600 mt-2">
                Software Developer • AI Enthusiast
              </p>
            </div>

            {/* Right */}

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/gauravsingh0248"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/gauravsingh0248"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:officialgaurav0408@gmail.com"
                className="w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-white hover:scale-110 transition-all duration-300"
              >
                <FaEnvelope />
              </a>

              <a
                href="#home"
                className="w-12 h-12 rounded-full bg-orange-500 text-white shadow-lg flex items-center justify-center hover:bg-orange-600 hover:scale-110 transition-all duration-300"
              >
                <FaArrowUp />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}

        <p className="text-center text-gray-500 text-sm mt-6">
          © {new Date().getFullYear()} Gaurav Singh • All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
