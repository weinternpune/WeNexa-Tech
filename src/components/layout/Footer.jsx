import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { Zap } from "lucide-react"; // keep this if it's working, else replace too

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
    <footer className="relative border-t border-electric-500/10 bg-navy-950 overflow-hidden">
      {/* Background orbs (FIXED positioning) */}
      <div className="orb w-96 h-96 bg-electric-500/5 -bottom-48 -left-48 absolute" />
      <div className="orb w-64 h-64 bg-accent-teal/5 -bottom-32 right-0 absolute" />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-electric-500 to-accent-teal flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>

              <div>
                <div className="text-white font-bold text-xl leading-tight">
                  Wenexa<span className="text-electric-300"> Tech</span>
                </div>
                <div className="text-[10px] text-electric-400/60 leading-none tracking-widest uppercase">
                  by WeIntern
                </div>
              </div>
            </a>

            <p className="text-navy-300 text-sm leading-relaxed max-w-xs mb-6">
              Building the digital future of Indian businesses. Enterprise-grade
              IT services and proprietary SaaS products that scale with you.
            </p>

            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@wenexa.tech"
                className="flex items-center gap-3 text-sm text-navy-300 hover:text-electric-300 transition-colors"
              >
                <HiOutlineMail className="w-4 h-4 text-electric-500" />
                hello@wenexa.tech
              </a>

              <a
                href="tel:+919000000000"
                className="flex items-center gap-3 text-sm text-navy-300 hover:text-electric-300 transition-colors"
              >
                <HiOutlinePhone className="w-4 h-4 text-electric-500" />
                +91 90000 00000
              </a>

              <div className="flex items-center gap-3 text-sm text-navy-300">
                <IoLocationOutline className="w-4 h-4 text-electric-500 shrink-0" />
                Pune, Maharashtra, India
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">
                {category}
              </h4>

              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-navy-300 hover:text-electric-300 text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
       <div className="
  rounded-2xl p-8 mb-12 
  flex flex-col md:flex-row items-center gap-6
  bg-[#071a2f] border border-white/10
">

  {/* LEFT CONTENT */}
  <div className="flex-1">
    <h3 className="text-white font-semibold text-lg mb-1">
      Stay in the loop
    </h3>
    <p className="text-navy-300 text-sm">
      Get tech insights, product updates and special offers.
    </p>
  </div>

  {/* FORM */}
  <form
    className="flex w-full md:w-auto items-center gap-3"
    onSubmit={(e) => e.preventDefault()}
  >

    {/* INPUT */}
    <input
      type="email"
      placeholder="Enter your email"
      className="
        px-5 py-3 rounded-xl
        bg-[#0b223a] border border-white/10
        text-sm text-white placeholder:text-navy-400
        outline-none transition-all duration-200

        focus:border-electric-400
        md:w-72
      "
    />

    {/* BUTTON */}
    <button
      type="submit"
      className="
        px-6 py-3 rounded-xl
        bg-gradient-to-r from-cyan-500 to-teal-500
        text-white text-sm font-medium
        whitespace-nowrap
        transition-all duration-300

        hover:-translate-y-0.5
        hover:shadow-[0_10px_25px_rgba(0,0,0,0.4)]
      "
    >
      Subscribe
    </button>

  </form>
</div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-electric-500/10">
          <p className="text-navy-400 text-sm">
            © 2026 Wenexa Tech by WeIntern. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            {[
              { icon: FaTwitter, href: "https://twitter.com/wenexatech" },
              {
                icon: FaLinkedin,
                href: "https://linkedin.com/company/wenexatech",
              },
              { icon: FaGithub, href: "https://github.com/wenexatech" },
              { icon: FaInstagram, href: "https://instagram.com/wenexatech" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass-light flex items-center justify-center text-navy-300 hover:text-white hover:bg-electric-500/20 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex gap-4">
            <a
              href="/privacy"
              className="text-navy-400 hover:text-navy-200 text-xs transition-colors"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-navy-400 hover:text-navy-200 text-xs transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
