import { motion } from 'framer-motion';

import { Clock, Shield, Star, TrendingUp, Zap } from 'lucide-react';

import driver from '../../assets/driver.jpg';

const standard = [
  {
    icon: <Clock className="h-5 w-5 text-[#D4AF37]" />,
    title: 'Drive on your terms',
    value: 'Flexible',
    description:
      "Flexibility that fits your life. Take premium deliveries on a schedule that works for you — you're in control of your time.",
    label: 'HOURS, YOUR WAY',
  },
  {
    icon: <Shield className="h-5 w-5 text-green-500" />,
    title: 'Built on trust',
    value: 'Tracked',
    description:
      'Background-checked drivers, real-time tracking, and proactive support. You\'re part of a network that takes safety seriously — for you and the customer.',
    label: 'EVERY TRIP, END TO END',
  },
  {
    icon: <Star className="h-5 w-5 text-[#D4AF37]" />,
    title: 'Carry a premium brand',
    value: 'Premium',
    description:
      'C-Ride stands for premium, consistent, careful delivery. When you ride with us, you represent a standard customers respect.',
    label: 'BY DESIGN',
  },
];

export default function StandardSection() {
  return (
    <section
      id="why-c-ride"
      className="bg-[#e9e9e3] py-20 text-[#151515] sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-6 xl:px-0">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-2 items-end"
        >
          <div>
            <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#8b761d] sm:text-sm">
              Why Drive With CRide
            </p>

            <h2 className="mt-4 max-w-xl font-heading text-4xl font-semibold leading-[0.95] tracking-tight sm:text-5xl">
              More than a gig.
              <br />
              <span className="font-serif font-normal italic">A standard.</span>
            </h2>
          </div>

          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-lg lg:ml-auto lg:w-120">
            <img
              src={driver}
              alt="C-Ride driver"
              className="aspect-[2] h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/10" />
          </div>
        </motion.div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 mt-14 rounded-4xl overflow-hidden">
          {standard.map((reason, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`
                      py-8
                      md:px-7
                      md:py-10 hover:bg-white/60
                      ${
                        index !== 0
                          ? 'border-t border-black/10 md:border-l md:border-t-0'
                          : ''
                      }
                    `}
            >
              <div className="flex flex-col gap-3 ">
                <div className="h-12 w-12 bg-black/5 flex justify-center items-center rounded-xl">
                  {reason.icon}
                </div>

                <h4 className="font-heading text-2xl   text-black/80">
                  {reason.title}
                </h4>

                <p className="max-w-xs font-body text-sm leading-6 text-black/40">
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
