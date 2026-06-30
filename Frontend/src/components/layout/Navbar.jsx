import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";

import Logo from "../../assets/images/Wenexa-Navbar-logo.png";

const navLinks = [
  { label: "Home", href: "/" },
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
  { label: "Our Work", href: "/portfolio" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const pendingHashRef = useRef(null);
  const touchTimeoutRef = useRef(null);

  const phoneNumber = "+917414974582";

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    setActiveDropdown(null);
    setMobileDropdown(null);
  }, [location.pathname]);

  // Scroll to hash section after navigation
  useEffect(() => {
    if (pendingHashRef.current) {
      const hash = pendingHashRef.current;
      pendingHashRef.current = null;
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const yOffset = -80;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname]);

  // Scroll effect for navbar background
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleNavClick = (href, closeMobile = false) => {
    const [path, hash] = href.split("#");

    const performNavigation = () => {
      if (hash) {
        if (window.location.pathname === path || path === "") {
          const el = document.getElementById(hash);
          if (el) {
            const yOffset = -80;
            const y =
              el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({
              top: y,
              behavior: "smooth",
            });
          }
        } else {
          pendingHashRef.current = hash;
          navigate(path);
        }
      } else {
        navigate(path);
        setTimeout(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }, 100);
      }
    };

    if (closeMobile) {
      setOpen(false);
      setMobileDropdown(null);
      setTimeout(() => {
        performNavigation();
      }, 250);
      return;
    }

    performNavigation();
  };

  const handleScheduleCall = () => {
    setOpen(false);

    setTimeout(() => {
      const phone = "917414974582";
      const message = "Hi Wenexa Tech! I'd like to discuss a project.";

      const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
        message,
      )}`;

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }, 100);
  };

  const handleStartProject = () => {
    setOpen(false);
    setTimeout(() => {
      navigate("/contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const toggleMobileDropdown = (label) => {
    setMobileDropdown(mobileDropdown === label ? null : label);
  };

  const handleDropdownToggle = (link) => {
    if (window.innerWidth <= 1024) {
      toggleMobileDropdown(link.label);
    } else {
      setActiveDropdown(activeDropdown === link.label ? null : link.label);
    }
  };
  const isActive = (href) => {
    const path = href.split("#")[0];
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(15,92,77,0.12)] border-b border-white/20"
            : "bg-white"
        }`}
        style={{ height: "72px" }}
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 xl:px-0 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center group shrink-0 h-full"
            onClick={() => setOpen(false)}
          >
            <img
              src={Logo}
              alt="WeNexa Logo"
              className="
      h-9
      sm:h-12
      md:h-12
      lg:h-12
      xl:h-14
      w-auto
      object-contain
      transition-all
      duration-300
      group-hover:scale-[1.02]
    "
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() =>
                  !link.dropup && link.dropdown && setActiveDropdown(link.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => {
                    if (!link.dropdown) {
                      handleNavClick(link.href);
                    } else {
                      setActiveDropdown(
                        activeDropdown === link.label ? null : link.label,
                      );
                    }
                  }}
                  className={`group relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl overflow-hidden text-[15px] font-semibold transition-all duration-300 cursor-pointer ${
                    isActive(link.href)
                      ? "text-[#0F5C4D]"
                      : "text-[#0B1F3A] hover:text-[#0F5C4D]"
                  }`}
                >
                  {/* Active Animated Border */}
                  {isActive(link.href) ? (
                    <>
                      {/* Rotating Gradient */}
                      <span className="absolute inset-0 rounded-xl overflow-hidden">
                        <span className="absolute inset-[-180%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_110deg,#22C55E_160deg,#34D399_180deg,#22C55E_200deg,transparent_250deg,transparent_360deg)]" />
                      </span>

                      {/* Inner Card */}
                      <span className="absolute inset-[1.5px] rounded-[10px] bg-gradient-to-r from-[#F7FFF9] via-white to-[#F7FFF9]" />

                      {/* Soft Glow */}
                      <span className="absolute inset-0 rounded-xl shadow-[0_0_25px_rgba(34,197,94,0.18)]" />
                    </>
                  ) : (
                    <span className="absolute inset-0 rounded-xl bg-[#F0FDF4] opacity-0 scale-95 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100" />
                  )}

                  {/* Label */}
                  <span className="relative z-20">{link.label}</span>

                  {/* Dropdown Icon */}
                  {link.dropdown && (
                    <ChevronDown
                      className={`relative z-20 w-4 h-4 transition-all duration-300 ${
                        isActive(link.href)
                          ? "rotate-180 text-[#0F5C4D]"
                          : "opacity-70 group-hover:rotate-180"
                      }`}
                    />
                  )}
                </button>

                {link.dropdown && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 pt-4 w-72">
                    <div className="bg-gradient-to-br from-[#10243F]/95 via-[#132C4D]/95 to-[#0B1F3A]/95 backdrop-blur-xl rounded-3xl border border-[#1E3A5F] shadow-[0_20px_60px_rgba(2,6,23,0.35)] p-3">
                      {link.dropdown.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => {
                            handleNavClick(item.href);
                            setActiveDropdown(null);
                          }}
                          className="group w-full flex items-center justify-between px-5 py-4 rounded-2xl text-left text-sm font-medium text-[#E2E8F0] hover:bg-[#1A365D] hover:text-[#86EFAC] transition-all duration-300 cursor-pointer"
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight className="w-4 h-4 opacity-0 translate-x-[-5px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden xl:flex items-center gap-4">
            <button
              onClick={handleScheduleCall}
              className="px-5 py-2.5 rounded-xl border border-[#CDEEE4] bg-[#F8FFFC] text-[#0F5C4D] font-semibold hover:bg-[#EEFDF6] transition-all duration-300 cursor-pointer active:scale-95"
            >
              Schedule a Call
            </button>
            <button
              onClick={handleStartProject}
              className="group relative overflow-hidden px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0F5C4D] to-[#0B1F3A] text-white font-semibold shadow-[0_10px_30px_rgba(15,92,77,0.20)] hover:scale-[1.02] hover:shadow-[0_14px_35px_rgba(15,92,77,0.28)] transition-all duration-300 cursor-pointer active:scale-95"
            >
              <span className="absolute inset-0 bg-white/10 translate-x-[-120%] skew-x-12 group-hover:translate-x-[220%] transition-transform duration-1000" />
              <span className="relative z-10">Start a Project</span>
            </button>
          </div>

          {/* Mobile Toggle Button - Fixed height to match logo */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden flex items-center justify-center p-0 rounded-xl text-[#0B1F3A] hover:bg-[#F1F5F9] active:bg-[#E2E8F0] transition-all z-[60] relative cursor-pointer"
            style={{ width: "36px", height: "36px" }}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {open && (
        <div
          className="xl:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        className={`xl:hidden fixed top-0 right-0 z-[70] h-full w-[80%] sm:w-[70%] md:w-[420px] bg-white shadow-2xl transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E2E8F0]">
          <span className="text-lg font-bold text-[#0B1F3A]">Menu</span>
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-xl text-[#0B1F3A] hover:bg-[#F1F5F9] active:bg-[#E2E8F0] transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="h-[calc(100%-72px)] overflow-y-auto overscroll-contain">
          <div className="px-6 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.label}>
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleMobileDropdown(link.label)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-[15px] font-semibold text-[#0B1F3A] hover:bg-[#F0FDF4] active:bg-[#E8F5E9] transition-all cursor-pointer"
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 opacity-70 transition-transform duration-200 ${
                          mobileDropdown === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        mobileDropdown === link.label
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 mt-1 flex flex-col gap-1">
                        {link.dropdown.map((item) => (
                          <button
                            key={item.label}
                            onClick={() => handleNavClick(item.href, true)}
                            className="text-left px-4 py-2.5 rounded-xl text-sm text-[#64748B] hover:bg-[#F0FDF4] active:bg-[#E8F5E9] transition-all cursor-pointer"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href, true)}
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-[15px] font-semibold text-[#0B1F3A] hover:bg-[#F0FDF4] active:bg-[#E8F5E9] transition-all cursor-pointer"
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}

            {/* Mobile CTA Buttons */}
            <div className="flex flex-col gap-3 mt-6 pt-6 border-t border-[#E2E8F0] pb-10">
              <button
                onClick={handleScheduleCall}
                className="w-full py-3.5 rounded-xl border border-[#B7E4D7] bg-[#F8FFFC] text-[#0F5C4D] font-semibold active:scale-[0.98] transition-transform cursor-pointer"
              >
                Schedule a Call
              </button>
              <button
                onClick={handleStartProject}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#0F5C4D] to-[#0B1F3A] text-white font-semibold active:scale-[0.98] transition-transform cursor-pointer"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
