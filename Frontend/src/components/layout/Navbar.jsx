import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Zap } from "lucide-react";
import Logo from "../../assets/images/Wenexa-logo.png";

const navLinks = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Web Development", href: "/services#web" },
      { label: "Mobile Apps", href: "/services#mobile" },
      { label: "AI Automation", href: "/services#ai" },
      { label: "IT Support", href: "/services#support" },
      { label: "Custom Software", href: "/services#custom" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    dropdown: [
      { label: "NexaBill — Billing System", href: "/products#nexabill" },
      { label: "NexaHR — HR Suite", href: "/products#nexahr" },
      { label: "NexaCRM — CRM", href: "/products#nexacrm" },
      { label: "NexaInventory", href: "/products" },
      { label: "NexaAI Suite", href: "/products" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // 🔥 SINGLE FILE NAV + SCROLL HANDLER
  const handleNavClick = (href, closeMobile = false) => {
    const [path, hash] = href.split("#");

    if (closeMobile) setOpen(false);

    // Navigate first
    navigate(path);

    // Then scroll after DOM render
    setTimeout(() => {
      if (hash) {
        const el = document.getElementById(hash);

        if (el) {
          const yOffset = -90; // adjust based on navbar height
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      } else {
        // If no hash → scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 120);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#020617]/60 py-0.5 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-1"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          {/* If you have PNG logo */}
          <img
            src={Logo} // 🔁 replace with your actual path
            alt="Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.dropdown && setActiveDropdown(link.label)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center gap-1 px-4 py-2 text-navy-200 hover:text-white text-sm font-medium transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                )}
              </Link>

              {link.dropdown && activeDropdown === link.label && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="backdrop-blur-xl bg-[#020617]/80 rounded-xl p-2 border border-white/10 shadow-2xl">
                    {link.dropdown.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavClick(item.href)}
                        className="w-full text-left px-4 py-2.5 text-sm text-navy-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/contact"
            className="btn-outline text-sm py-2.5 text-navy-200 rounded-xl px-5"
          >
            Get Quote
          </Link>

          <Link to="/contact">
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-blue-500 to-blue-600 text-white  text-base flex  ">
              Start Project
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden backdrop-blur-xl bg-[#020617]/80 border-t border-white/5 mt-1">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => handleNavClick(link.href, true)}
                  className="w-full text-left px-4 py-3 text-navy-200 hover:text-white hover:bg-white/5 rounded-lg font-medium transition-colors"
                >
                  {link.label}
                </button>

                {link.dropdown && (
                  <div className="pl-4 flex flex-col gap-0.5">
                    {link.dropdown.map((item) => (
                      <button
                        key={item.label}
                        onClick={() => handleNavClick(item.href, true)}
                        className="w-full text-left px-4 py-2 text-sm text-navy-300 hover:text-electric-300 hover:bg-white/5 rounded-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-white/5">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-outline text-center"
              >
                Get Quote
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary text-center justify-center"
              >
                Start Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
