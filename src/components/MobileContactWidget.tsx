import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data/site";

function waDigits(phone: string) {
  return phone.replace(/[^\d]/g, ""); // +44... -> 44...
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2a1 1 0 011-.24c1.12.37 2.33.57 3.59.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.26.2 2.47.57 3.59a1 1 0 01-.25 1l-2.2 2.2z" />
    </svg>
  );
}

export default function MobileContactWidget() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  const phone = siteConfig.agency.phone;
  const email = siteConfig.agency.email;
  const wa = siteConfig.agency.whatsapp || phone;

  const telHref = `tel:${phone}`;
  const mailHref = `mailto:${email}`;
  const waHref = `https://wa.me/${waDigits(wa)}`;

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact options"
        className="w-10 h-10 rounded-xl border border-border-color flex items-center justify-center shadow-sm"
        style={{ backgroundColor: "var(--secondary-bg)", color: "var(--accent)" }}
      >
        <PhoneIcon />
      </button>

      {/* Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.16 }}
            className="absolute right-0 mt-2 w-56 rounded-xl border border-border-color p-2 shadow-lg z-50"
            style={{ backgroundColor: "var(--primary-bg)" }}
          >
            <a
              href={telHref}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors"
            >
              <span className="text-text-primary font-medium">Call</span>
              <span className="text-text-secondary text-xs">{phone}</span>
            </a>

            <a
              href={mailHref}
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors"
            >
              <span className="text-text-primary font-medium">Email</span>
              <span className="text-text-secondary text-xs">Open</span>
            </a>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-white/5 transition-colors"
            >
              <span className="text-text-primary font-medium">WhatsApp</span>
              <span className="text-text-secondary text-xs">Chat</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}