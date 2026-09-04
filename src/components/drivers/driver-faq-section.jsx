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
    question: 'Who can deliver on C-Ride?',
    answer:
      "Anyone with a car and a valid driver's license can join the C-Ride network. We welcome drivers who are committed to providing premium delivery experiences.",
  },
  {
    question: 'What are the requirements to become a driver?',
    answer:
      "Drivers must have a valid driver's license, a car in good condition, and pass a background check. We prioritize safety and reliability in our delivery network.",
  },
  {
    question: 'How do I join the C-Ride driver waitlist?',
    answer:
      'Join the waitlist and we will reach out when C-Ride is ready for you. We will provide all the necessary information and steps to get started.',
  },
];

export default function DriverFAQSection() {
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
              <a href="mailto:info@c-ride.co" className="text-green-500">
                info@c-ride.co
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
