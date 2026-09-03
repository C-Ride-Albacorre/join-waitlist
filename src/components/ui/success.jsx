

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Check, X } from 'lucide-react';

export default function  SuccessModal({ open, message, onClose, onReset }) {
  // Close on Escape
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  // Prevent background scrolling
  useEffect(() => {
    if (!open) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          onMouseDown={(e) => {
            // Close when clicking backdrop
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.97 }}
            transition={{
              duration: 0.3,
              ease: 'easeOut',
            }}
            className="relative w-full max-w-xs md:max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#111211] p-7 text-center shadow-2xl sm:p-9"
          >
            {/* GOLD GLOW */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/15 blur-[70px]" />

            {/* CLOSE */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-white/20 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative">
              {/* SUCCESS ICON */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.1,
                  type: 'spring',
                  stiffness: 180,
                  damping: 12,
                }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10"
              >
                <Check className="h-7 w-7 text-[#D4AF37]" />
              </motion.div>

              {/* LABEL */}
              <p className="mt-7 font-body text-xs uppercase tracking-[0.3em] text-[#D4AF37]">
                C-Ride Pre-Launch
              </p>

              {/* TITLE */}
              <h2
                id="success-title"
                className="mt-3 font-heading text-3xl font-semibold tracking-tight text-white"
              >
                You&apos;re on the list.
              </h2>

              {/* MESSAGE */}
              <p className="mx-auto mt-4 max-w-sm font-body text-sm leading-6 text-white/45">
                {message}
              </p>

              {/* CONFIRMATION */}
              <div className="mt-7 rounded-lg border border-white/10 bg-white/5 px-5 py-4">
                <p className="font-body text-xs leading-5 text-white/40">
                  We&apos;ll reach out when C-Ride is ready to launch in your
                  city.
                </p>
              </div>

              {/* ACTION */}
              <button
                type="button"
                onClick={() => {
                  onReset?.();
                  onClose();
                }}
                className="mt-7 font-body text-sm text-[#D4AF37] transition hover:text-[#c19b2e] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 focus:ring-offset-2 cursor-pointer"
              >
                <span>Submit another response </span> <ArrowRight className="inline-block h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
