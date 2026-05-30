import React from "react";

import {
  RiCodeSSlashLine,
  RiServerLine,
  RiPaletteLine,
  RiRobot2Line,
  RiSmartphoneLine,
  RiLineChartLine,
} from "react-icons/ri";

export default function HireTalentPage() {
  const categories = [
    {
      title: "Frontend Developers",
      desc: "Modern frontend engineers building immersive, scalable and lightning-fast interfaces.",
      skills: ["React", "Next.js", "TypeScript"],
    },
    {
      title: "Backend Engineers",
      desc: "Backend specialists focused on APIs, architecture, cloud systems and performance.",
      skills: ["Node.js", "Python", "AWS"],
    },
    {
      title: "UI/UX Designers",
      desc: "Creative designers crafting premium digital experiences with user-first thinking.",
      skills: ["Figma", "UX Research", "Design Systems"],
    },
    {
      title: "AI Engineers",
      desc: "AI experts building intelligent workflows, automation systems and LLM integrations.",
      skills: ["OpenAI", "LangChain", "Python"],
    },
    {
      title: "Mobile Developers",
      desc: "Cross-platform and native mobile engineers delivering smooth app experiences.",
      skills: ["Flutter", "React Native", "Swift"],
    },
    {
      title: "Marketing Experts",
      desc: "Growth-focused strategists helping brands scale with performance marketing.",
      skills: ["SEO", "Performance Ads", "Content"],
    },
  ];

  const talents = [
    {
      name: "Aarav Mehta",
      role: "Senior React Developer",
      exp: "5+ Years",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
      skills: ["React", "Next.js", "Node.js"],
    },
    {
      name: "Priya Sharma",
      role: "UI/UX Designer",
      exp: "4+ Years",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
      skills: ["Figma", "Branding", "UI Design"],
    },
    {
      name: "Rohan Patel",
      role: "AI Engineer",
      exp: "6+ Years",
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop",
      skills: ["Python", "LLMs", "Automation"],
    },
  ];

  const steps = [
    "Share Requirements",
    "Get Matched",
    "Interview Talent",
    "Start Working",
  ];

  return (
    <div
      style={{
        background: "#ffffff",
        color: "#0f172a",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        *{
          box-sizing:border-box;
        }

        body{
          margin:0;
          background:#fff;
        }

        .container{
          max-width:1280px;
          margin:auto;
          padding:0 24px;
        }

        .section{
          padding:110px 0;
        }

        .btn{
          position:relative;
          overflow:hidden;
          border:none;
          cursor:pointer;
          transition:.45s ease;
          text-decoration:none;
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:10px;
          font-weight:600;
          letter-spacing:-0.02em;
        }

        .btn:hover{
          transform:translateY(-3px);
        }

        .btn::before{
          content:"";
          position:absolute;
          inset:0;
          background:linear-gradient(
            120deg,
            transparent,
            rgba(255,255,255,.18),
            transparent
          );
          transform:translateX(-120%);
          transition:1s ease;
        }

        .btn:hover::before{
          transform:translateX(120%);
        }

        .card{
          position:relative;
          transition:.5s ease;
        }

        .card:hover{
          transform:translateY(-10px);
        }

        .premium-card{
          background:rgba(255,255,255,.9);
          border:1px solid rgba(226,232,240,.8);
          box-shadow:
            0 10px 30px rgba(15,23,42,.04),
            0 30px 80px rgba(15,23,42,.06);
          backdrop-filter:blur(20px);
        }

        .premium-card:hover{
          border-color:rgba(14,143,111,.22);
          box-shadow:
            0 20px 40px rgba(15,23,42,.08),
            0 40px 100px rgba(14,143,111,.08);
        }

        .floating{
          animation:floating 5s ease-in-out infinite;
        }

        @keyframes floating{
          0%{
            transform:translateY(0px);
          }
          50%{
            transform:translateY(-12px);
          }
          100%{
            transform:translateY(0px);
          }
        }

        .grid{
          display:grid;
          gap:24px;
        }

        .skill{
          padding:10px 16px;
          border-radius:999px;
          background:#f8fafc;
          border:1px solid #e2e8f0;
          font-size:12px;
          font-weight:600;
          transition:.35s ease;
        }

        .skill:hover{
          background:#0f172a;
          color:#fff;
          border-color:#0f172a;
        }

        .team-card:hover img{
          transform:scale(1.08);
        }

        .blur-glow{
          position:absolute;
          border-radius:999px;
          filter:blur(80px);
          opacity:.45;
          pointer-events:none;
        }

        @media(max-width:1024px){

          .hero-grid{
            grid-template-columns:1fr !important;
          }

          .stats-grid{
            grid-template-columns:repeat(2,1fr) !important;
          }

          .categories-grid{
            grid-template-columns:repeat(2,1fr) !important;
          }

          .talent-grid{
            grid-template-columns:1fr !important;
          }

        }

        @media(max-width:768px){

          .hero-title{
            font-size:56px !important;
          }

          .stats-grid,
          .categories-grid{
            grid-template-columns:1fr !important;
          }

          .section{
            padding:80px 0;
            
          }

        }
      `}</style>

      {/* HERO */}
      <section className="py-20 md:py-28" style={{marginTop:"10px"}}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className="
        grid
        lg:grid-cols-[1.1fr_1fr]
        gap-14 lg:gap-[70px]
        items-center
      "
    >
      {/* LEFT */}
      <div className="relative z-10">
        {/* Badge */}
        <div
          className="
            inline-flex items-center gap-3

            px-4 py-3
            sm:px-[18px]

            rounded-full

            bg-[#0E8F6F]/10
            border border-[#0E8F6F]/15

            text-[#0E8F6F]

            font-bold

            tracking-[0.12em]

            uppercase

            text-[10px] sm:text-[11px]

            mb-7
          "
        >
          <div
            className="
              w-2 h-2
              rounded-full
              bg-[#0E8F6F]

              shadow-[0_0_20px_rgba(14,143,111,.7)]
            "
          />

          Hire Elite Talent
        </div>

        {/* Heading */}
        <h1
          className="
            text-[44px]
            sm:text-[58px]
            md:text-[72px]
            lg:text-[88px]

            leading-[0.95]

            tracking-[-0.06em]

            font-extrabold

            text-[#0f172a]

            mb-7
          "
        >
          Build Your
          <br />

          <span className="text-[#0f172a]/40">
            Dream Team
          </span>
        </h1>

        {/* Paragraph */}
        <p
          className="
            text-[#0f172a]/60

            text-base sm:text-lg

            leading-[1.9]

            max-w-2xl

            mb-10
          "
        >
          Hire world-class developers, designers, AI engineers and
          digital specialists ready to scale your company faster with
          premium execution and modern expertise.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#"
            className="
              inline-flex items-center justify-center

              h-14 sm:h-[60px]

              px-7 sm:px-[34px]

              rounded-2xl

              bg-[#0f172a]

              text-white

              font-semibold

              whitespace-nowrap

              shadow-[0_20px_50px_rgba(15,23,42,.18)]

              transition-all duration-300

              hover:-translate-y-1
              hover:bg-[#111827]
            "
          >
            Hire Talent →
          </a>

          <a
            href="#"
            className="
              inline-flex items-center justify-center

              h-14 sm:h-[60px]

              px-7 sm:px-[34px]

              rounded-2xl

              bg-white

              border border-slate-200

              text-[#0f172a]

              font-semibold

              whitespace-nowrap

              transition-all duration-300

              hover:-translate-y-1
              hover:border-[#0E8F6F]/20
            "
          >
            Schedule Call
          </a>
        </div>
      </div>

      {/* RIGHT */}
      {/* RIGHT */}
<div
  className="
    relative

    min-h-[640px]

    flex flex-col
    md:flex-col
    lg:block

    gap-5
  "
>
  {/* Green Glow */}
  <div
    className="
      absolute

      top-[60px]
      right-[20px]

      w-[260px]
      h-[260px]

      rounded-full

      bg-[#0E8F6F]/20

      blur-[90px]

      opacity-70
    "
  />

  {[
    {
      top: "0px",
      left: "10px",
      role: "React Developer",
      exp: "5+ Years",
    },
    {
      top: "190px",
      right: "0px",
      role: "UI/UX Designer",
      exp: "4+ Years",
    },
    {
      bottom: "20px",
      left: "70px",
      role: "AI Engineer",
      exp: "6+ Years",
    },
  ].map((card, i) => (
    <div
      key={i}
      className={`
        group relative overflow-hidden

        lg:absolute

        w-full
        sm:w-[85%]
        md:w-[75%]
        lg:w-[300px]

        rounded-[28px] sm:rounded-[32px]

        p-5 sm:p-[26px]

        bg-white/90

        border border-slate-200/80

        backdrop-blur-xl

        shadow-[0_10px_30px_rgba(15,23,42,.04),0_30px_80px_rgba(15,23,42,.06)]

        transition-all duration-500

        hover:-translate-y-2

        hover:shadow-[0_20px_40px_rgba(15,23,42,.08),0_40px_100px_rgba(14,143,111,.10)]

        ${i === 0 ? "self-start" : ""}
        ${i === 1 ? "self-end" : ""}
        ${i === 2 ? "self-center" : ""}
      `}
      style={{
        top: window.innerWidth >= 1024 ? card.top : undefined,
        left: window.innerWidth >= 1024 ? card.left : undefined,
        right: window.innerWidth >= 1024 ? card.right : undefined,
        bottom: window.innerWidth >= 1024 ? card.bottom : undefined,
      }}
    >
      {/* Glow */}
      <div
        className="
          absolute inset-0 opacity-0

          group-hover:opacity-100

          transition-all duration-700

          pointer-events-none
        "
      >
        <div
          className="
            absolute -top-10 -right-10

            w-40 h-40

            rounded-full

            bg-[#0E8F6F]/10

            blur-3xl
          "
        />
      </div>

      {/* Profile */}
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-6">
          <img
            src={`https://picsum.photos/120/120?random=${i + 1}`}
            alt=""
            className="
              w-16 h-16

              rounded-2xl

              object-cover
            "
          />

          <div>
            <div
              className="
                font-bold

                text-[17px] sm:text-[18px]

                mb-1
              "
            >
              {card.role}
            </div>

            <div
              className="
                text-[#0f172a]/55

                text-sm
              "
            >
              {card.exp}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-2.5">
          {["React", "Next.js", "Node"].map((skill) => (
            <span
              key={skill}
              className="
                px-4 py-2

                rounded-full

                bg-slate-50

                border border-slate-200

                text-xs

                font-semibold

                text-[#0f172a]

                transition-all duration-300

                hover:bg-[#0f172a]
                hover:text-white
              "
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Accent */}
      <div
        className="
          absolute bottom-0 left-0

          w-full h-[2px]

          bg-[linear-gradient(to_right,#0E8F6F,transparent)]

          opacity-0

          transition-all duration-700

          group-hover:opacity-100
        "
      />
    </div>
  ))}
</div>
    </div>
  </div>
  
</section>



      {/* STATS */}
     <section className="pb-16 sm:pb-20 md:pb-28">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-4 sm:gap-6
      "
    >
      {[
        ["500+", "Talent Pool"],
        ["120+", "Successful Placements"],
        ["48hr", "Average Matching"],
        ["92%", "Client Retention"],
      ].map((item) => (
        <div
          key={item[1]}
          className="
            group relative overflow-hidden

            rounded-[24px] sm:rounded-[30px] lg:rounded-[34px]

            bg-[#0f172a]

            px-6 py-7
            sm:px-8 sm:py-8
            lg:px-10 lg:py-10

            shadow-[0_20px_50px_rgba(15,23,42,.10)]

            transition-all duration-500

            hover:-translate-y-1.5

            hover:shadow-[0_30px_80px_rgba(15,23,42,.16),0_40px_120px_rgba(14,143,111,.10)]
          "
        >
          {/* Green Glow */}
          <div
            className="
              absolute -top-10 -right-10

              w-[140px] h-[140px]
              sm:w-[180px] sm:h-[180px]

              rounded-full

              bg-[#0E8F6F]/20

              blur-3xl

              opacity-70

              transition-all duration-700

              group-hover:scale-125
            "
          />

          {/* Top Accent */}
          <div
            className="
              absolute top-0 left-0

              w-full h-[1px]

              bg-[linear-gradient(to_right,transparent,rgba(52,211,153,.45),transparent)]
            "
          />

          {/* Content */}
          <div className="relative z-10">
            {/* Label */}
            <div
              className="
                inline-flex items-center gap-2

                text-[10px] sm:text-[11px]

                uppercase

                tracking-[0.18em]

                text-[#34d399]

                font-bold

                mb-4
              "
            >
              <div
                className="
                  w-1.5 h-1.5
                  rounded-full
                  bg-[#34d399]
                "
              />

              Stats
            </div>

            {/* Number */}
            <div
              className="
                text-[38px]
                sm:text-[46px]
                lg:text-[56px]

                leading-none

                font-extrabold

                tracking-[-0.05em]

                text-white

                mb-3
              "
            >
              {item[0]}
            </div>

            {/* Text */}
            <div
              className="
                text-white/65

                text-sm sm:text-base

                leading-relaxed
              "
            >
              {item[1]}
            </div>
          </div>

          {/* Bottom Accent */}
          <div
            className="
              absolute bottom-0 left-0

              w-full h-[2px]

              bg-[linear-gradient(to_right,#34d399,transparent)]

              opacity-0

              transition-all duration-700

              group-hover:opacity-100
            "
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* CATEGORIES */}
     <section className="pb-20 md:pb-28">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
      <h2
        className="
          text-[38px]
          sm:text-[48px]
          md:text-[60px]
          leading-[1.05]
          tracking-[-0.05em]
          font-extrabold
          mb-6
        "
      >
        Hire By
        <br />
        <span className="text-[#0f172a]/40">
          Talent Category
        </span>
      </h2>

      <p
        className="
          text-[#0f172a]/60
          text-base sm:text-lg
          leading-[1.9]
        "
      >
        Build high-performing teams with specialized professionals
        tailored for your business growth.
      </p>
    </div>

    {/* Categories Grid */}
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
    >
      {categories.map((item, index) => (
        <div
          key={index}
          className="
            group relative overflow-hidden

            rounded-[28px] sm:rounded-[32px]
            p-7 sm:p-9

            bg-white/90
            border border-slate-200/80
            backdrop-blur-xl

            shadow-[0_10px_30px_rgba(15,23,42,.04),0_30px_80px_rgba(15,23,42,.06)]

            transition-all duration-500

            hover:-translate-y-2
            hover:border-[#0E8F6F]/20

            hover:shadow-[0_20px_40px_rgba(15,23,42,.08),0_40px_100px_rgba(14,143,111,.10)]
          "
        >
          {/* Green Glow */}
          <div
            className="
              absolute inset-0 opacity-0
              group-hover:opacity-100
              transition-all duration-700
              pointer-events-none
            "
          >
            <div
              className="
                absolute -top-10 -right-10
                w-44 h-44
                rounded-full
                bg-[#0E8F6F]/10
                blur-3xl
              "
            />
          </div>

          {/* Icon */}
          <div
            className="
              relative z-10

              w-[68px] h-[68px]
              rounded-[22px]

              bg-[linear-gradient(135deg,rgba(14,143,111,.10),rgba(15,23,42,.04))]

              mb-7

              flex items-center justify-center

              border border-[#0E8F6F]/10

              text-[#0E8F6F]

              transition-all duration-500
              group-hover:scale-110
            "
          >
            {index === 0 ? (
              <RiCodeSSlashLine size={30} />
            ) : index === 1 ? (
              <RiServerLine size={30} />
            ) : index === 2 ? (
              <RiPaletteLine size={30} />
            ) : index === 3 ? (
              <RiRobot2Line size={30} />
            ) : index === 4 ? (
              <RiSmartphoneLine size={30} />
            ) : (
              <RiLineChartLine size={30} />
            )}
          </div>

          {/* Title */}
          <h3
            className="
              relative z-10

              text-[24px] sm:text-[26px]
              font-bold
              mb-4
              text-[#0f172a]
            "
          >
            {item.title}
          </h3>

          {/* Description */}
          <p
            className="
              relative z-10

              text-[#0f172a]/60
              leading-[1.8]
              mb-7
            "
          >
            {item.desc}
          </p>

          {/* Skills */}
          <div className="relative z-10 flex flex-wrap gap-2.5">
            {item.skills.map((skill) => (
              <span
                key={skill}
                className="
                  px-4 py-2
                  rounded-full

                  bg-slate-50
                  border border-slate-200

                  text-xs
                  font-semibold
                  text-[#0f172a]

                  transition-all duration-300

                  hover:bg-[#0f172a]
                  hover:text-white
                  hover:-translate-y-[2px]
                "
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* TALENT */}
      <section className="pb-20 md:pb-28">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
      <h2
        className="
          text-[38px]
          sm:text-[48px]
          md:text-[60px]
          leading-[1.05]
          tracking-[-0.05em]
          font-extrabold
          mb-6
        "
      >
        Featured
        <br />
        <span className="text-[#0f172a]/40">
          Talent Profiles
        </span>
      </h2>
    </div>

    {/* Talent Grid */}
    <div
      className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
    >
      {talents.map((talent, index) => (
        <div
          key={index}
          className="
            group relative overflow-hidden
            rounded-[28px] sm:rounded-[34px]
            bg-white
            border border-slate-200
            shadow-[0_20px_60px_rgba(15,23,42,.06)]

            transition-all duration-500
            hover:-translate-y-2

            hover:shadow-[0_20px_40px_rgba(15,23,42,.08),0_40px_100px_rgba(14,143,111,.10)]
          "
        >
          {/* Image Wrapper */}
          <div className="relative h-[420px] sm:h-[460px] overflow-hidden">
            {/* Image */}
            <img
              src={talent.image}
              alt={talent.name}
              className="
                w-full h-full object-cover
                transition-transform duration-1000
                group-hover:scale-110
              "
            />

            {/* Overlay */}
            <div
              className="
                absolute inset-0
                bg-gradient-to-t
                from-[#0f172a]
                via-[#0f172a]/20
                to-transparent
              "
            />

            {/* Available Badge */}
            <div
              className="
                absolute top-5 left-5
                px-4 py-3
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border border-white/15
                text-white
                text-[10px] sm:text-[11px]
                tracking-[0.16em]
                font-bold
                uppercase
              "
            >
              Available
            </div>

            {/* Bottom Content */}
            <div
              className="
                absolute bottom-0 left-0 right-0
                p-6 sm:p-8
              "
            >
              {/* Green Line */}
              <div
                className="
                  w-[60px] h-[3px]
                  rounded-full
                  bg-[#0E8F6F]
                  mb-6
                "
              />

              {/* Name */}
              <h3
                className="
                  text-white
                  text-[28px] sm:text-[30px]
                  font-bold
                  mb-2
                "
              >
                {talent.name}
              </h3>

              {/* Role */}
              <p className="text-white/70 mb-6">
                {talent.role}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2.5 mb-7">
                {talent.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-white/10
                      border border-white/10
                      backdrop-blur-xl
                      text-white
                      text-xs
                      font-semibold
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between gap-4">
                <div className="text-white/70 text-sm sm:text-base">
                  {talent.exp} Experience
                </div>

                {/* Button */}
                <button
                  className="
                    group/btn
                    relative overflow-hidden

                    w-14 h-14
                    rounded-[20px]

                    bg-[#0E8F6F]
                    text-white
                    text-lg

                    flex items-center justify-center

                    transition-all duration-300
                    hover:scale-105
                    hover:bg-[#0c7a5f]

                    shadow-[0_15px_40px_rgba(14,143,111,.25)]
                  "
                >
                  <span
                    className="
                      absolute inset-0
                      bg-[linear-gradient(120deg,transparent,rgba(255,255,255,.18),transparent)]
                      -translate-x-[120%]
                      group-hover/btn:translate-x-[120%]
                      transition-transform duration-1000
                    "
                  />

                  <span className="relative z-10">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Green Glow */}
            <div
              className="
                absolute inset-0 opacity-0
                group-hover:opacity-100
                transition-all duration-700
                pointer-events-none
              "
            >
              <div
                className="
                  absolute -bottom-10 -right-10
                  w-52 h-52
                  rounded-full
                  bg-[#0E8F6F]/10
                  blur-3xl
                "
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* PROCESS */}
      <section className="pb-20 md:pb-28">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
      <h2
        className="
          text-[38px]
          sm:text-[48px]
          md:text-[60px]
          leading-[1.05]
          tracking-[-0.05em]
          font-extrabold
          mb-6
        "
      >
        How Hiring
        <br />
        <span className="text-[#0f172a]/40">
          Works
        </span>
      </h2>
    </div>

    {/* Steps Grid */}
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-6
      "
    >
      {steps.map((step, index) => (
        <div
          key={step}
          className="
            group relative overflow-hidden
            rounded-[28px] sm:rounded-[32px]
            px-7 py-9
            sm:px-8 sm:py-10
            bg-white/90
            border border-slate-200/80
            backdrop-blur-xl

            shadow-[0_10px_30px_rgba(15,23,42,.04),0_30px_80px_rgba(15,23,42,.06)]

            transition-all duration-500

            hover:-translate-y-2
            hover:border-[#0E8F6F]/20

            hover:shadow-[0_20px_40px_rgba(15,23,42,.08),0_40px_100px_rgba(14,143,111,.10)]
          "
        >
          {/* Green Glow */}
          <div
            className="
              absolute inset-0 opacity-0
              group-hover:opacity-100
              transition-all duration-700
              pointer-events-none
            "
          >
            <div
              className="
                absolute -top-10 -right-10
                w-40 h-40
                rounded-full
                bg-[#0E8F6F]/10
                blur-3xl
              "
            />
          </div>

          {/* Number */}
          <div
            className="
              relative z-10
              text-[13px]
              font-bold
              tracking-[0.14em]
              text-[#0E8F6F]
              mb-5
            "
          >
            0{index + 1}
          </div>

          {/* Title */}
          <h3
            className="
              relative z-10
              text-[26px]
              sm:text-[28px]
              leading-[1.3]
              font-bold
              text-[#0f172a]
            "
          >
            {step}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>
      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="
        relative overflow-hidden
        rounded-[30px] sm:rounded-[42px]
        bg-[#0f172a]
        px-6 py-12
        sm:px-10 sm:py-16
        lg:px-[60px] lg:py-[90px]
        shadow-[0_40px_120px_rgba(15,23,42,.14)]
      "
          >
            {/* Content */}
            <div
              className="
          relative z-10
          flex flex-col xl:flex-row
          xl:items-center
          justify-between
          gap-10
        "
            >
              {/* LEFT */}
              <div className="max-w-[700px]">
                <div
                  className="
              text-[#34d399]
              uppercase
              tracking-[0.22em]
              text-[11px] sm:text-[12px]
              font-bold
              mb-6
            "
                >
                  Start Hiring
                </div>

                <h2
                  className="
              text-white
              text-[38px]
              sm:text-[48px]
              md:text-[56px]
              lg:text-[64px]
              leading-[1]
              tracking-[-0.05em]
              font-extrabold
              mb-6
            "
                >
                  Build Your Dream Team
                  <br />
                  With Wenexa Talent
                </h2>

                <p
                  className="
              text-white/70
              text-base sm:text-lg
              leading-[1.9]
            "
                >
                  Scale your business faster with highly-vetted professionals
                  ready to contribute from day one.
                </p>
              </div>

              {/* RIGHT */}
              <div
                className="
            flex flex-row flex-wrap
            items-center
            gap-2
            w-auto xl:w-auto
          "
              >
                <a
                  href="#"
                  className="
              inline-flex items-center justify-center
              h-14 sm:h-[60px]
              px-7 sm:px-9
              rounded-2xl
              bg-[#0E8F6F]
              text-white
              font-semibold
              whitespace-nowrap
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#0c7a5f]
              shadow-[0_20px_50px_rgba(14,143,111,.25)]
            "
                >
                  Hire Talent →
                </a>

                <a
                  href="#"
                  className="
              inline-flex items-center justify-center
              h-14 sm:h-[60px]
              px-7 sm:px-9
              rounded-2xl
              bg-white/5
              border border-white/10
              text-white
              font-semibold
              whitespace-nowrap
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-white/10
            "
                >
                  Talk to Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
