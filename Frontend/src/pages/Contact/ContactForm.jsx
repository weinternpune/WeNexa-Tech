import { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  Building2,
  Cpu,
  IndianRupee,
  MessageSquareText,
  SendHorizontal,
  CheckCircle2,
  ArrowRight,
  Loader2,
  AlertCircle
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_URL || "/api";

const SERVICES = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Cloud & DevOps",
  "AI / Automation",
  "Other",
];

const BUDGETS = [
  "Under ₹50,000",
  "₹50,000 – ₹2,00,000",
  "₹2,00,000 – ₹5,00,000",
  "₹5,00,000+",
  "Not sure yet",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

async function apiPost(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong. Please try again.");
  }

  return data;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState("form");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: "" });

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    if (status.type === "error") setStatus({ type: null, message: "" });
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      await apiPost("/contact/send-otp", form);
      setStep("otp");
      setStatus({
        type: "success",
        message: `Verification code sent to ${form.email.trim()}. Valid for 10 minutes.`,
      });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp.trim() || otp.trim().length !== 6) {
      setStatus({ type: "error", message: "Please enter the 6-digit verification code." });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const data = await apiPost("/contact/verify-otp", {
        email: form.email.trim(),
        otp: otp.trim(),
      });
      setStep("done");
      setStatus({ type: "success", message: data.message });
    } catch (err) {
      setStatus({ type: "error", message: err.message });
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const data = await apiPost("/contact/resend-otp", {
        email: form.email.trim(),
      });
      setStatus({ type: "success", message: data.message });
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setOtp("");
    setStep("form");
    setStatus({ type: null, message: "" });
  };

  if (step === "done") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="
          relative
          overflow-hidden
          rounded-[26px]
          sm:rounded-[30px]
          md:rounded-[36px]
          border
          border-emerald-500/10
          bg-gradient-to-br
          from-[#081018]
          via-[#0b1623]
          to-[#081018]
          p-6
          sm:p-10
          md:p-16
          min-h-[460px]
          sm:min-h-[520px]
          md:min-h-[580px]
          flex
          flex-col
          items-center
          justify-center
          text-center
          shadow-[0_30px_100px_rgba(15,23,42,0.35)]
        "
      >
        {/* GLOW */}
        <div className="absolute top-[-80px] right-[-80px] w-[220px] sm:w-[240px] h-[220px] sm:h-[240px] bg-emerald-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] bg-cyan-500/10 blur-[120px] rounded-full" />

        {/* ICON */}
        <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center mb-6 sm:mb-8">
          <CheckCircle2 size={36} className="text-emerald-400 sm:w-[46px] sm:h-[46px]" />
        </div>

        <h2 className="relative z-10 text-[28px] sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-5 tracking-[-0.04em]">
          Message Sent!
        </h2>

        <p className="relative z-10 text-slate-400 text-[14px] sm:text-base leading-[1.8] max-w-md mb-8 sm:mb-10 px-2">
          {status.message || "Our team will analyze your requirements and connect with you within 24 hours."}
        </p>

        <button
          onClick={resetForm}
          className="
            relative
            z-10
            inline-flex
            items-center
            gap-2
            text-sm
            sm:text-base
            text-emerald-400
            font-semibold
            hover:text-emerald-300
            transition-colors
          "
        >
          Send Another Message
          <ArrowRight size={16} />
        </button>
      </motion.div>
    );
  }

  if (step === "otp") {
    return (
      <motion.form
        onSubmit={handleVerifyOtp}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          relative
          overflow-hidden
          rounded-[26px]
          sm:rounded-[30px]
          md:rounded-[36px]
          border
          border-slate-200/70
          bg-white/90
          backdrop-blur-xl
          p-4
          sm:p-6
          md:p-10
        "
      >
        {/* GLOW */}
        <div className="absolute top-[-120px] right-[-120px] w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-emerald-500/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-cyan-500/5 blur-[100px] rounded-full" />

        <div className="relative z-10 space-y-6">
          {status.message && (
            <StatusBanner type={status.type} message={status.message} />
          )}

          <p className="text-sm leading-relaxed text-slate-600">
            Enter the 6-digit code we sent to{" "}
            <strong className="text-[#081028]">{form.email}</strong>. You have up to 3 attempts.
          </p>

          <div>
            <label className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.16em] sm:tracking-[0.18em] mb-3 block ml-1">
              Verification Code
            </label>
            <input
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              maxLength={6}
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
              className="
                w-full
                h-[56px]
                sm:h-[62px]
                rounded-2xl
                border
                border-slate-200
                bg-[#f8fafc]
                text-[#081028]
                placeholder:text-slate-400
                px-4
                text-center
                text-2xl
                tracking-[0.4em]
                font-semibold
                focus:outline-none
                focus:border-emerald-500/30
                focus:bg-white
                transition-all
              "
              placeholder="000000"
              required
            />
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.01, y: -2 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="
                flex-1
                h-[56px]
                sm:h-[64px]
                rounded-2xl
                bg-emerald-600
                text-white
                font-bold
                uppercase
                tracking-[0.14em]
                sm:tracking-[0.18em]
                text-[12px]
                sm:text-sm
                flex
                items-center
                justify-center
                gap-2
                hover:bg-emerald-700
                transition-all
                duration-300
                disabled:opacity-60
              "
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Verify & Submit
            </motion.button>

            <button
              type="button"
              disabled={loading}
              onClick={handleResendOtp}
              className="
                rounded-2xl
                border
                border-slate-200
                px-6
                py-4
                text-sm
                font-semibold
                text-slate-700
                transition-all
                hover:border-emerald-500/30
                hover:text-emerald-600
                disabled:opacity-60
              "
            >
              Resend Code
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              setStep("form");
              setOtp("");
              setStatus({ type: null, message: "" });
            }}
            className="text-sm text-slate-500 underline-offset-2 hover:text-emerald-600 hover:underline transition-colors"
          >
            Edit form details
          </button>
        </div>
      </motion.form>
    );
  }

  return (
    <motion.form
      onSubmit={handleSendOtp}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        relative
        overflow-hidden
        rounded-[26px]
        sm:rounded-[30px]
        md:rounded-[36px]
        border
        border-slate-200/70
        bg-white/90
        backdrop-blur-xl
        p-4
        sm:p-6
        md:p-10
      "
    >
      {/* GLOW */}
      <div className="absolute top-[-120px] right-[-120px] w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-emerald-500/5 blur-[100px] rounded-full" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-cyan-500/5 blur-[100px] rounded-full" />

      <div className="relative z-10 space-y-6 sm:space-y-8">
        {status.message && <StatusBanner type={status.type} message={status.message} />}

        {/* FORM GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          <FormInput
            icon={User}
            label="Full Name"
            placeholder="Your name"
            required
            value={form.name}
            onChange={update("name")}
          />

          <FormInput
            icon={Mail}
            label="Email"
            placeholder="you@company.com"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
          />

          <FormInput
            icon={Phone}
            label="Phone"
            placeholder="+91 9876543210"
            value={form.phone}
            onChange={update("phone")}
          />

          <FormInput
            icon={Building2}
            label="Company"
            placeholder="Company name (optional)"
            value={form.company}
            onChange={update("company")}
          />

          <FormSelect
            icon={Cpu}
            label="Service *"
            value={form.service}
            onChange={update("service")}
            options={SERVICES}
            required
          />

          <FormSelect
            icon={IndianRupee}
            label="Budget"
            value={form.budget}
            onChange={update("budget")}
            options={BUDGETS}
          />
        </div>

        {/* MESSAGE */}
        <div>
          <label className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.16em] sm:tracking-[0.18em] mb-3 block ml-1">
            Message *
          </label>

          <div className="relative group">
            <div className="absolute top-4 sm:top-5 left-4 sm:left-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
              <MessageSquareText size={18} />
            </div>

            <textarea
              required
              minLength={10}
              maxLength={5000}
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell us about your project, timeline, and goals..."
              className="
                w-full
                rounded-[22px]
                sm:rounded-[28px]
                border
                border-slate-200
                bg-[#f8fafc]
                text-[#081028]
                placeholder:text-slate-400
                pl-12
                sm:pl-14
                pr-4
                sm:pr-6
                py-4
                sm:py-5
                min-h-[160px]
                sm:min-h-[180px]
                resize-none
                text-[14px]
                sm:text-sm
                leading-relaxed
                focus:outline-none
                focus:border-emerald-500/30
                focus:bg-white
                transition-all
              "
            />
          </div>
        </div>

        {/* SUBMIT */}
        <motion.button
          whileHover={{ scale: 1.01, y: -2 }}
          whileTap={{ scale: 0.99 }}
          type="submit"
          disabled={loading}
          className="
            relative
            z-10
            w-full
            h-[56px]
            sm:h-[64px]
            rounded-2xl
            bg-[#081028]
            text-white
            font-bold
            uppercase
            tracking-[0.14em]
            sm:tracking-[0.18em]
            text-[12px]
            sm:text-sm
            flex
            items-center
            justify-center
            gap-3
            shadow-[0_20px_50px_rgba(15,23,42,0.15)]
            hover:bg-emerald-600
            transition-all
            duration-300
            disabled:opacity-60
          "
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          Send Verification Code
          <SendHorizontal size={17} />
        </motion.button>
      </div>
    </motion.form>
  );
}

function FormInput({ icon: Icon, label, ...props }) {
  return (
    <div className="space-y-2 sm:space-y-3">
      <label className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.16em] sm:tracking-[0.18em] ml-1">
        {label}
      </label>

      <div className="relative group">
        <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors">
          <Icon size={17} />
        </div>

        <input
          {...props}
          className="
            w-full
            h-[56px]
            sm:h-[62px]
            rounded-2xl
            border
            border-slate-200
            bg-[#f8fafc]
            text-[#081028]
            placeholder:text-slate-400
            pl-12
            sm:pl-14
            pr-4
            sm:pr-5
            text-[14px]
            sm:text-sm
            focus:outline-none
            focus:border-emerald-500/30
            focus:bg-white
            transition-all
          "
        />
      </div>
    </div>
  );
}

function FormSelect({ icon: Icon, label, options, ...props }) {
  return (
    <div className="space-y-2 sm:space-y-3">
      <label className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.16em] sm:tracking-[0.18em] ml-1">
        {label}
      </label>

      <div className="relative group">
        <div className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-emerald-500 transition-colors z-10">
          <Icon size={17} />
        </div>

        <select
          {...props}
          className="
            w-full
            h-[56px]
            sm:h-[62px]
            rounded-2xl
            border
            border-slate-200
            bg-[#f8fafc]
            text-[#081028]
            pl-12
            sm:pl-14
            pr-5
            text-[14px]
            sm:text-sm
            appearance-none
            cursor-pointer
            focus:outline-none
            focus:border-emerald-500/30
            focus:bg-white
            transition-all
          "
        >
          <option value="">Select Option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function StatusBanner({ type, message }) {
  const isError = type === "error";
  return (
    <div
      className={`
        flex items-start gap-3 rounded-2xl border p-4 text-sm
        ${isError 
          ? "border-red-200 bg-red-50 text-red-800" 
          : "border-emerald-200 bg-emerald-50 text-emerald-800"
        }
      `}
      role="alert"
    >
      {isError ? (
        <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
      ) : (
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" />
      )}
      <span>{message}</span>
    </div>
  );
}
