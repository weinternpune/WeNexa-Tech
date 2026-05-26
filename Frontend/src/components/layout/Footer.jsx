import React from "react";

import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import {
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer
      className="
        relative overflow-hidden
        bg-[#020817]
        border-t border-white/[0.04]
      "
    >
      {/* Background */}
      <div className="absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

        {/* Glow */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-[#0E8F6F]/8 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 lg:px-8">
        {/* Single Row */}
        <div
          className="
            flex flex-wrap
            items-start justify-between
            gap-x-10 gap-y-12
            py-14
          "
        >
          {/* Brand */}
          <div className="max-w-[280px]">
            {/* Logo */}
            <div className="mb-5">
              <h2
                className="
                  text-4xl
                  font-black
                  tracking-tight
                  leading-none
                "
              >
                <span className="text-[#0E8F6F]">
                  We
                </span>

                <span className="text-white">
                  Nexa
                </span>
              </h2>

              <p className="text-white/50 text-sm mt-1">
                Your Digital. Our Expertise.
              </p>
            </div>

            {/* Description */}
            <p
              className="
                text-white/40
                text-sm
                leading-relaxed
                mb-6
              "
            >
              WeNexa delivers scalable, high-quality digital
              solutions for modern businesses.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {[
                FaLinkedinIn,
                FaTwitter,
                FaInstagram,
                FaYoutube,
              ].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="
                    w-10 h-10
                    rounded-xl
                    border border-white/[0.06]
                    flex items-center justify-center
                    text-white/45
                    transition-all duration-300
                    hover:text-white
                    hover:border-[#0E8F6F]/30
                    hover:bg-[#0E8F6F]/10
                  "
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">
              Services
            </h4>

            <ul className="space-y-3">
              {[
                "Web Development",
                "Mobile Apps",
                "AI & Automation",
                "UI/UX Design",
                "Cloud & DevOps",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                      text-white/40
                      text-sm
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">
              Industries
            </h4>

            <ul className="space-y-3">
              {[
                "E-Commerce",
                "Fintech",
                "Education",
                "Healthcare",
                "Real Estate",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                      text-white/40
                      text-sm
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">
              Company
            </h4>

            <ul className="space-y-3">
              {[
                "About Us",
                "Careers",
                "Blog",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                      text-white/40
                      text-sm
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">
              Resources
            </h4>

            <ul className="space-y-3">
              {[
                "Case Studies",
                "Blogs",
                "FAQs",
                "Privacy Policy",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="
                      text-white/40
                      text-sm
                      hover:text-white
                      transition-all duration-300
                    "
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="max-w-[240px]">
            <h4 className="text-white font-semibold text-sm mb-5">
              Contact Us
            </h4>

            <div className="flex flex-col gap-5">
              <a
                href="mailto:hello@wenexa.in"
                className="
                  flex items-start gap-3
                  text-white/40
                  hover:text-white
                  transition-all duration-300
                "
              >
                <HiOutlineMail className="w-5 h-5 mt-0.5 shrink-0" />

                <span className="text-sm">
                  hello@wenexa.in
                </span>
              </a>

              <a
                href="tel:+917447405813"
                className="
                  flex items-start gap-3
                  text-white/40
                  hover:text-white
                  transition-all duration-300
                "
              >
                <HiOutlinePhone className="w-5 h-5 mt-0.5 shrink-0" />

                <span className="text-sm">
                  +91 74474 05813
                </span>
              </a>

              <div className="flex items-start gap-3 text-white/40">
                <IoLocationOutline className="w-5 h-5 mt-0.5 shrink-0" />

                <span className="text-sm leading-relaxed">
                  Pune, Maharashtra, India
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            border-t border-white/[0.05]
            py-5
            flex flex-col md:flex-row
            items-center justify-between
            gap-4
          "
        >
          <p className="text-white/30 text-sm">
            © 2026 WeNexa Technologies Pvt. Ltd.
          </p>

          <div className="flex items-center gap-5 text-sm text-white/30">
            <span>Part of We® Group</span>

            <span className="w-px h-4 bg-white/[0.08]" />

            <span>Made with ❤️ in India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}