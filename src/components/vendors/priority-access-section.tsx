

import { motion } from 'framer-motion';
import { ArrowUpRight, CheckCheck, CheckCircle, Mail, Shield } from 'lucide-react';

export default function PriorityAccessSection() {
  return (
    <section
      id="priority-access"
      className="relative overflow-hidden bg-[#111211] py-24 sm:py-32"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]" />

      <div className="relative mx-auto  px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center ">
            <div className="flex items-center justify-center gap-3 border border-[#D4AF37] bg-[#D4AF37]/10 rounded-full px-4 py-3 tracking-widest mb-5 w-fit">
              <p className=" text-xs uppercase text-[#D4AF37] font-body">
                Priority Access
              </p>
            </div>
          </div>

          <h2 className="mt-5 font-heading text-5xl font-semibold leading-[0.9] tracking-tight text-white sm:text-5xl md:text-7xl">
            Secure your
            <span className="text-[#D4AF37]"> priority access.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg font-body text-lg leading-7 text-white/40">
            We haven't launched yet, and the first wave of vendors sets the
            standard. Join the waitlist and be first in line.
          </p>

          <a
            href="#waitlist"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#D4AF37] px-5 py-4 font-body text-sm font-medium text-black transition hover:bg-[#c19b2e]"
          >
            Activate My Spot
            <ArrowUpRight className="h-4 w-4" />
          </a>

          {/* Small trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 font-body text-[9px] uppercase tracking-wider text-white/25 border-t border-white/5 pt-6 sm:gap-8 sm:text-[10px] max-w-4xl mx-auto">
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-green-500" />
              <span className="text-xs">SSL Encrypted</span>
            </div>

            <div className="border-l border-white/5 pl-4 h-4 flex items-center gap-2" />

            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span className="text-xs">Background-Checked Riders</span>
            </div>

            <div className="border-l border-white/5 pl-4 h-4 flex items-center gap-2" />

            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-green-500" />
              <span className="text-xs">Insurance Covered</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
