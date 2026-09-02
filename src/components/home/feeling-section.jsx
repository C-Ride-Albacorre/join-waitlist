import { motion } from 'framer-motion';

export default function FeelingSection() {
  return (
    <section  className="bg-[#111211] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 xl:px-0">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src="/src/assets/lagos-at-night.jpg"
              alt="Lagos at night"
              className="aspect-[1.35] h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute bottom-5 left-5">
              <p className="font-heading text-4xl font-semibold leading-tight text-white/80">
                Less delays.
              </p>

              <p className="font-heading text-4xl font-semibold leading-tight text-[#D4AF37]">
                Better delivery.
              </p>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="max-w-xl space-y-6"
          >
            <h2 className="mt-4 font-heading text-6xl font-semibold leading-[0.95] tracking-tight text-white sm:text-5xl">
              You know the feeling.
            </h2>

            <p className="font-body uppercase tracking-[0.25em] text-[#D4AF37]">
              Delivery in Lagos shouldn't be a gamble.
            </p>

            <p className=" max-w-lg font-body text-sm leading-7 text-white/45">
              The food that arrives cold, scattered, manhandled. The package
              you're nervous to send. The rider who's "around the corner" for 40
              minutes.
            </p>

            <p className=" max-w-lg font-body text-sm leading-7 text-white">
              Delivery in Lagos shouldn't be a gamble. So we're building a
              better way.
            </p>

            <div className="mt-7 h-px w-16 bg-[#D4AF37]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
