import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import foot_logo from "../../assets/images/Wenexa-footer-logo.png";

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTimes,
  FaBriefcase,
  FaPaperPlane,
} from "react-icons/fa";

import {
  HiOutlineMail,
  HiOutlinePhone,
  HiArrowRight,
} from "react-icons/hi";

import { IoLocationOutline } from "react-icons/io5";

const API_BASE = import.meta.env.VITE_API_URL || "/api";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [showCareerPopup, setShowCareerPopup] = useState(false);
  const pendingScrollRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to section after navigation completes
  useEffect(() => {
    if (pendingScrollRef.current) {
      const sectionId = pendingScrollRef.current;
      pendingScrollRef.current = null;
      requestAnimationFrame(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    }
  }, [location.pathname]);

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus({
        type: "error",
        message: "Please enter your email address",
      });

      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);

      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${API_BASE}/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: data.message,
        });

        setEmail("");

        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 5000);
      } else {
        setStatus({
          type: "error",
          message:
            data.message || "Subscription failed. Please try again.",
        });

        setTimeout(() => {
          setStatus({ type: "", message: "" });
        }, 5000);
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Subscription failed. Please try again.",
      });

      setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  const handleNavigation = (path, sectionId = null) => {
    if (sectionId) {
      if (window.location.pathname === path) {
        // Same page — scroll immediately
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        // Different page — store sectionId, navigate, then scroll via useEffect
        pendingScrollRef.current = sectionId;
        navigate(path);
      }
    } else {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCareersClick = () => {
    setShowCareerPopup(true);
  };

  return (
    <>
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative overflow-hidden border-t border-white/10 bg-[#020817]"
      >
        {/* Animated Background Glow */}
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-0 w-[420px] h-[420px] bg-[#0F5C4D]/10 blur-[120px] rounded-full pointer-events-none"
        />

        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#0B1F3A]/20 blur-[120px] rounded-full pointer-events-none"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 lg:pt-20 pb-6">
          {/* TOP SECTION */}
          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-16 xl:gap-20 pb-12 border-b border-white/10">
            {/* LEFT SIDE */}
            <motion.div
              className="min-w-0"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => handleNavigation("/")}
                className="cursor-pointer"
              >
                <motion.img
                  animate={{
                    y: [0, -3, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  src={foot_logo}
                  alt="WeNexa Logo"
                  className="h-14 sm:h-16 lg:h-20 w-auto object-contain mb-6"
                />
              </motion.button>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight tracking-[-0.03em] max-w-3xl mb-6"
              >
                <span className="bg-gradient-to-r from-white via-white to-[#0F5C4D] bg-clip-text text-transparent">
                  Transforming ambitious ideas into scalable digital products.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.7 }}
                viewport={{ once: true }}
                className="text-white/45 text-sm sm:text-base leading-relaxed max-w-2xl mb-10"
              >
                WeNexa is a premium digital agency specializing in turning
                complex problems into elegant, high-performance solutions.
              </motion.p>

              {/* CONTACT INFO */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 xl:gap-16 max-w-6xl"
              >
                {[
                  {
                    icon: <HiOutlineMail className="w-6 h-6 text-[#0F5C4D]" />,
                    title: "Email",
                    value: "partnership@wenexa.in",
                    href: "mailto:partnership@wenexa.in",
                  },
                  {
                    icon: <HiOutlinePhone className="w-6 h-6 text-[#0F5C4D]" />,
                    title: "Phone",
                    value: "+91 7414974582",
                    href: "tel:+917414974582",
                  },
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-5 rounded-2xl p-3 -m-3 transition-all duration-300"
                  >
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0F5C4D]/10 flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                      {item.icon}
                    </div>

                    <div>
                      <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-2">
                        {item.title}
                      </p>

                      <p className="text-white/85 text-sm group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}

                <div className="flex items-center gap-5 rounded-2xl p-3 -m-3">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0F5C4D]/10 flex items-center justify-center">
                    <IoLocationOutline className="w-6 h-6 text-[#0F5C4D]" />
                  </div>

                  <div>
                    <p className="text-white/30 text-xs uppercase tracking-[0.3em] mb-2">
                      Location
                    </p>

                    <p className="text-white/85 text-sm whitespace-nowrap">
                      Pune, Maharashtra, India
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="w-full lg:max-w-[460px] lg:ml-auto lg:translate-x-6 xl:translate-x-10">
              <motion.div
                className="rounded-3xl border border-white/10 bg-[#06101F] p-5 sm:p-6 lg:p-7 h-fit hover:-translate-y-1 transition-transform duration-300"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <p className="text-[#0F5C4D] text-xs uppercase tracking-[0.25em] mb-2">
                      Newsletter
                    </p>

                    <h3 className="text-white text-2xl sm:text-3xl font-semibold">
                      Stay Updated
                    </h3>
                  </div>

                  <motion.div
                    animate={{
                      rotate: [0, 6, -6, 0],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                    className="hidden sm:flex items-center justify-center w-14 h-14 rounded-2xl bg-[#0B1628]"
                  >
                    <HiOutlineMail className="w-6 h-6 text-[#0F5C4D]" />
                  </motion.div>
                </div>

                <p className="text-white/45 text-sm leading-relaxed mb-7">
                  Get startup insights, AI trends and product updates directly
                  in your inbox.
                </p>

                <form onSubmit={handleSubscribe} className="relative">
                  <div className="relative rounded-2xl border border-white/10 bg-[#020817]">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full bg-transparent py-4 pl-5 pr-20 text-white text-sm placeholder:text-white/25 focus:outline-none"
                      disabled={loading}
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0F5C4D] flex items-center justify-center text-white hover:bg-[#0d7461] active:scale-95 transition-all duration-300 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#0F5C4D]/60 focus:ring-offset-2 focus:ring-offset-[#020817]"
                    >
                      {loading ? (
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <HiArrowRight className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </form>

                <div className="flex items-center justify-between mt-4 gap-4">
                  {status.message ? (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`text-sm ${
                        status.type === "success"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {status.message}
                    </motion.div>
                  ) : (
                    <>
                      <p className="text-white/25 text-xs sm:text-sm">
                        No spam. Unsubscribe anytime.
                      </p>

                      <motion.div
                        animate={{
                          opacity: [0.4, 1, 0.4],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                        className="hidden sm:flex items-center gap-2 text-white/20 text-xs"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0F5C4D]" />
                        Secure
                      </motion.div>
                    </>
                  )}
                </div>

                {/* SOCIALS */}
                <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10 flex-wrap">
                  {[
                    {
                      Icon: FaLinkedinIn,
                      url: "https://www.linkedin.com/company/wenexatech/",
                      hoverColor: "hover:text-[#0A66C2]",
                    },
                    {
                      Icon: FaTwitter,
                      url: "https://twitter.com/wenexa.in",
                      hoverColor: "hover:text-[#1DA1F2]",
                    },
                    {
                      Icon: FaInstagram,
                      url: "https://www.instagram.com/wenexa.in",
                      hoverColor: "hover:text-[#E1306C]",
                    },
                    {
                      Icon: FaYoutube,
                      url: "https://www.youtube.com/wenexa.in",
                      hoverColor: "hover:text-[#FF0000]",
                    },
                  ].map(({ Icon, url, hoverColor }, i) => (
                    <a
                      key={i}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 rounded-xl border border-white/10 bg-[#0B1628] flex items-center justify-center text-white/35 ${hoverColor} hover:border-white/20 hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#0F5C4D]/50 transition-all duration-200`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* LINKS SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 gap-10 py-12 border-b border-white/10"
          >
            {/* SERVICES */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-[0.2em] mb-6">
                Services
              </h4>

              <ul className="space-y-4">
                {[
                  {
                    label: "Web Development",
                    href: "/services",
                    section: "web",
                  },
                  {
                    label: "Mobile Apps",
                    href: "/services",
                    section: "mobile",
                  },
                  {
                    label: "AI & Automation",
                    href: "/services",
                    section: "ai",
                  },
                  {
                    label: "IT Support",
                    href: "/services",
                    section: "support",
                  },
                  {
                    label: "Custom Software",
                    href: "/services",
                    section: "custom",
                  },
                ].map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() =>
                        handleNavigation(item.href, item.section)
                      }
                      className="text-white/40 hover:text-white hover:translate-x-1 focus:text-white focus:outline-none transition-all duration-200 text-sm"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* INDUSTRIES */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-[0.2em] mb-6">
                Industries
              </h4>

              <ul className="space-y-4">
                {[
                  "E-Commerce",
                  "Fintech",
                  "Education",
                  "Healthcare",
                  "Real Estate",
                ].map((item) => (
                  <li key={item}>
                    <button
                      className="text-white/40 hover:text-white hover:translate-x-1 focus:text-white focus:outline-none transition-all duration-200 text-sm"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-white font-semibold text-sm uppercase tracking-[0.2em] mb-6">
                Company
              </h4>

              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => handleNavigation("/about")}
                    className="text-white/40 hover:text-white hover:translate-x-1 focus:text-white focus:outline-none transition-all duration-200 text-sm"
                  >
                    About Us
                  </button>
                </li>

                <li>
                  <button
                    onClick={handleCareersClick}
                    className="text-white/40 hover:text-white hover:translate-x-1 focus:text-white focus:outline-none transition-all duration-200 text-sm"
                  >
                    Careers
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => handleNavigation("/blog")}
                    className="text-white/40 hover:text-white hover:translate-x-1 focus:text-white focus:outline-none transition-all duration-200 text-sm"
                  >
                    Blog
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => handleNavigation("/contact")}
                    className="text-white/40 hover:text-white hover:translate-x-1 focus:text-white focus:outline-none transition-all duration-200 text-sm"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* BOTTOM */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="pt-6 flex flex-col md:flex-row items-center justify-between gap-5"
          >
            <p className="text-white/30 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} WeNexa Technologies Pvt. Ltd.
              <br className="md:hidden" />
              All rights reserved.
            </p>

            <motion.div
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="flex items-center gap-2 text-white/20 text-xs sm:text-sm"
            >
              <span>Powered by</span>

              <span className="text-[#0F5C4D] font-medium">
                WeIntern
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.footer>

      {/* CAREERS POPUP */}
      {showCareerPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="relative bg-gradient-to-br from-[#0f172a] to-[#020817] rounded-3xl max-w-xl w-full shadow-2xl border border-white/10 overflow-hidden"
          >
            <button
              onClick={() => setShowCareerPopup(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>

            <div className="p-8">
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="w-16 h-16 rounded-2xl bg-[#0E8F6F]/10 flex items-center justify-center mb-6"
              >
                <FaBriefcase className="w-8 h-8 text-[#0E8F6F]" />
              </motion.div>

              <h3 className="text-3xl font-semibold text-white mb-3">
                Join Our Team
              </h3>

              <p className="text-white/55 leading-relaxed mb-8">
                We're building a world-class digital team focused on
                innovation, execution and scalable technology.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Full Stack Developer",
                  "UI/UX Designer",
                  "AI/ML Engineer",
                  "Project Manager",
                ].map((role) => (
                  <motion.div
                    whileHover={{
                      scale: 1.03,
                      borderColor: "rgba(255,255,255,0.2)",
                    }}
                    key={role}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white/75 text-sm"
                  >
                    {role}
                  </motion.div>
                ))}
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                onClick={() => {
                  window.location.href = "mailto:partnership@wenexa.in";
                  setShowCareerPopup(false);
                }}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-[#0E8F6F] to-[#0c7a5f] text-white font-medium flex items-center justify-center gap-3 hover:scale-[1.01] transition-all duration-300"
              >
                <FaPaperPlane className="w-4 h-4" />
                Apply Now
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
