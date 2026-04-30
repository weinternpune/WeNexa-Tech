import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { Zap } from "lucide-react";

const footerLinks = {
  Services: [
    { label: "Web Development", href: "/services#web" },
    { label: "Mobile Apps", href: "/services#mobile" },
    { label: "AI Automation", href: "/services#ai" },
    { label: "IT Support", href: "/services#support" },
    { label: "Custom Software", href: "/services#custom" },
  ],
  Products: [
    { label: "NexaBill", href: "/products#nexabill" },
    { label: "NexaHR", href: "/products#nexahr" },
    { label: "NexaCRM", href: "/products#nexacrm" },
    { label: "NexaInventory", href: "/products#nexainventory" },
    { label: "NexaAI Suite", href: "/products#nexaai" },
  ],
  Company: [
    { label: "About Us", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950 overflow-hidden">
      
      {/* Background */}
      <div className="absolute w-80 h-80 bg-cyan-500/5 blur-[120px] -bottom-40 -left-40" />
      <div className="absolute w-64 h-64 bg-blue-500/5 blur-[100px] bottom-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">

          {/* Brand */}
          <div className="sm:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-electric-500 to-accent-teal flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>

              <div>
                <div className="text-white font-semibold text-lg">
                  Wenexa <span className="text-cyan-400">Tech</span>
                </div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">
                  by WeIntern
                </div>
              </div>
            </a>

            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Building the digital future of Indian businesses with scalable SaaS and enterprise IT solutions.
            </p>

            <div className="flex flex-col gap-3">
              <a className="flex items-center gap-3 text-sm text-white/60 hover:text-cyan-400">
                <HiOutlineMail className="w-4 h-4" />
                hello@wenexa.tech
              </a>

              <a className="flex items-center gap-3 text-sm text-white/60 hover:text-cyan-400">
                <HiOutlinePhone className="w-4 h-4" />
                +91 90000 00000
              </a>

              <div className="flex items-center gap-3 text-sm text-white/60">
                <IoLocationOutline className="w-4 h-4" />
                Pune, India
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-medium text-sm mb-4">
                {category}
              </h4>

              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a className="text-white/60 hover:text-cyan-400 text-sm transition">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter (FIXED RESPONSIVE) */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row gap-6 items-start md:items-center">

          <div className="flex-1">
            <h3 className="text-white font-medium text-lg mb-1">
              Stay in the loop
            </h3>
            <p className="text-white/60 text-sm">
              Get updates, insights and offers.
            </p>
          </div>

          <form className="flex flex-col sm:flex-row w-full md:w-auto gap-3">
            
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-64 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            />

            <button
              className="px-6 py-3 rounded-lg  text-white text-sm font-medium hover:opacity-90 transition w-full sm:w-auto btn-primary"
            >
              Subscribe
            </button>

          </form>
        </div>

        {/* Bottom Row (FIXED STACKING) */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10 text-center lg:text-left">

          <p className="text-white/40 text-sm">
            © 2026 Wenexa Tech. All rights reserved.
          </p>

          <div className="flex gap-2">
            {[FaTwitter, FaLinkedin, FaGithub, FaInstagram].map((Icon, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition"
              >
                <Icon className="w-4 h-4" />
              </div>
            ))}
          </div>

          <div className="flex gap-4 text-xs">
            <a className="text-white/40 hover:text-white">Privacy</a>
            <a className="text-white/40 hover:text-white">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
}