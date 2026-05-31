import React, { useState } from "react";
import { Link } from "react-router-dom";
import foot_logo from "../../assets/images/Wenexa-footer-logo.png";
import {
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
  FaYoutube,
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

  const handleSubscribe = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setStatus({ type: "error", message: "Please enter your email address" });
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      return;
    }

    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(`${API_BASE}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus({ type: "success", message: data.message });
        setEmail("");
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      } else {
        setStatus({
          type: "error",
          message: data.message || "Subscription failed. Please try again.",
        });
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      }
    } catch (error) {
      setStatus({ type: "error", message: "Subscription failed. Please try again." });
      setTimeout(() => setStatus({ type: "", message: "" }), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="relative bg-[#020817] pt-10 lg:pt-12 pb-4 lg:pb-6 overflow-hidden">
      {/* Background Subtle Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0F5C4D]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0B1F3A]/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-0">
        
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 lg:gap-8 mb-8 lg:mb-10">
          
          {/* Brand Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 pr-0 lg:pr-16">
            <img
              src={foot_logo}
              alt="WeNexa Logo"
              className="h-10 sm:h-12 md:h-14 w-auto object-contain mb-6 -ml-1 md:-ml-2 transition-all duration-300"
            />

            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm lg:max-w-none">
              WeNexa is a premium digital agency specializing in turning
              complex problems into elegant, high-performance solutions.
            </p>
            
            {/* Newsletter Subscription */}
            <div className="mb-8">
              <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-4 opacity-90">
                Subscribe to Newsletter
              </h4>
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/80 text-sm placeholder-white/30 focus:outline-none focus:border-[#0F5C4D] focus:ring-1 focus:ring-[#0F5C4D] transition-all"
                  disabled={loading}
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0F5C4D] hover:bg-[#0A473B] text-white p-2 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <HiArrowRight className="w-5 h-5" />
                  )}
                </button>
              </form>
              {status.message && (
                <div className={`mt-3 text-xs ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                  {status.message}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:partnership@wenexa.in"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group w-max"
              >
                <HiOutlineMail className="w-5 h-5 text-[#0F5C4D]" />
                <span className="text-sm">partnership@wenexa.in</span>
              </a>

              <a
                href="tel:+917414974582"
                className="flex items-center gap-3 text-white/50 hover:text-white transition-colors group w-max"
              >
                <HiOutlinePhone className="w-5 h-5 text-[#0F5C4D]" />
                <span className="text-sm">+91 7414974582</span>
              </a>

              <div className="flex items-start gap-3 text-white/50 cursor-default">
                <IoLocationOutline className="w-5 h-5 text-[#0F5C4D] shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">
                  Pune, Maharashtra, India
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 opacity-90">
              Services
            </h4>

            <ul className="space-y-4">
                {[
                  { label: "Web Development", href: "/services" },
                  { label: "Mobile Apps", href: "/services" },
                  { label: "AI & Automation", href: "/services" },
                  { label: "UI/UX Design", href: "/services" },
                  { label: "Cloud & DevOps", href: "/services" }
                ].map((item) => (
                  <li key={item.label}>
                    <Link to={item.href} className="text-white/40 text-sm hover:text-white transition-colors duration-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Industries */}
          <div className="col-span-1">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 opacity-90">
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
                  <a
                    href="#"
                    className="text-white/40 text-sm hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1 mt-2 md:mt-0">
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6 opacity-90">
              Company
            </h4>

            <ul className="space-y-4 grid grid-cols-2 md:grid-cols-1 gap-x-4 md:gap-x-0">
              {["About Us", "Careers", "Blog", "Contact Us"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/40 text-sm hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="relative mb-8 lg:mb-10">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl px-5 sm:px-8 py-7 sm:py-8">
            
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0F5C4D]/10 via-transparent to-[#0B1F3A]/20 pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              
              {/* Left Content */}
              <div className="max-w-xl">
                <h3 className="text-white text-xl sm:text-2xl font-semibold mb-2">
                  Stay updated with WeNexa
                </h3>

                <p className="text-white/40 text-sm sm:text-base leading-relaxed">
                  Get product updates, tech insights, and launch announcements
                  directly in your inbox.
                </p>
              </div>

              {/* Right Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const email = e.target.email.value;

                  const emailRegex =
                    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                  if (!emailRegex.test(email)) {
                    alert("Please enter a valid email address.");
                    return;
                  }

                  alert("Subscribed successfully!");
                  e.target.reset();
                }}
                className="w-full lg:w-auto"
              >
                <div className="flex flex-col sm:flex-row items-stretch gap-3 w-full lg:w-auto">
                  
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full sm:w-[320px] h-12 rounded-2xl bg-[#07101F] border border-white/[0.08] text-white placeholder:text-white/30 px-5 outline-none focus:border-[#0F5C4D] focus:ring-2 focus:ring-[#0F5C4D]/30 transition-all duration-300"
                  />

                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl bg-[#0F5C4D] hover:bg-[#147A66] text-white text-sm font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Subscribe

                    <HiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-5 border-t border-white/[0.06] flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:pr-24">
          <p className="text-white/30 text-sm text-center md:text-left">
            © {new Date().getFullYear()} WeNexa Technologies Pvt. Ltd.
            <br className="md:hidden" /> All rights reserved.
          </p>

          <div className="flex items-center gap-1 md:gap-2 relative z-50">
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
                className={`inline-flex items-center justify-center p-3 text-white/30 ${hoverColor} hover:scale-125 transition-all duration-300 rounded-full`}
              >
                <Icon className="w-[18px] h-[18px] md:w-5 md:h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
