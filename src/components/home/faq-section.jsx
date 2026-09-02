

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is C-Ride?',
    answer:
      'CRide is in pre-launch. Join the waitlist today and you\'ll be among the first to get access when we go live in your city.',
  },
  {
    question: 'What can I order on CRide?',
    answer:
      'Food from verified restaurants and home chefs, groceries, pharmacy essentials, and luxury items and gifts — all delivered in a car, handled with care.',
  },
  {
    question: 'How is my order kept safe and fresh?',
    answer:
      'Every order travels in a car, not on a bike. Temperature-controlled handling means your food arrives exactly the way it left the kitchen — hot, intact, and presented properly.',
  },
  {
    question: 'Will I be able to track my order?',
    answer:
      'Yes. You get live tracking from the moment your order is picked up to the second it lands at your door. No guessing, no "around the corner" for 40 minutes.',
  },
  {
    question: 'What happens after I join the waitlist?',
    answer:
      'You\'ll receive a confirmation, then a priority early-access invitation the moment we go live in your city. Early members get in before the public.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="bg-[#111211] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 xl:px-0">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-sm uppercase tracking-[0.25em] text-[#D4AF37]">
              FREQUENTLY ASKED
            </p>

            <h2 className="mt-4 font-heading text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl">
              Questions,
              <br />
              answered.
            </h2>

            <p className="mt-6 max-w-lg font-body text-sm leading-7 text-white/45">
              Still curious?{' '}
              <a href="mailto:hello@c-ride.ng" className="text-green-500">
                hello@c-ride.ng
              </a>
            </p>
          </motion.div>

          {/* RIGHT */}
          <div>
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={faq.question} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  >
                    <span className="font-heading font-semibold text-lg text-white/90">
                      {faq.question}
                    </span>

                    <ChevronDown
                      size={16}
                      className={`shrink-0 text-[#D4AF37] transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-5 pr-10 font-body text-sm leading-6 text-white/60">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
