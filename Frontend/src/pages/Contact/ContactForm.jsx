import { useState, useEffect } from "react";
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
  AlertCircle,
  Pencil,
  ChevronDown,
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
  countryCode: "+91",
  phone: "",
  company: "",
  service: "",
  budget: "",
  message: "",
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const phoneRegexMap = {
  "+91": /^[6-9]\d{9}$/,
  "+1": /^\d{10}$/,
  "+44": /^\d{10}$/,
};

const validateField = (field, value, formData = {}) => {
  switch (field) {
    case "name":
      if (!value.trim()) return "Full name is required";
      if (value.trim().length < 3)
        return "Name must be at least 3 characters";
      return "";

    case "email":
      if (!value.trim()) return "Email is required";
      if (!emailRegex.test(value.trim()))
        return "Please enter a valid email address";
      return "";

    case "phone":
      if (!value.trim()) return "Phone number is required";

      const regex =
        phoneRegexMap[formData.countryCode] || /^[0-9]{10,15}$/;

      if (!regex.test(value.trim()))
        return "Please enter a valid phone number";

      return "";

    case "service":
      if (!value.trim()) return "Please select a service";
      return "";

    case "message":
      if (value.trim().length < 10)
        return "Message must contain at least 10 characters";
      return "";

    default:
      return "";
  }
};

const RESEND_COOLDOWN_MS = 60 * 1000;

function useRetryCountdown(retryUntil) {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    if (!retryUntil) return undefined;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [retryUntil]);

  if (!retryUntil) return 0;
  return Math.max(0, new Date(retryUntil).getTime() - now);
}

