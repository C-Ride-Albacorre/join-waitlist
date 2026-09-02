

import { motion } from 'framer-motion';
import { Shield, TrendingUp, Zap } from 'lucide-react';

const reasons = [
  {
   icon: (<Zap className="h-5 w-5 text-[#D4AF37]" />),
    title: 'Reach',
    value: '150+',
    description:
      'Tap into a growing network of customers across Lagos who expect premium delivery — and the brands that serve them.',
    label: 'PREMIUM PARTNERS INCOMING',
  },
  {
icon: (<Shield className="h-5 w-5 text-green-500" />),
    title: 'Reliability',
    value: '100%',
    description:
      'Background-checked riders, temperature-controlled handling, and real-time tracking keep every order consistent and safe.',
    label: 'TRACKED, END TO END',
  },
  {
  icon: (<TrendingUp className="h-5 w-5 text-[#D4AF37]" />),
    title: 'Growth',
    value: 'Lower',
    description:
      'A powerful, simple vendor dashboard, proactive updates, and fewer delivery complaints mean happier customers and more repeat orders.',
    label: 'CUSTOMER COMPLAINTS',
  },
];

export default function ReasonsSection() {
  return (
    <section
      id="why-c-ride"
      className="bg-[#111211] py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 xl:px-0">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-green-500">
            THE REVENUE ENGINE
          </p>

          <h2 className="mt-3 font-heading text-4xl font-semibold leading-tight tracking-tight sm:text-5xl text-white/80">
            Three reasons vendors choose{' '}
            <span className="text-[#D4AF37] inline">C-Ride.</span>
          </h2>

          <p className="mt-4 max-w-md font-body leading-6 text-white/40">
            No fluff. Just the confirmed benefits of partnering with a delivery
            network built for premium brands.
          </p>
        </motion.div>

        {/* REASONS */}
        <div className="grid md:grid-cols-3 mt-14 rounded-4xl overflow-hidden">
          {reasons.map((reason, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                py-8
                md:px-7
                md:py-10 hover:bg-[#D4AF37]/5
                ${
                  index !== 0
                    ? 'border-t border-white/10 md:border-l md:border-t-0'
                    : ''
                }
              `}
            >
              <div className="flex flex-col gap-3">
                <div className='h-12 w-12 bg-white/5 flex justify-center items-center rounded-xl'>{reason.icon}</div>

                <h4 className="font-heading text-2xl   text-white/80">
                  {reason.title}
                </h4>

                <p className="max-w-xs font-body text-sm leading-6 text-white/40">
                  {reason.description}
                </p>
              </div>

              <p className="mt-10 font-heading text-5xl font-semibold tracking-tight text-[#D4AF37]">
                {reason.value}
              </p>

              <p className="mt-2 font-body text-xs uppercase tracking-[0.18em] text-green-500">
                {reason.label}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
