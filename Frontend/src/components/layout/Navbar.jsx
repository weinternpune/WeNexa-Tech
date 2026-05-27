import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

import Logo from "../../assets/images/Wenexa-logo.jpeg";

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
    label: "Our Work",
    href: "/portfolio",
  },

  {
    label: "Hire Talent",
    href: "/hire-talent",
  },

  {
    label: "About Us",
    href: "/about",
  },

  {
    label: "Blog",
    href: "/blog",
    
  },
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

  const handleNavClick = (href, closeMobile = false) => {
    const [path, hash] = href.split("#");

    if (closeMobile) setOpen(false);

    navigate(path);

    setTimeout(() => {
      if (hash) {
        const el = document.getElementById(hash);

        if (el) {
          const yOffset = -90;

          const y =
            el.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;

          window.scrollTo({
            top: y,
            behavior: "smooth",
          });
        }
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 120);
  };

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50

        transition-all
        duration-300

        ${
          scrolled
            ? `
              bg-white/95
              backdrop-blur-md
              shadow-[0_8px_30px_rgba(15,92,77,0.08)]
              border-b
              border-[#E2E8F0]
              py-3
            `
            : `
              bg-white
              py-4
            `
        }
      `}
    >
      <div
        className="
          max-w-7xl
          mx-auto

          px-6
          xl:px-0

          flex
          items-center
          justify-between
        "
      >
        {/* Logo */}
        <Link
          to="/"
          className="
            flex
            items-center
            group
          "
        >
          <img
            src={Logo}
            alt="WeNexa Logo"
            className="
              h-14
              w-auto
              object-contain

              transition-all
              duration-300

              group-hover:scale-[1.02]
            "
          />
        </Link>

        {/* Desktop Nav */}
        <div
          className="
            hidden
            lg:flex

            items-center
            gap-1
          "
        >
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() =>
                link.dropdown &&
                setActiveDropdown(link.label)
              }
              onMouseLeave={() =>
                setActiveDropdown(null)
              }
            >
              <button
                onClick={() =>
                  handleNavClick(link.href)
                }
                className="
                  group
                  relative

                  flex
                  items-center
                  gap-1.5

                  px-5
                  py-3

                  rounded-xl

                  text-[15px]
                  font-semibold

                  text-[#0B1F3A]

                  hover:text-[#0F5C4D]

                  transition-all
                  duration-300
                "
              >
                {/* Hover Effect */}
                <span
                  className="
                    absolute
                    inset-0

                    rounded-xl

                    bg-[#F0FDF4]

                    opacity-0
                    scale-90

                    group-hover:opacity-100
                    group-hover:scale-100

                    transition-all
                    duration-300
                  "
                />

                <span className="relative z-10">
                  {link.label}
                </span>

                {link.dropdown && (
                  <ChevronDown
                    className="
                      relative
                      z-10

                      w-4
                      h-4

                      opacity-70

                      transition-all
                      duration-300

                      group-hover:rotate-180
                    "
                  />
                )}
              </button>

              {/* Premium Minimal Dropdown */}
              {link.dropdown &&
                activeDropdown ===
                  link.label && (
                  <div
                    className="
                      absolute
                      top-full
                      left-0
                      pt-4
                      w-72
                    "
                  >
                    <div
                      className="
                        bg-white/90
                        backdrop-blur-lg

                        rounded-3xl

                        border
                        border-[#E2E8F0]

                        shadow-[0_20px_60px_rgba(2,6,23,0.10)]

                        p-3
                      "
                    >
                      {link.dropdown.map(
                        (item) => (
                          <button
                            key={item.label}
                            onClick={() =>
                              handleNavClick(
                                item.href
                              )
                            }
                            className="
                              group

                              w-full

                              flex
                              items-center
                              justify-between

                              px-5
                              py-4

                              rounded-2xl

                              text-left
                              text-sm
                              font-medium

                              text-[#334155]

                              hover:bg-[#F0FDF4]
                              hover:text-[#0F5C4D]

                              transition-all
                              duration-300
                            "
                          >
                            <span>
                              {item.label}
                            </span>

                            <ArrowUpRight
                              className="
                                w-4
                                h-4

                                opacity-0
                                translate-x-[-5px]

                                group-hover:opacity-100
                                group-hover:translate-x-0

                                transition-all
                                duration-300
                              "
                            />
                          </button>
                        )
                      )}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="
            hidden
            lg:flex

            items-center
            gap-4
          "
        >
          {/* Secondary Button */}
          <Link to="/contact">
            <button
              className="
                px-6
                py-3

                rounded-xl

                border
                border-[#CDEEE4]

                bg-[#F8FFFC]

                text-[#0F5C4D]
                font-semibold

                hover:bg-[#EEFDF6]

                transition-all
                duration-300
              "
            >
              Schedule a Call
            </button>
          </Link>

          {/* Primary Button */}
          <Link to="/contact">
            <button
              className="
                group
                relative
                overflow-hidden

                px-7
                py-3

                rounded-xl

                bg-gradient-to-r
                from-[#0F5C4D]
                to-[#0B1F3A]

                text-white
                font-semibold

                shadow-[0_10px_30px_rgba(15,92,77,0.20)]

                hover:scale-[1.02]
                hover:shadow-[0_14px_35px_rgba(15,92,77,0.28)]

                transition-all
                duration-300
              "
            >
              {/* Shine Effect */}
              <span
                className="
                  absolute
                  inset-0

                  bg-white/10

                  translate-x-[-120%]
                  skew-x-12

                  group-hover:translate-x-[220%]

                  transition-transform
                  duration-1000
                "
              />

              <span className="relative z-10">
                Start a Project
              </span>
            </button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="
            lg:hidden

            p-2.5

            rounded-xl

            text-[#0B1F3A]

            hover:bg-[#F1F5F9]

            transition-all
          "
        >
          {open ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
            lg:hidden

            bg-white

            border-t
            border-[#E2E8F0]

            shadow-xl
          "
        >
          <div
            className="
              max-w-7xl
              mx-auto

              px-6
              py-6

              flex
              flex-col
              gap-2
            "
          >
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() =>
                    handleNavClick(
                      link.href,
                      true
                    )
                  }
                  className="
                    w-full

                    flex
                    items-center
                    justify-between

                    px-4
                    py-3

                    rounded-xl

                    text-left
                    text-[15px]
                    font-semibold

                    text-[#0B1F3A]

                    hover:bg-[#F0FDF4]
                    hover:text-[#0F5C4D]

                    transition-all
                  "
                >
                  {link.label}

                  {link.dropdown && (
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  )}
                </button>

                {link.dropdown && (
                  <div
                    className="
                      pl-4
                      mt-1

                      flex
                      flex-col
                      gap-1
                    "
                  >
                    {link.dropdown.map(
                      (item) => (
                        <button
                          key={item.label}
                          onClick={() =>
                            handleNavClick(
                              item.href,
                              true
                            )
                          }
                          className="
                            text-left

                            px-4
                            py-2.5

                            rounded-xl

                            text-sm
                            text-[#64748B]

                            hover:bg-[#F0FDF4]
                            hover:text-[#0F5C4D]

                            transition-all
                          "
                        >
                          {item.label}
                        </button>
                      )
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div
              className="
                flex
                flex-col
                gap-3

                mt-5
                pt-5

                border-t
                border-[#E2E8F0]
              "
            >
              <Link
                to="/contact"
                onClick={() =>
                  setOpen(false)
                }
              >
                <button
                  className="
                    w-full

                    py-3

                    rounded-xl

                    border
                    border-[#B7E4D7]

                    bg-[#F8FFFC]

                    text-[#0F5C4D]
                    font-semibold
                  "
                >
                  Schedule a Call
                </button>
              </Link>

              <Link
                to="/contact"
                onClick={() =>
                  setOpen(false)
                }
              >
                <button
                  className="
                    w-full

                    py-3

                    rounded-xl

                    bg-gradient-to-r
                    from-[#0F5C4D]
                    to-[#0B1F3A]

                    text-white
                    font-semibold
                  "
                >
                  Start a Project
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}