function formatCountdown(ms) {
  const totalSec = Math.ceil(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = totalSec % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

class ApiError extends Error {
  constructor(message, { code, retryAfter, remainingAttempts, remainingMs } = {}) {
    super(message);
    this.name = "ApiError";
    this.code = code;
    this.retryAfter = retryAfter;
    this.remainingAttempts = remainingAttempts;
    this.remainingMs = remainingMs;
  }
}

async function apiPost(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    throw new ApiError(data.message || "Something went wrong. Please try again.", {
      code: data.code,
      retryAfter: data.retryAfter,
      remainingAttempts: data.remainingAttempts,
      remainingMs: data.remainingMs,
    });
  }

  return data;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [step, setStep] = useState("form");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, message: "" });
  const [popup, setPopup] = useState(null);
  const [editingEmail, setEditingEmail] = useState(false);
  const [draftEmail, setDraftEmail] = useState("");
  const [remainingAttempts, setRemainingAttempts] = useState(3);
  const [resendCooldownUntil, setResendCooldownUntil] = useState(null);

  const resendWaitMs = useRetryCountdown(resendCooldownUntil);
  const popupWaitMs = useRetryCountdown(popup?.retryUntil);
  const canResend = !loading && !resendLoading && resendWaitMs === 0;

  const startResendCooldown = () => {
    setResendCooldownUntil(new Date(Date.now() + RESEND_COOLDOWN_MS).toISOString());
  };

  const showBlockPopup = (err) => {
    setPopup({
      title:
        err.code === "EMAIL_COOLDOWN"
          ? "Cannot Send Again"
          : "Too Many Attempts",
      message: err.message,
      retryUntil: err.retryAfter,
      code: err.code,
    });
  };

  const update = (field) => (e) => {
    const value = e.target.value;

    setForm((prev) => {
      const next = { ...prev, [field]: value };
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: validateField(field, value, next),
      }));
      return next;
    });

    if (status.type === "error") {
      setStatus({ type: null, message: "" });
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();

    const validationErrors = {
      name: validateField("name", form.name, form),
      email: validateField("email", form.email, form),
      phone: validateField("phone", form.phone, form),
      service: validateField("service", form.service, form),
      message: validateField("message", form.message, form),
    };

    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some(Boolean);

    if (hasErrors) {
      setStatus({
        type: "error",
        message: "Please correct the highlighted fields.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      await apiPost("/contact/send-otp", form);
      setDraftEmail(form.email.trim());
      setEditingEmail(false);
      setRemainingAttempts(3);
      startResendCooldown();
      setStep("otp");
      setStatus({
        type: "success",
        message: `Verification code sent to ${form.email.trim()}. Valid for 10 minutes. Please check your inbox and spam folder.`,
      });
    } catch (err) {
      if (err.code === "EMAIL_COOLDOWN" || err.code === "OTP_ATTEMPTS_EXCEEDED") {
        showBlockPopup(err);
      } else {
        setStatus({ type: "error", message: err.message });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();

    if (!otp.trim() || otp.trim().length !== 6) {
      setStatus({
        type: "error",
        message: "Please enter the 6-digit verification code.",
      });
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
      if (err.code === "OTP_ATTEMPTS_EXCEEDED" || err.code === "EMAIL_COOLDOWN") {
        showBlockPopup(err);
        setStep("form");
        setOtp("");
      } else if (err.code === "WRONG_OTP") {
        if (typeof err.remainingAttempts === "number") {
          setRemainingAttempts(err.remainingAttempts);
        }
        setStatus({
          type: "error",
          message:
            typeof err.remainingAttempts === "number"
              ? `Wrong OTP. ${err.remainingAttempts} attempt(s) remaining.`
              : err.message,
        });
      } else {
        setStatus({ type: "error", message: err.message });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    if (!canResend) return;

    setResendLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const data = await apiPost("/contact/resend-otp", {
        email: form.email.trim(),
      });

      if (typeof data.remainingAttempts === "number") {
        setRemainingAttempts(data.remainingAttempts);
      }
      startResendCooldown();
      setOtp("");
      setStatus({ type: "success", message: data.message });
    } catch (err) {
      if (err.code === "OTP_ATTEMPTS_EXCEEDED" || err.code === "EMAIL_COOLDOWN") {
        showBlockPopup(err);
        setStep("form");
        setOtp("");
      } else {
        setStatus({ type: "error", message: err.message });
      }
    } finally {
      setResendLoading(false);
    }
  };

  const handleChangeEmail = async (e) => {
    e?.preventDefault?.();

    const emailError = validateField("email", draftEmail, form);
    if (emailError) {
      setStatus({ type: "error", message: emailError });
      return;
    }

    const normalizedDraft = draftEmail.trim().toLowerCase();
    const normalizedCurrent = form.email.trim().toLowerCase();

    if (normalizedDraft === normalizedCurrent) {
      setEditingEmail(false);
      setStatus({
        type: "error",
        message: "Please enter a different email address.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const data = await apiPost("/contact/change-email", {
        previousEmail: form.email.trim(),
        email: draftEmail.trim(),
      });

      setForm((prev) => ({ ...prev, email: data.email || draftEmail.trim() }));
      setDraftEmail(data.email || draftEmail.trim());
      setEditingEmail(false);
      setOtp("");
      startResendCooldown();
      setStatus({
        type: "success",
        message: data.message,
      });
    } catch (err) {
      if (err.code === "EMAIL_COOLDOWN" || err.code === "OTP_ATTEMPTS_EXCEEDED") {
        showBlockPopup(err);
        setStep("form");
        setOtp("");
        setEditingEmail(false);
      } else {
        setStatus({ type: "error", message: err.message });
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setForm(initialForm);
    setOtp("");
    setErrors({});
    setStep("form");
    setStatus({ type: null, message: "" });
    setEditingEmail(false);
    setDraftEmail("");
    setRemainingAttempts(3);
    setResendCooldownUntil(null);
  };

  const popupOverlay = popup ? (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-start gap-3">
          <AlertCircle className="mt-0.5 h-6 w-6 shrink-0 text-red-500" />
          <div className="w-full">
            <h3 className="text-lg font-bold text-[#081028]">{popup.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{popup.message}</p>
            {popup.retryUntil && (
              <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-red-500">
                  Try again after
                </p>
                <p className="mt-1 text-2xl font-black tracking-wider text-red-600">
                  {formatCountdown(popupWaitMs)}
                </p>
              </div>
            )}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setPopup(null)}
          className="w-full rounded-xl bg-[#081028] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-600"
        >
          OK
        </button>
      </div>
    </div>
  ) : null;

  if (step === "done") {
    return (
      <>
        {popupOverlay}
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
        <div className="absolute top-[-80px] right-[-80px] w-[220px] sm:w-[240px] h-[220px] sm:h-[240px] bg-emerald-500/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[240px] sm:w-[280px] h-[240px] sm:h-[280px] bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-emerald-500/10 border border-emerald-400/20 flex items-center justify-center mb-6 sm:mb-8">
          <CheckCircle2
            size={36}
            className="text-emerald-400 sm:w-[46px] sm:h-[46px]"
          />
        </div>

        <h2 className="relative z-10 text-[28px] sm:text-3xl md:text-4xl font-black text-white mb-4 sm:mb-5 tracking-[-0.04em]">
          Message Sent!
        </h2>

        <p className="relative z-10 text-slate-400 text-[14px] sm:text-base leading-[1.8] max-w-md mb-8 sm:mb-10 px-2">
          {status.message ||
            "Our team will analyze your requirements and connect with you within 24 hours."}
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
      </>
    );
  }

  if (step === "otp") {
    return (
      <>
        {popupOverlay}
      <motion.div
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
          bg-white/95
          backdrop-blur-sm
          p-4
          sm:p-6
          md:p-10
        "
      >
        <div className="absolute top-[-120px] right-[-120px] w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-120px] left-[-120px] w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

        <form onSubmit={handleVerifyOtp} className="relative z-10 space-y-6">
          {status.message && (
            <StatusBanner type={status.type} message={status.message} />
          )}

          <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-4">
            {!editingEmail ? (
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm leading-relaxed text-slate-600">
                  Enter the 6-digit code we sent to{" "}
                  <strong className="text-[#081028]">{form.email}</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setDraftEmail(form.email);
                    setEditingEmail(true);
                    setStatus({ type: null, message: "" });
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-all hover:border-emerald-500/30 hover:text-emerald-600"
                >
                  <Pencil size={14} />
                  Edit Email
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                <label className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.16em] sm:tracking-[0.18em] block ml-1">
                  Update Email Address
                </label>
                <input
                  type="email"
                  value={draftEmail}
                  onChange={(e) => setDraftEmail(e.target.value)}
                  className="w-full h-[52px] rounded-2xl border border-slate-200 bg-white text-[#081028] px-4 text-sm focus:outline-none focus:border-emerald-500/30"
                  placeholder="you@company.com"
                  required
                />
                <div className="flex flex-col gap-2 sm:flex-row">
                  <button
                    type="button"
                    disabled={loading}
                    onClick={handleChangeEmail}
                    className="flex-1 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-700 disabled:opacity-60"
                  >
                    Send Code to New Email
                  </button>
                  <button
                    type="button"
                    disabled={loading}
                    onClick={() => {
                      setEditingEmail(false);
                      setDraftEmail(form.email);
                      setStatus({ type: null, message: "" });
                    }}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-emerald-500/30 hover:text-emerald-600 disabled:opacity-60"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
            <p className="text-sm text-amber-900">
              You have <strong>{remainingAttempts}</strong> attempt(s) left to enter the correct code.
            </p>
          </div>

          <p className="text-xs text-slate-500">
            Did not receive the email? Check spam/promotions folder, then use Resend Code.
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
            <button
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
                active:scale-[0.99]
                transition-colors
                duration-150
                disabled:opacity-60
                disabled:cursor-not-allowed
                touch-manipulation
              "
            >
              {loading && <Loader2 className="h-4 w-4 animate-spin" />}
              Verify & Submit
            </button>

            <button
              type="button"
              disabled={!canResend || resendLoading}
              onClick={handleResendOtp}
              className="
                min-w-[148px]
                h-[56px]
                sm:h-[64px]
                rounded-2xl
                border
                border-slate-200
                px-6
                text-sm
                font-semibold
                text-slate-700
                flex
                items-center
                justify-center
                gap-2
                hover:border-emerald-500/30
                hover:text-emerald-600
                active:scale-[0.99]
                transition-colors
                duration-150
                disabled:cursor-not-allowed
                disabled:opacity-60
                touch-manipulation
              "
            >
              {resendLoading && <Loader2 className="h-4 w-4 animate-spin" />}
              {resendWaitMs > 0
                ? `Resend in ${Math.ceil(resendWaitMs / 1000)}s`
                : "Resend Code"}
            </button>
          </div>
        </form>
      </motion.div>
      </>
    );
  }

  return (
    <>
      {popupOverlay}
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
        bg-white/95
        backdrop-blur-sm
        p-4
        sm:p-6
        md:p-10
      "
    >
      <div className="absolute top-[-120px] right-[-120px] w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-120px] left-[-120px] w-[220px] sm:w-[260px] h-[220px] sm:h-[260px] bg-cyan-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 space-y-6 sm:space-y-8">
        {status.message && (
          <StatusBanner type={status.type} message={status.message} />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 [&>*]:min-w-0">
          <FormInput
            id="contact-name"
            icon={User}
            label="Full Name"
            placeholder="Your name"
            required
            value={form.name}
            onChange={update("name")}
            error={errors.name}
            helperText="Enter your full professional name."
          />

          <FormInput
            id="contact-email"
            icon={Mail}
            label="Email"
            placeholder="you@company.com"
            type="email"
            required
            value={form.email}
            onChange={update("email")}
            error={errors.email}
            helperText="Use an active email to receive OTP verification."
          />

          <div className="min-w-0 overflow-hidden">
            <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.16em] sm:tracking-[0.18em] ml-1 block">
              Phone Number *
            </span>

            <div className="mt-2 sm:mt-3 flex gap-3 min-w-0">
              <select
                id="contact-country-code"
                value={form.countryCode}
                onChange={update("countryCode")}
                aria-label="Country code"
                className="
                  shrink-0
                  h-[56px]
                  sm:h-[62px]
                  rounded-2xl
                  border
                  border-slate-200
                  bg-[#f8fafc]
                  px-4
                  text-sm
                  cursor-pointer
                  focus:outline-none
                  focus:border-emerald-500/30
                  focus:bg-white
                "
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
              </select>

              <label
                htmlFor="contact-phone"
                className={`
                  relative flex flex-1 min-w-0 items-center h-[56px] sm:h-[62px]
                  rounded-2xl border bg-[#f8fafc] cursor-text
                  ${errors.phone ? "border-red-300" : "border-slate-200 focus-within:border-emerald-500/30 focus-within:bg-white"}
                `}
              >
                <Phone
                  size={17}
                  className="pointer-events-none shrink-0 ml-4 sm:ml-5 text-slate-400"
                />
                <input
                  id="contact-phone"
                  type="tel"
                  inputMode="numeric"
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/\D/g, "");
                    update("phone")({ target: { value: cleaned } });
                  }}
                  placeholder="9876543210"
                  className="min-w-0 flex-1 h-full bg-transparent px-3 text-[14px] sm:text-sm text-[#081028] placeholder:text-slate-400 outline-none"
                />
              </label>
            </div>

            <p className={`text-xs mt-2 ml-1 ${errors.phone ? "text-red-500" : "text-slate-500"}`}>
              {errors.phone || "Include your active WhatsApp/contact number with country code."}
            </p>
          </div>

          <FormInput
            id="contact-company"
            icon={Building2}
            label="Company"
            placeholder="Company name (optional)"
            value={form.company}
            onChange={update("company")}
            helperText="Your startup or business name."
          />

          <div className="min-w-0 space-y-2 sm:space-y-3">
            <FormSelect
              id="contact-service"
              icon={Cpu}
              label="Service *"
              value={form.service}
              onChange={update("service")}
              options={SERVICES}
              required
            />
            {errors.service && (
              <p className="text-xs ml-1 text-red-500">{errors.service}</p>
            )}
          </div>

          <FormSelect
            id="contact-budget"
            icon={IndianRupee}
            label="Budget"
            value={form.budget}
            onChange={update("budget")}
            options={BUDGETS}
          />
        </div>

        <div className="min-w-0">
          <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.16em] sm:tracking-[0.18em] mb-3 block ml-1">
            Message *
          </span>

          <MessageField
            value={form.message}
            onChange={update("message")}
            error={errors.message}
          />
        </div>

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
          Submit
          <SendHorizontal size={17} />
        </motion.button>
      </div>
    </motion.form>
    </>
  );
}

function fieldBoxClass(error, multiline = false) {
  const base = multiline
    ? "rounded-[22px] sm:rounded-[28px] min-h-[160px] sm:min-h-[180px] items-start pt-4 sm:pt-5"
    : "h-[56px] sm:h-[62px] items-center rounded-2xl";

  const state = error
    ? "border-red-300 bg-red-50/20"
    : "border-slate-200 bg-[#f8fafc] focus-within:border-emerald-500/30 focus-within:bg-white";

  return `relative flex w-full min-w-0 border cursor-text ${base} ${state}`;
}

function MessageField({ value, onChange, error }) {
  return (
    <>
      <label htmlFor="contact-message" className={fieldBoxClass(error, true)}>
        <MessageSquareText
          size={18}
          className="pointer-events-none shrink-0 ml-4 sm:ml-5 text-slate-400"
        />
        <textarea
          id="contact-message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          value={value}
          onChange={onChange}
          placeholder="Tell us about your project, timeline, and goals..."
          className="min-w-0 flex-1 resize-none bg-transparent px-3 pb-4 sm:pb-5 text-[14px] sm:text-sm leading-relaxed text-[#081028] placeholder:text-slate-400 outline-none"
        />
      </label>

      <p className={`text-xs mt-2 ml-1 ${error ? "text-red-500" : "text-slate-500"}`}>
        {error || "Briefly explain your project goals, timeline, and expectations."}
      </p>
    </>
  );
}

function FormInput({
  icon: Icon,
  label,
  error,
  helperText,
  id,
  ...props
}) {
  const inputId = id || props.name || label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="min-w-0 space-y-2 sm:space-y-3">
      <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.16em] sm:tracking-[0.18em] ml-1 block">
        {label}
      </span>

      <label htmlFor={inputId} className={fieldBoxClass(error)}>
        <Icon
          size={17}
          className="pointer-events-none shrink-0 ml-4 sm:ml-5 text-slate-400"
        />
        <input
          {...props}
          id={inputId}
          className="min-w-0 flex-1 h-full bg-transparent px-3 text-[14px] sm:text-sm text-[#081028] placeholder:text-slate-400 outline-none"
        />
      </label>

      <p className={`text-xs ml-1 ${error ? "text-red-500" : "text-slate-500"}`}>
        {error || helperText}
      </p>
    </div>
  );
}

function FormSelect({ icon: Icon, label, options, id, ...props }) {
  const selectId = id || props.name || "contact-select";

  return (
    <div className="min-w-0 space-y-2 sm:space-y-3">
      <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase tracking-[0.16em] sm:tracking-[0.18em] ml-1 block">
        {label}
      </span>

      <div className="relative min-w-0">
        <Icon
          size={17}
          className="pointer-events-none absolute left-4 sm:left-5 top-1/2 z-10 -translate-y-1/2 text-slate-400"
        />
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-4 sm:right-5 top-1/2 z-10 -translate-y-1/2 text-slate-400"
        />
        <select
          {...props}
          id={selectId}
          className="
            block w-full min-w-0 h-[56px] sm:h-[62px] cursor-pointer appearance-none
            rounded-2xl border border-slate-200 bg-[#f8fafc]
            pl-12 sm:pl-14 pr-10 sm:pr-12
            text-[14px] sm:text-sm text-[#081028]
            focus:outline-none focus:border-emerald-500/30 focus:bg-white
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
        ${
          isError
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
