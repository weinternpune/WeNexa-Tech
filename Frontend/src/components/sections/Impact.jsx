import {
  Users,
  BriefcaseBusiness,
  TrendingUp,
  HandCoins,
} from "lucide-react";

export default function ImpactSection() {
  return (
    <section className="py-10 bg-white">
      {/* Animation */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-4px);
            }

            100% {
              transform: translateY(0px);
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
        {/* Premium Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.03),transparent_38%)]" />

          {/* grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.025)_1px,transparent_1px)] bg-[size:48px_48px]" />

          {/* blur */}
          <div className="absolute top-[-100px] right-[-80px] w-[260px] h-[260px] rounded-full bg-[#0E8F6F]/10 blur-3xl" />
        </div>

        {/* TOP */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 px-7 md:px-10 py-8 items-center">
          
          {/* LEFT */}
          <div className="lg:col-span-4">
            {/* badge */}
            <div
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                bg-[#0E8F6F]/6
                border border-[#0E8F6F]/10
                mb-5
              "
            >
              <div className="w-2 h-2 rounded-full bg-[#0E8F6F]" />

              <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-[#0E8F6F]">
                We Believe In
              </span>
            </div>

            {/* heading */}
            <h2 className="text-[42px] md:text-[54px] leading-[0.95] font-bold text-[#0f172a] mb-5 tracking-tight">
              Impact That
              <br />
              Creates{" "}
              <span className="text-[#0E8F6F]">
                Independence
              </span>
            </h2>

            {/* desc */}
            <p className="text-[#0f172a]/62 text-[15px] leading-relaxed max-w-md">
              Our mission is not just to deliver projects — it’s to build
              financially independent students through real work and
              opportunities.
            </p>
          </div>

          {/* CENTER CIRCLE */}
          <div className="lg:col-span-3 flex items-center justify-center">
            <div className="relative w-[220px] h-[220px]">

              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-[#0E8F6F]/10 blur-2xl scale-110" />

              {/* Ring */}
              <div
                className="
                  absolute inset-0 rounded-full
                  bg-[conic-gradient(#0E8F6F_0deg,#22c55e_270deg,#e9ecef_270deg)]
                  shadow-[0_20px_40px_rgba(14,143,111,0.18)]
                "
              />

              {/* Inner */}
              <div
                className="
                  absolute inset-[18px]
                  rounded-full
                  bg-white
                  flex flex-col items-center justify-center
                  text-center
                  shadow-inner
                  border border-[#eef2f1]
                "
              >
                <div className="text-[58px] leading-none font-bold text-[#0E8F6F]">
                  75
                  <span className="text-[30px]">%</span>
                </div>

                <p className="mt-3 text-[#0f172a] text-[14px] leading-snug font-semibold uppercase tracking-wide">
                  OF PROJECT VALUE
                  <br />
                  GOES TO STUDENTS
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-5">
            
            {[
              {
                icon: Users,
                title: "Empowering Students",
                desc: "Students earn real income by working on live projects.",
              },
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
                    p-5
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
                  "
                >
                  {/* hover glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-[radial-gradient(circle_at_top_left,rgba(14,143,111,0.05),transparent_45%)]" />

                  <div className="relative z-10">
                    {/* icon */}
                    <div
                      className="
                        w-12 h-12
                        rounded-2xl
                        bg-[#0E8F6F]/10
                        border border-[#0E8F6F]/10
                        flex items-center justify-center
                        mb-4
                        transition-all duration-500
                        group-hover:bg-[#0E8F6F]
                        group-hover:scale-105
                        group-hover:rotate-3
                      "
                    >
                      <Icon className="w-5 h-5 text-[#0E8F6F] group-hover:text-white transition-all duration-500" />
                    </div>

                    {/* title */}
                    <h3 className="text-[#0f172a] font-bold text-[17px] leading-snug mb-3">
                      {item.title}
                    </h3>

                    {/* desc */}
                    <p className="text-[#0f172a]/58 text-[13px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div
          className="
            relative
            overflow-hidden
            px-7 md:px-10 py-4
            bg-[#041b17]
            border-t border-white/5
          "
        >
          {/* glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,143,111,0.18),transparent_60%)]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* LEFT */}
            <div className="flex items-center gap-4">
              
              {/* Animated Coin */}
              <div className="relative">
                
                {/* pulse ring */}
                <div className="absolute inset-0 rounded-full bg-[#0E8F6F]/20 animate-ping" />

                {/* floating glow */}
                <div className="absolute inset-0 rounded-full bg-[#0E8F6F]/10 blur-md scale-125" />

                {/* main coin */}
                <div
                  className="
                    relative
                    w-12 h-12
                    rounded-full
                    bg-[#0E8F6F]/15
                    border border-[#0E8F6F]/20
                    flex items-center justify-center
                    animate-[float_3s_ease-in-out_infinite]
                  "
                >
                  <HandCoins className="w-5 h-5 text-[#4ade80]" />
                </div>
              </div>

              {/* Text */}
              <p className="text-white text-[15px] md:text-[18px] font-medium">
                When you work with WeNexa, you don’t just get a service —
                you create impact.
              </p>
            </div>

            {/* BUTTON */}
            <button
              className="
                px-6 py-3
                rounded-full
                bg-[#0E8F6F]
                hover:bg-[#0c7a5f]
                text-white
                text-sm
                font-semibold
                transition-all duration-300
                shadow-[0_10px_25px_rgba(14,143,111,0.22)]
                hover:scale-[1.02]
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