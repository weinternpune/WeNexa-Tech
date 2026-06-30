import {
  Users,
  BriefcaseBusiness,
  TrendingUp,
  HandCoins,
} from "lucide-react";

export default function ImpactSection() {
  return (
    <section className="py-4 lg:py-6 xl:py-10 bg-white px-4 sm:px-6 lg:px-6 xl:px-8">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-4px); }
            100% { transform: translateY(0px); }
          }
        
          @media (max-width: 767px) {
            .we-believe-badge {
              margin-bottom: 0.5rem !important;
            }
          }
            
          @media (min-width: 768px) and (max-width: 1024px) {
            .we-believe-badge {
              margin-bottom: 0 !important;
            }
          }
        `}
      </style>

      <div
        className="
          relative
          max-w-7xl mx-auto
          overflow-hidden
          rounded-[30px]
          border border-[#dfe7e3]
          bg-white
          shadow-[0_20px_60px_rgba(15,23,42,0.06)]
        "
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.03),transparent_38%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />
          <div className="absolute top-[-100px] right-[-80px] w-[260px] h-[260px] rounded-full bg-[#0E8F6F]/10 blur-3xl" />
        </div>

        {/* Main Content */}
        <div
          className="
            relative z-10
            px-4 lg:px-6 xl:px-7
            py-4 lg:py-6 xl:py-8
          "
        >
          <div className="max-w-4xl mx-auto text-left mb-6 md:mb-8">
            <div
              className="
                we-believe-badge
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-[#0E8F6F]/6
                border border-[#0E8F6F]/10
                mb-4 md:mb-5
              "
            >
              <div className="w-2 h-2 rounded-full bg-[#0E8F6F]" />
              <span className="text-[8px] sm:text-[11px] tracking-[0.22em] uppercase font-semibold text-[#0E8F6F]">
                We Believe In
              </span>
            </div>

            <h2 className="text-[17px] sm:text-[28px] md:text-[32px] lg:text-[38px] xl:text-[45px] leading-[1.1] sm:leading-[1.05] md:leading-[1.1] lg:leading-[0.95] font-bold text-[#0f172a] mb-3 md:mb-4 tracking-tight w-full">
              Impact That Creates{" "}
              <span className="text-[#0E8F6F] whitespace-nowrap">
                Independence
              </span>
            </h2>

            <p className="text-[#0f172a]/62 text-[14px] sm:text-[15px] leading-relaxed max-w-2xl text-left">
              Our mission is not just to deliver projects — it's to build
              financially independent students through real work and
              opportunities.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="flex items-center justify-center">
                <div className="relative w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] md:w-[170px] md:h-[170px] lg:w-[190px] lg:h-[190px]">
                  <div className="absolute inset-0 rounded-full bg-[#0E8F6F]/10 blur-2xl scale-110" />
                  <div className="absolute inset-0 rounded-full bg-[conic-gradient(#0E8F6F_0deg,#22c55e_270deg,#e9ecef_270deg)] shadow-[0_20px_40px_rgba(14,143,111,0.18)]" />
                  <div className="absolute inset-[12px] sm:inset-[14px] md:inset-[16px] rounded-full bg-white flex flex-col items-center justify-center text-center shadow-inner border border-[#eef2f1]">
                    <div className="text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] leading-none font-bold text-[#0E8F6F]">
                      75
                      <span className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[26px]">%</span>
                    </div>
                    <p className="mt-1 sm:mt-2 text-[#0f172a] text-[9px] sm:text-[10px] md:text-[11px] lg:text-[12px] leading-snug font-semibold uppercase tracking-wide px-1 sm:px-2">
                      OF PROJECT VALUE
                      <br />
                      GOES TO STUDENTS
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-[100px] sm:h-[148px]">
                <div
                  className="
                    group
                    relative
                    p-3 sm:p-5
                    rounded-2xl
                    bg-white/80
                    backdrop-blur-xl
                    border border-[#e7eaee]
                    shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                    hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]
                    hover:border-[#0E8F6F]/15
                    transition-all duration-500
                    hover:-translate-y-1
                    overflow-hidden
                    flex flex-col
                    h-full
                    justify-center
                    items-start
                  "
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.05),transparent_45%)]" />
                  <div className="relative z-10 flex flex-col h-full justify-center items-start w-full">
                    <div className="flex items-center gap-2 sm:gap-4 mb-1 sm:mb-3">
                      <div
                        className="
                          w-8 h-8 sm:w-12 sm:h-12
                          rounded-2xl
                          bg-[#0E8F6F]/10
                          border border-[#0E8F6F]/10
                          flex items-center justify-center
                          transition-all duration-500
                          group-hover:bg-[#0E8F6F]
                          group-hover:scale-105
                          group-hover:rotate-3
                          flex-shrink-0
                        "
                      >
                        <Users className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0E8F6F] group-hover:text-white transition-all duration-500" />
                      </div>
                      <h3 className="text-[#0f172a] font-bold text-[13px] sm:text-[17px] leading-snug">
                        Empowering Students
                      </h3>
                    </div>
                    <p className="text-[#0f172a]/58 text-[11px] sm:text-[13px] leading-relaxed text-left">
                      Students earn real income by working on live projects.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                {
                  icon: BriefcaseBusiness,
                  title: "Real Work. Real Skills.",
                  desc: "Hands-on experience that makes students industry-ready.",
                },
                {
                  icon: TrendingUp,
                  title: "Stronger Future",
                  desc: "Every project creates independence and confidence.",
                },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={i}
                    className="
                      group
                      relative
                      p-3 sm:p-5
                      rounded-2xl
                      bg-white/80
                      backdrop-blur-xl
                      border border-[#e7eaee]
                      shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                      hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]
                      hover:border-[#0E8F6F]/15
                      transition-all duration-500
                      hover:-translate-y-1
                      overflow-hidden
                      flex flex-col
                      h-[100px] sm:h-[148px]
                      justify-center
                      items-start
                    "
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.05),transparent_45%)]" />
                    <div className="relative z-10 flex flex-col h-full justify-center items-start w-full">
                      <div className="flex items-center gap-2 sm:gap-4 mb-1 sm:mb-3">
                        <div
                          className="
                            w-8 h-8 sm:w-12 sm:h-12
                            rounded-2xl
                            bg-[#0E8F6F]/10
                            border border-[#0E8F6F]/10
                            flex items-center justify-center
                            transition-all duration-500
                            group-hover:bg-[#0E8F6F]
                            group-hover:scale-105
                            group-hover:rotate-3
                            flex-shrink-0
                          "
                        >
                          <Icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-[#0E8F6F] group-hover:text-white transition-all duration-500" />
                        </div>
                        <h3 className="text-[#0f172a] font-bold text-[13px] sm:text-[17px] leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-[#0f172a]/58 text-[11px] sm:text-[13px] leading-relaxed text-left">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div
          className="
            relative
            overflow-hidden
            px-4 sm:px-6 lg:px-6 xl:px-7
            py-3 sm:py-4
            bg-[#041b17]
            border-t border-white/5
          "
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,143,111,0.18),transparent_60%)]" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            <div className="flex items-center gap-3 sm:gap-4 text-left w-full md:w-auto">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-[#0E8F6F]/20 animate-ping" />
                <div className="absolute inset-0 rounded-full bg-[#0E8F6F]/10 blur-md scale-125" />
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0E8F6F]/15 border border-[#0E8F6F]/20 flex items-center justify-center animate-[float_3s_ease-in-out_infinite]">
                  <HandCoins className="w-4 h-4 sm:w-5 sm:h-5 text-[#4ade80]" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-white text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-medium leading-snug text-left">
                  When you work with WeNexa, you don't just get a service —
                  <br className="hidden sm:block" />
                  you create impact.
                </p>
              </div>
            </div>
            <button
              className="
                px-4 sm:px-6 py-2.5 sm:py-3
                rounded-full
                bg-[#0E8F6F]
                hover:bg-[#0c7a5f]
                text-white
                text-[11px] sm:text-[12px] md:text-[13px] lg:text-[14px]
                font-semibold
                transition-all duration-300
                shadow-[0_10px_25px_rgba(14,143,111,0.22)]
                hover:scale-[1.02]
                whitespace-normal text-center
                w-full md:w-auto
              "
            >
              Good for Your Business. Great for Their Future.
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
