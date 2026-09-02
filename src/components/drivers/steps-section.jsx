import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    action: 'SIGN UP',
    title: 'Join the network',
    description:
      "Join the waitlist and we'll reach out with onboarding details as we approach launch — background checks and the essentials, handled properly.",
    image: '/src/assets/delivery.jpg',
  },
  {
    number: '02',
    action: 'DRIVE',
    title: 'Move with purpose',
    description:
      'Accept premium deliveries on your schedule. Real-time tracking, proactive updates, and a network that respects the work you do.',
    image: '/src/assets/car-driver.jpg',
  },
  {
    number: '03',
    action: 'CARE',
    title: 'Deliver the experience',
    description:
      "Every order is someone's reputation on the doorstep. You carry it with care — temperature-controlled, safe, and presented like it matters.",
    image: '/src/assets/parcel.jpg',
  },
];

export default function StepsSection() {
  return (
    <section id="steps" className="bg-[#111211] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-6 xl:px-0">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="font-body text-xs uppercase tracking-[0.25em] text-green-500">
            HOW IT WORKS
          </p>

          <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight sm:text-5xl">
            Three steps to riding with CRide.
          </h2>
        </motion.div>

        {/* CARDS */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#171817]"
            >
              {/* IMAGE */}
              <div className="relative aspect-[1.65] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  className="h-full w-full object-cover brightness-[0.7] transition duration-700 hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3">
                  <h4 className="font-heading text-4xl font-semibold text-[#D4AF37]/5">
                    {step.number}
                  </h4>

                  <p className="font-body text-sm font-medium text-[#D4AF37]">
                    {step.action}
                  </p>
                </div>

                <h3 className="font-heading text-2xl font-medium text-white/70">
                  {step.title}
                </h3>

                <p className="mt-3 font-body text-sm leading-6 text-white/40">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
