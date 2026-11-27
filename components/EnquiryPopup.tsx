"use client";

import { useEffect, useRef, useState, FormEvent } from "react";
import { X, Send, Loader2, CheckCircle2 } from "lucide-react";
import { COMPANY, topProducts } from "@/lib/data";
import { submitToWeb3Forms } from "@/lib/web3forms";

// sessionStorage lives for one browser tab: it survives page changes and reloads,
// and is cleared when the tab is closed. So the popup shows once per tab session.
const STORAGE_KEY = "js-enquiry-popup-shown";
const DELAY_MS = 5000;

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full bg-white border border-black/15 rounded-md px-3.5 py-2.5 text-[14px] text-ink placeholder:text-[#9a948a] focus:outline-none focus:border-ember focus:ring-2 focus:ring-ember/15 transition";

export default function EnquiryPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const firstInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {
      // Storage blocked (privacy mode): fall through and show once for this page load.
    }
    const timer = setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {}
      setOpen(true);
    }, DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstInput.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return;

    setStatus("sending");
    setError("");

    const result = await submitToWeb3Forms({
      subject: `New popup enquiry from ${data.get("name")} — Website`,
      from_name: "J. S. Engineering Website (Popup)",
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      product: String(data.get("product") ?? ""),
      message: String(data.get("message") ?? ""),
      page: typeof window !== "undefined" ? window.location.href : "",
    });

    if (result.success) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
      setError(result.message || "Something went wrong. Please try again.");
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-[2px]"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-popup-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[480px] max-h-[92vh] overflow-y-auto bg-white rounded-2xl shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
      >
        <span className="absolute top-0 left-0 h-[4px] w-full bg-ember" />
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center text-ink-3 hover:bg-paper-2 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8">
          {status === "sent" ? (
            <div className="flex flex-col items-center text-center py-8">
              <CheckCircle2 size={48} className="text-ember mb-4" />
              <h2 className="font-display font-extrabold text-[22px] mb-2">Thank you!</h2>
              <p className="text-[14.5px] text-[#5b564d] leading-relaxed mb-6">
                Your enquiry has been sent. Our team will contact you shortly. For a faster response,
                call {COMPANY.phone}.
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="bg-ember hover:bg-ember-dark text-white font-semibold px-6 py-3 rounded-md transition-colors"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              <span className="text-[12px] tracking-[0.14em] font-semibold text-ember">GET A FREE QUOTE</span>
              <h2 id="enquiry-popup-title" className="font-display font-extrabold text-[22px] sm:text-[24px] leading-tight mt-1.5 mb-2 pr-8">
                Looking for the right bakery machine?
              </h2>
              <p className="text-[14px] text-[#5b564d] leading-relaxed mb-5">
                Share your requirement and our team will get back to you with suitable options and a
                quotation.
              </p>

              <form onSubmit={handleSubmit} className="grid gap-3.5">
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                <input ref={firstInput} name="name" required autoComplete="name" placeholder="Full name *" aria-label="Full name" className={inputClass} />
                <input
                  name="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  pattern="[0-9+\-\s()]{7,20}"
                  title="Please enter a valid phone number"
                  placeholder="Phone *"
                  aria-label="Phone"
                  className={inputClass}
                />
                <input name="email" type="email" required autoComplete="email" placeholder="Email *" aria-label="Email" className={inputClass} />
                <select name="product" defaultValue="" aria-label="Interested in" className={inputClass}>
                  <option value="">Interested in (optional)</option>
                  {topProducts.map((p) => (
                    <option key={p.name} value={p.name}>{p.name}</option>
                  ))}
                </select>
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Your requirement"
                  aria-label="Your requirement"
                  className={`${inputClass} resize-none`}
                />

                {status === "error" && (
                  <p className="text-[13.5px] text-red-700 bg-red-50 border border-red-200 rounded-md px-3.5 py-2.5">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-1 w-full inline-flex items-center justify-center gap-2.5 bg-ember hover:bg-ember-dark disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold px-6 py-3.5 rounded-md transition-colors"
                >
                  {status === "sending" ? (
                    <>
                      <Loader2 size={17} className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Enquiry <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
