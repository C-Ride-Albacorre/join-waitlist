'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is C-Ride?',
    answer:
      'C-Ride is a delivery platform connecting customers with trusted businesses and a reliable delivery network built for Lagos.',
  },
  {
    question: 'Who can sell on C-Ride?',
    answer:
      'Restaurants, food businesses, grocery stores, retailers, home chefs, and other quality businesses can join the C-Ride network.',
  },
  {
    question: 'What kinds of vendors can join?',
    answer:
      'Restaurants, food businesses, grocery stores, retailers, home chefs, and other quality businesses can join the C-Ride network.',
  },
  {
    question: 'How much does it cost to sell on C-Ride?',
    answer:
      'Pricing will depend on factors such as distance and order type. Final pricing will be available when C-Ride launches.',
  },
  {
    question: 'How do I join the C-Ride vendor waitlist?',
    answer:
      'Join the waitlist and we will reach out when C-Ride is ready for you.',
  },
];

export default function VendorFAQSection() {
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
              Everything a serious vendor needs to know before committing. More
              questions? Reach us at{' '}
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
