import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

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

  const handleNavigation = (path, sectionId = null) => {
    if (sectionId) {
      if (window.location.pathname === path) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        navigate(path);
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
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
      <footer className="relative bg-[#020817] pt-10 lg:pt-12 pb-4 lg:pb-6 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#0F5C4D]/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#0B1F3A]/30 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-8 sm:gap-y-10 lg:gap-8 mb-8 lg:mb-10">
            
            <div className="col-span-2 md:col-span-4 lg:col-span-2 pr-0 lg:pr-8 xl:pr-16">
              <button onClick={() => handleNavigation("/")} className="cursor-pointer">
                <img
                  src={foot_logo}
                  alt="WeNexa Logo"
                  className="h-8 sm:h-10 md:h-12 lg:h-14 w-auto object-contain mb-4 sm:mb-6 -ml-1 md:-ml-2 transition-all duration-300"
                />
              </button>

              <p className="text-white/40 text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8 max-w-sm">
                WeNexa is a premium digital agency specializing in turning
                complex problems into elegant, high-performance solutions.
              </p>
              
              <div className="mb-6 sm:mb-8">
                <h4 className="text-white font-semibold text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4 opacity-90">
                  Subscribe to Newsletter
                </h4>
                <form onSubmit={handleSubscribe} className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white/80 text-xs sm:text-sm placeholder-white/30 focus:outline-none focus:border-[#0F5C4D] focus:ring-1 focus:ring-[#0F5C4D] transition-all"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#0F5C4D] hover:bg-[#0A473B] text-white p-1.5 sm:p-2 rounded-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </button>
                </form>
                {status.message && (
                  <div className={`mt-2 sm:mt-3 text-xs ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                    {status.message}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <a
                  href="mailto:partnership@wenexa.in"
                  className="flex items-center gap-2 sm:gap-3 text-white/50 hover:text-white transition-colors group w-max"
                >
                  <HiOutlineMail className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F5C4D]" />
                  <span className="text-xs sm:text-sm">partnership@wenexa.in</span>
                </a>

                <a
                  href="tel:+917414974582"
                  className="flex items-center gap-2 sm:gap-3 text-white/50 hover:text-white transition-colors group w-max"
                >
                  <HiOutlinePhone className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F5C4D]" />
                  <span className="text-xs sm:text-sm">+91 7414974582</span>
                </a>

                <div className="flex items-start gap-2 sm:gap-3 text-white/50 cursor-default">
                  <IoLocationOutline className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F5C4D] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm leading-relaxed">
                    Pune, Maharashtra, India
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-1">
              <h4 className="text-white font-semibold text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6 opacity-90">
                Services
              </h4>

              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {[
                  { label: "Web Development", href: "/services", section: "web" },
                  { label: "Mobile Apps", href: "/services", section: "mobile" },
                  { label: "AI & Automation", href: "/services", section: "ai" },
                  { label: "IT Support", href: "/services", section: "support" },
                  { label: "Custom Software", href: "/services", section: "custom" }
                ].map((item) => (
                  <li key={item.label}>
                    <button 
                      onClick={() => handleNavigation(item.href, item.section)}
                      className="text-white/40 text-xs sm:text-sm hover:text-white transition-colors duration-300 cursor-pointer text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-white font-semibold text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6 opacity-90">
                Industries
              </h4>

              <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                {[
                  { label: "E-Commerce", href: "/services", section: "web" },
                  { label: "Fintech", href: "/services", section: "mobile" },
                  { label: "Education", href: "/services", section: "ai" },
                  { label: "Healthcare", href: "/services", section: "custom" },
                  { label: "Real Estate", href: "/services", section: "web" },
                ].map((item) => (
                  <li key={item.label}>
                    <button 
                      onClick={() => handleNavigation(item.href, item.section)}
                      className="text-white/40 text-xs sm:text-sm hover:text-white transition-colors duration-300 cursor-pointer text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-2 lg:col-span-1 mt-2 md:mt-0">
              <h4 className="text-white font-semibold text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6 opacity-90">
                Company
              </h4>

              <ul className="space-y-2 sm:space-y-3 md:space-y-4 grid grid-cols-2 md:grid-cols-1 gap-x-3 sm:gap-x-4 md:gap-x-0">
                <li>
                  <button 
                    onClick={() => handleNavigation("/about")}
                    className="text-white/40 text-xs sm:text-sm hover:text-white transition-colors duration-300 cursor-pointer text-left"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={handleCareersClick}
                    className="text-white/40 text-xs sm:text-sm hover:text-white transition-colors duration-300 cursor-pointer text-left"
                  >
                    Careers
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation("/blog")}
                    className="text-white/40 text-xs sm:text-sm hover:text-white transition-colors duration-300 cursor-pointer text-left"
                  >
                    Blog
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation("/contact")}
                    className="text-white/40 text-xs sm:text-sm hover:text-white transition-colors duration-300 cursor-pointer text-left"
                  >
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-4 sm:pt-5 border-t border-white/[0.06] flex flex-col-reverse md:flex-row items-center justify-between gap-4 sm:gap-6 md:pr-24">
            <p className="text-white/30 text-xs sm:text-sm text-center md:text-left">
              © {new Date().getFullYear()} WeNexa Technologies Pvt. Ltd.
              <br className="md:hidden" /> All rights reserved.
            </p>

            <div className="flex items-center gap-1 sm:gap-2 relative z-50">
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
                  className={`inline-flex items-center justify-center p-2 sm:p-3 text-white/30 ${hoverColor} hover:scale-125 transition-all duration-300 rounded-full`}
                >
                  <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {showCareerPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative bg-gradient-to-br from-[#0f172a] to-[#020817] rounded-xl sm:rounded-2xl max-w-[90%] sm:max-w-lg md:max-w-xl w-full shadow-2xl border border-white/10 animate-in zoom-in duration-300 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setShowCareerPopup(false)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 text-white/50 hover:text-white transition-colors z-10 p-1 sm:p-0"
            >
              <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="p-4 sm:p-6 md:p-8">
              <div className="text-center mb-4 sm:mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#0E8F6F]/10 mb-3 sm:mb-4">
                  <FaBriefcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-[#0E8F6F]" />
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                  Join Our Team
                </h3>
                
                <p className="text-white/60 text-xs sm:text-sm">
                  We're always looking for talented individuals to join our team
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-5 sm:mb-6">
                <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 border border-white/10">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2">
                    <FaBriefcase className="w-4 h-4 sm:w-5 sm:h-5 text-[#0E8F6F]" />
                    <h4 className="text-white font-semibold text-sm sm:text-base">Open Positions</h4>
                  </div>
                  <div className="space-y-1.5 sm:space-y-2 text-white/60 text-xs sm:text-sm ml-6 sm:ml-8">
                    <p>• Full Stack Developer</p>
                    <p>• UI/UX Designer</p>
                    <p>• AI/ML Engineer</p>
                    <p>• Project Manager</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  window.location.href = "mailto:partnership@wenexa.in";
                  setShowCareerPopup(false);
                }}
                className="w-full bg-[#0E8F6F] hover:bg-[#0c7a5f] text-white font-semibold py-2.5 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <FaPaperPlane className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-base">Apply Now</span>
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes zoom-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-in {
          animation-duration: 200ms;
          animation-fill-mode: both;
        }
        
        .fade-in {
          animation-name: fade-in;
        }
        
        .zoom-in {
          animation-name: zoom-in;
        }
      `}</style>
    </>
  );
}
