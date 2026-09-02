

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    subTitle: 'PREPARATION',
    title: 'Crafted with intent',
    description:
      'Every order begins with your craft. We protect it from the moment it leaves your hands — temperature-controlled, handled with the care a premium product deserves.',
  },
  {
    number: '02',
    subTitle: 'THE HAND-OFF',
    title: 'A network built for the last mile',
    description:
      "Background-checked riders, real-time tracking, and proactive updates. Your customers always know where their order is — and feel confident it's in good hands.",
  },
  {
    number: '03',
    subTitle: 'THE EXPERIENCE',
    title: 'Delivered, unforgettable',
    description:
      'Consistent, safe, premium. The delivery matches the quality of your product — so your reputation only grows with every order that reaches the doorstep.',
  },
];

const images = [
  '/src/assets/restaurant.jpg',
  '/src/assets/lagos-at-night.jpg',
  '/src/assets/food.jpg',
];

export default function ProcessSection() {
  return (
    <section className="bg-[#e9e9e3] py-16 text-[#151515] sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-0">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-body text-[10px] uppercase tracking-[0.25em] text-[#8b761d] sm:text-sm">
              The Logistics Narrative
            </p>

            <h2 className="mt-4 max-w-xl font-heading text-3xl font-semibold leading-[0.98] tracking-tight sm:text-4xl md:text-5xl">
              From your business to
              <br />
              their doorstep —
              <br />
              <span className="font-serif text-3xl font-normal italic sm:text-4xl md:text-5xl">
                every step, by design.
              </span>
            </h2>

            <div className="mt-8 max-w-xl space-y-7 sm:mt-10 sm:space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-[34px_1fr] gap-3 border-b border-black/10 pb-6 last:border-0 sm:grid-cols-[42px_1fr] sm:gap-4 sm:pb-7"
                >
                  <span className="font-body text-3xl font-semibold leading-none text-black/5 sm:text-4xl">
                    {step.number}
                  </span>

                  <div>
                    <p className="mb-2 font-body text-[10px] uppercase tracking-[0.25em] text-[#d4af37] sm:text-xs">
                      {step.subTitle}
                    </p>

                    <h3 className="font-heading text-lg font-semibold sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-md font-body text-sm leading-6 text-black/45">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2"
          >
            {images.map((image, index) => (
              <div
                key={image}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  ${
                    index === 0
                      ? 'sm:col-span-2'
                      : 'sm:col-span-1'
                  }
                `}
              >
                <img
                  src={image}
                  alt=""
                  className={`
                    h-full
                    w-full
                    object-cover
                    brightness-[0.82]
                    transition
                    duration-700
                    group-hover:scale-105

                    /* MOBILE — ALL SAME HEIGHT */
                    aspect-4/3

                    /* DESKTOP */
                    ${
                      index === 0
                        ? 'sm:aspect-16/8'
                        : 'sm:aspect-square'
                    }
                  `}
                />

                {/* Subtle dark overlay */}
                <div className="pointer-events-none absolute inset-0 bg-black/5" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
