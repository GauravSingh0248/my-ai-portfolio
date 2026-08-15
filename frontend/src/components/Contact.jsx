import { useState } from "react";
import contactImage from "../assets/Contact_Images/img2.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSubmitting(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(
        "https://my-ai-portfolio-dd2a.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Something went wrong.");
      }

      setStatus({
        type: "success",
        message: data.message,
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          error.message || "Unable to send your message. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className={`scroll-mt-28 flex min-h-screen items-center justify-center px-4 py-28 pb-16 transition-colors duration-500 sm:px-6 lg:px-8 ${
        isDark
          ? "bg-[#0a0f1a]"
          : "bg-gradient-to-br from-sky-100 via-cyan-50 to-blue-100"
      }`}
    >
      <div
        className={`grid w-full max-w-7xl overflow-hidden rounded-3xl shadow-2xl transition-colors duration-500 lg:grid-cols-2 ${
          isDark ? "bg-[#111827] ring-1 ring-white/10" : "bg-white"
        }`}
      >
        <div className="relative h-[450px] sm:h-[550px] lg:h-auto">
          <img
            src={contactImage}
            alt="Contact"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <div className="absolute bottom-6 left-6 text-white sm:bottom-8 sm:left-8">
            <p
              className="text-xs font-semibold uppercase tracking-[4px] text-orange-300 sm:text-sm lg:text-base"
              style={{
                textShadow: "2px 2px 10px rgba(0,0,0,0.8)",
              }}
            >
              Ready to Build Something?
            </p>

            <h2 className="font-anime mt-2 text-4xl font-extrabold leading-tight tracking-wider drop-shadow-xl sm:text-5xl lg:text-6xl">
              Contact
              <br />
              Gaurav
            </h2>

            <p className="mt-4 max-w-sm text-sm leading-7 text-gray-200 sm:text-base">
              Whether it's a project, collaboration or just saying hi, I'd love
              to hear from you.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/gauravsingh0248"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-orange-500"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://linkedin.com/in/gauravsingh0248"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-orange-500"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="mailto:officialgaurav0408@gmail.com"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-orange-500"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>
        </div>

        <div
          className={`flex items-center justify-center p-8 transition-colors duration-500 sm:p-10 lg:p-16 ${
            isDark ? "bg-[#111827]" : "bg-white"
          }`}
        >
          <div className="w-full max-w-xl">
            <span className="font-semibold uppercase tracking-widest text-orange-500">
              Let's Connect
            </span>

            <h1
              className={`mt-3 text-3xl font-bold sm:text-4xl ${
                isDark ? "text-white" : "text-gray-800"
              }`}
            >
              Have a Project in Mind?
            </h1>

            <p className={`mt-4 ${isDark ? "text-white/55" : "text-gray-500"}`}>
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className={`text-sm font-medium ${
                      isDark ? "text-white/75" : "text-gray-700"
                    }`}
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className={`mt-2 w-full rounded-xl border px-4 py-3 transition outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 ${
                      isDark
                        ? "border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
                        : "border-gray-300"
                    }`}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`text-sm font-medium ${
                      isDark ? "text-white/75" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    required
                    className={`mt-2 w-full rounded-xl border px-4 py-3 transition outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 ${
                      isDark
                        ? "border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
                        : "border-gray-300"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className={`text-sm font-medium ${
                    isDark ? "text-white/75" : "text-gray-700"
                  }`}
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion"
                  required
                  className={`mt-2 w-full rounded-xl border px-4 py-3 transition outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 ${
                    isDark
                      ? "border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
                      : "border-gray-300"
                  }`}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className={`text-sm font-medium ${
                    isDark ? "text-white/75" : "text-gray-700"
                  }`}
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  required
                  className={`mt-2 w-full resize-none rounded-xl border px-4 py-3 transition outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-300 ${
                    isDark
                      ? "border-white/10 bg-white/[0.04] text-white placeholder:text-white/30"
                      : "border-gray-300"
                  }`}
                />
              </div>

              {status.message && (
                <div
                  className={`rounded-xl px-4 py-3 text-sm ${
                    status.type === "success"
                      ? isDark
                        ? "bg-green-500/10 text-green-400"
                        : "bg-green-50 text-green-600"
                      : isDark
                        ? "bg-red-500/10 text-red-400"
                        : "bg-red-50 text-red-600"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-orange-500 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-orange-600 hover:shadow-orange-300 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}

                {!isSubmitting && <FaPaperPlane />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
