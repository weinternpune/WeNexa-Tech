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
      <section className="section">
        <div className="container">
          <div
            className="hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1.1fr 1fr",
              gap: "70px",
              alignItems: "center",
            }}
          >
            {/* LEFT */}
            <div style={{ position: "relative", zIndex: 2 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "12px 18px",
                  borderRadius: "999px",
                  background: "rgba(14,143,111,.08)",
                  border: "1px solid rgba(14,143,111,.15)",
                  color: "#0E8F6F",
                  fontWeight: 700,
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  fontSize: "11px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "999px",
                    background: "#0E8F6F",
                    boxShadow: "0 0 20px rgba(14,143,111,.7)",
                  }}
                />
                Hire Elite Talent
              </div>

              <h1
                className="hero-title"
                style={{
                  fontSize: "88px",
                  lineHeight: ".95",
                  fontWeight: 800,
                  letterSpacing: "-0.06em",
                  marginBottom: "30px",
                }}
              >
                Build Your
                <br />
                <span
                  style={{
                    color: "rgba(15,23,42,.42)",
                  }}
                >
                  Dream Team
                </span>
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.9",
                  color: "rgba(15,23,42,.62)",
                  maxWidth: "620px",
                  marginBottom: "42px",
                }}
              >
                Hire world-class developers, designers, AI engineers and
                digital specialists ready to scale your company faster with
                premium execution and modern expertise.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#"
                  className="btn"
                  style={{
                    height: "60px",
                    padding: "0 34px",
                    borderRadius: "20px",
                    background: "#0f172a",
                    color: "#fff",
                    boxShadow: "0 20px 50px rgba(15,23,42,.18)",
                  }}
                >
                  Hire Talent →
                </a>

                <a
                  href="#"
                  className="btn"
                  style={{
                    height: "60px",
                    padding: "0 34px",
                    borderRadius: "20px",
                    background: "#fff",
                    border: "1px solid #e2e8f0",
                    color: "#0f172a",
                  }}
                >
                  Schedule Call
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div
              style={{
                position: "relative",
                height: "620px",
              }}
            >
              <div
                className="blur-glow"
                style={{
                  width: "260px",
                  height: "260px",
                  background: "rgba(14,143,111,.18)",
                  top: "60px",
                  right: "20px",
                }}
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
                  className="card premium-card floating"
                  style={{
                    position: "absolute",
                    width: "300px",
                    borderRadius: "32px",
                    padding: "26px",
                    top: card.top,
                    left: card.left,
                    right: card.right,
                    bottom: card.bottom,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: "24px",
                    }}
                  >
                    <img
                      src={`https://picsum.photos/120/120?random=${i + 1}`}
                      alt=""
                      style={{
                        width: "64px",
                        height: "64px",
                        borderRadius: "20px",
                        objectFit: "cover",
                      }}
                    />

                    <div>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "18px",
                          marginBottom: "6px",
                        }}
                      >
                        {card.role}
                      </div>

                      <div
                        style={{
                          color: "rgba(15,23,42,.55)",
                          fontSize: "14px",
                        }}
                      >
                        {card.exp}
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                    }}
                  >
                    {["React", "Next.js", "Node"].map((skill) => (
                      <span key={skill} className="skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ paddingBottom: "110px" }}>
        <div className="container">
          <div
            className="stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: "24px",
            }}
          >
            {[
              ["500+", "Talent Pool"],
              ["120+", "Successful Placements"],
              ["48hr", "Average Matching"],
              ["92%", "Client Retention"],
            ].map((item) => (
              <div
                key={item[1]}
                className="card"
                style={{
                  background: "#0f172a",
                  color: "#fff",
                  borderRadius: "34px",
                  padding: "42px",
                  overflow: "hidden",
                  position: "relative",
                  boxShadow: "0 25px 60px rgba(15,23,42,.12)",
                }}
              >
                <div
                  className="blur-glow"
                  style={{
                    width: "180px",
                    height: "180px",
                    background: "rgba(14,143,111,.22)",
                    top: "-40px",
                    right: "-40px",
                  }}
                />

                <div
                  style={{
                    position: "relative",
                    zIndex: 2,
                  }}
                >
                  <div
                    style={{
                      fontSize: "56px",
                      fontWeight: 800,
                      marginBottom: "12px",
                    }}
                  >
                    {item[0]}
                  </div>

                  <div
                    style={{
                      color: "rgba(255,255,255,.65)",
                      fontSize: "16px",
                    }}
                  >
                    {item[1]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ paddingBottom: "110px" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto 80px",
            }}
          >
            <h2
              style={{
                fontSize: "60px",
                lineHeight: "1.05",
                letterSpacing: "-0.05em",
                marginBottom: "24px",
                fontWeight: 800,
              }}
            >
              Hire By
              <br />
              <span style={{ color: "rgba(15,23,42,.42)" }}>
                Talent Category
              </span>
            </h2>

            <p
              style={{
                color: "rgba(15,23,42,.6)",
                fontSize: "18px",
                lineHeight: "1.9",
              }}
            >
              Build high-performing teams with specialized professionals
              tailored for your business growth.
            </p>
          </div>

          <div
            className="categories-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "24px",
            }}
          >
            {categories.map((item, index) => (
              <div
                key={index}
                className="card premium-card"
                style={{
                  borderRadius: "32px",
                  padding: "38px",
                }}
              >
                <div
  style={{
    width: "68px",
    height: "68px",
    borderRadius: "22px",
    background:
      "linear-gradient(135deg, rgba(14,143,111,.10), rgba(15,23,42,.04))",
    marginBottom: "28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid rgba(14,143,111,.08)",
    color: "#0E8F6F",
  }}
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
                <h3
                  style={{
                    fontSize: "26px",
                    marginBottom: "16px",
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    color: "rgba(15,23,42,.6)",
                    lineHeight: "1.8",
                    marginBottom: "28px",
                  }}
                >
                  {item.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px",
                  }}
                >
                  {item.skills.map((skill) => (
                    <span key={skill} className="skill">
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
      <section style={{ paddingBottom: "110px" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto 80px",
            }}
          >
            <h2
              style={{
                fontSize: "60px",
                lineHeight: "1.05",
                letterSpacing: "-0.05em",
                marginBottom: "24px",
                fontWeight: 800,
              }}
            >
              Featured
              <br />
              <span style={{ color: "rgba(15,23,42,.42)" }}>
                Talent Profiles
              </span>
            </h2>
          </div>

          <div
            className="talent-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: "24px",
            }}
          >
            {talents.map((talent, index) => (
              <div
                key={index}
                className="card team-card"
                style={{
                  borderRadius: "34px",
                  overflow: "hidden",
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  boxShadow:
                    "0 20px 60px rgba(15,23,42,.06)",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    height: "460px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={talent.image}
                    alt={talent.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "1s ease",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(to top,#0f172a,rgba(15,23,42,.2),transparent)",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: "22px",
                      left: "22px",
                      padding: "12px 16px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,.08)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,.15)",
                      color: "#fff",
                      fontSize: "11px",
                      letterSpacing: ".16em",
                      fontWeight: 700,
                      textTransform: "uppercase",
                    }}
                  >
                    Available
                  </div>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      padding: "32px",
                    }}
                  >
                    <div
                      style={{
                        width: "60px",
                        height: "3px",
                        borderRadius: "999px",
                        background: "#0E8F6F",
                        marginBottom: "24px",
                      }}
                    />

                    <h3
                      style={{
                        color: "#fff",
                        fontSize: "30px",
                        marginBottom: "8px",
                      }}
                    >
                      {talent.name}
                    </h3>

                    <p
                      style={{
                        color: "rgba(255,255,255,.7)",
                        marginBottom: "26px",
                      }}
                    >
                      {talent.role}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        gap: "10px",
                        flexWrap: "wrap",
                        marginBottom: "28px",
                      }}
                    >
                      {talent.skills.map((skill) => (
                        <span
                          key={skill}
                          style={{
                            padding: "10px 16px",
                            borderRadius: "999px",
                            background: "rgba(255,255,255,.08)",
                            border:
                              "1px solid rgba(255,255,255,.12)",
                            color: "#fff",
                            fontSize: "12px",
                            fontWeight: 600,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        style={{
                          color: "rgba(255,255,255,.72)",
                        }}
                      >
                        {talent.exp} Experience
                      </div>

                      <button
                        className="btn"
                        style={{
                          width: "56px",
                          height: "56px",
                          borderRadius: "20px",
                          background: "#0E8F6F",
                          color: "#fff",
                          fontSize: "18px",
                        }}
                      >
                        →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ paddingBottom: "110px" }}>
        <div className="container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "760px",
              margin: "0 auto 80px",
            }}
          >
            <h2
              style={{
                fontSize: "60px",
                lineHeight: "1.05",
                letterSpacing: "-0.05em",
                marginBottom: "24px",
                fontWeight: 800,
              }}
            >
              How Hiring
              <br />
              <span style={{ color: "rgba(15,23,42,.42)" }}>
                Works
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(240px,1fr))",
              gap: "24px",
            }}
          >
            {steps.map((step, index) => (
              <div
                key={step}
                className="card premium-card"
                style={{
                  borderRadius: "32px",
                  padding: "42px 34px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0E8F6F",
                    marginBottom: "20px",
                    letterSpacing: ".14em",
                  }}
                >
                  0{index + 1}
                </div>

                <h3
                  style={{
                    fontSize: "28px",
                    lineHeight: "1.3",
                    fontWeight: 700,
                  }}
                >
                  {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div
            className="card"
            style={{
              background: "#0f172a",
              borderRadius: "42px",
              padding: "90px 60px",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 40px 120px rgba(15,23,42,.14)",
            }}
          >
            <div
              className="blur-glow"
              style={{
                width: "420px",
                height: "420px",
                background: "rgba(14,143,111,.24)",
                top: "-120px",
                right: "-120px",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                display: "flex",
                justifyContent: "space-between",
                gap: "40px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              <div style={{ maxWidth: "700px" }}>
                <div
                  style={{
                    color: "#34d399",
                    textTransform: "uppercase",
                    letterSpacing: ".22em",
                    fontSize: "12px",
                    fontWeight: 700,
                    marginBottom: "24px",
                  }}
                >
                  Start Hiring
                </div>

                <h2
                  style={{
                    color: "#fff",
                    fontSize: "64px",
                    lineHeight: "1",
                    marginBottom: "26px",
                    fontWeight: 800,
                    letterSpacing: "-0.05em",
                  }}
                >
                  Build Your Dream Team
                  <br />
                  With Wenexa Talent
                </h2>

                <p
                  style={{
                    color: "rgba(255,255,255,.68)",
                    fontSize: "18px",
                    lineHeight: "1.9",
                  }}
                >
                  Scale your business faster with highly-vetted
                  professionals ready to contribute from day one.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="#"
                  className="btn"
                  style={{
                    background: "#0E8F6F",
                    color: "#fff",
                    height: "60px",
                    padding: "0 36px",
                    borderRadius: "20px",
                    boxShadow:
                      "0 20px 50px rgba(14,143,111,.3)",
                  }}
                >
                  Hire Talent →
                </a>

                <a
                  href="#"
                  className="btn"
                  style={{
                    background: "rgba(255,255,255,.05)",
                    border:
                      "1px solid rgba(255,255,255,.12)",
                    color: "#fff",
                    height: "60px",
                    padding: "0 36px",
                    borderRadius: "20px",
                    backdropFilter: "blur(20px)",
                  }}
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