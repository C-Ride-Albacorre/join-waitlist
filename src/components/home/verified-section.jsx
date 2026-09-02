import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Verified shops & brands',
    desc: 'Discover businesses on C-Ride with confidence.',
    subdesc: 'EVERY STOREFRONT.',
    accent: 'VERIFIED.',
    image: '/src/assets/restaurant.jpg',
    className: 'md:col-span-4 md:row-span-2',
    layout: 'horizontal',
  },

  {
    title: 'Carried in a car',
    desc: 'A more controlled way to move your order through Lagos.',
    accent: 'In a car',
    subdesc: 'NOT ON A BIKE',
    image: '/src/assets/car.jpg',
    className: 'md:col-span-2 md:row-span-2',
    layout: 'vertical',
    borderClassName: 'border-t border-white/10',
  },

  {
    title: 'Temperature controlled',
    desc: 'Your food arrives the way it left the kitchen.',
    accent: 'Just right',
    subdesc: 'EVERY ORDER',
    image: '/src/assets/food.jpg',
    className: 'md:col-span-2 md:row-span-2',
    layout: 'vertical',
    borderClassName: 'border-t border-white/10',
  },

  {
    title: 'Tracked, pickup to doorstep',
    desc: "Get your order tracked in real-time.",
    accent: 'Live',
    subdesc: 'PICKUP TO DOOR',
    image: '/src/assets/lagos-at-night.jpg',
    className: 'md:col-span-2 md:row-span-2',
    layout: 'vertical',
    borderClassName: 'border-t border-white/10',
  },

  {
    title: 'Thoughtful delivery',
    desc: 'Your order is handled by verified drivers who treat it like their own.',
    subdesc: 'EVERY DELIVERY.',
    accent: 'Live.',
    image: '/src/assets/gifts.jpg',
    className: 'md:col-span-2 md:row-span-2',
    layout: 'vertical',
    borderClassName: 'border-t border-white/10',
  },
];

export default function VerifiedSection() {
  return (
    <section
      id="vendors"
      className="bg-[#111211] py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 xl:px-0">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="font-body text-[9px] uppercase tracking-[0.25em] text-green-500 sm:text-[10px]">
              WHY C-RIDE
            </p>

            <h2 className="mt-3 max-w-xl font-heading text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              Delivery that treats your order{' '}
              <span className="text-[#D4AF37]">
                like it's its own.
              </span>
            </h2>
          </div>
        </motion.div>

        {/* Cards */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-8
            sm:mt-10
            sm:grid-cols-2
            md:auto-rows-60
            md:grid-cols-4
          "
        >
          {cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5,
              }}
              className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                sm:rounded-4xl
                ${card.className || ''}
              `}
            >
              {card.layout === 'horizontal' ? (
                /*
                  FIRST CARD

                  Desktop:
                  Image | Text

                  Mobile / Tablet:
                  Image
                  Text
                */
                <div
                  className="
                    flex
                    h-auto
                    min-h-130
                    flex-col
                    md:h-full
                    md:min-h-0
                    md:flex-row
                  "
                >
                  {/* Image */}
                  <div
                    className="
                      relative
                      h-70
                      min-h-0
                      overflow-hidden
                      sm:h-80
                      md:h-full
                      md:flex-1
                    "
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        brightness-[0.72]
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* Subtle image overlay */}
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* Text */}
                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      justify-center
                      bg-black/20
                      p-6
                      sm:p-8
                      md:p-10
                      lg:p-12
                    "
                  >
                    <div className="space-y-3">
                      <h1
                        className="
                          font-heading
                          text-2xl
                          font-semibold
                          leading-tight
                          text-white/90
                          sm:text-3xl
                        "
                      >
                        {card.title}
                      </h1>

                      <p
                        className="
                          max-w-md
                          font-body
                          text-sm
                          leading-relaxed
                          text-white/50
                          sm:text-base
                        "
                      >
                        {card.desc}
                      </p>
                    </div>

                    <div
                      className={`
                        mt-8
                        space-y-2
                        sm:mt-10
                        md:mt-12
                        ${card.borderClassName || ''}
                      `}
                    >
                      <h4
                        className="
                          font-heading
                          text-3xl
                          font-semibold
                          text-[#D4AF37]
                          sm:text-4xl
                        "
                      >
                        {card.accent}
                      </h4>

                      <p
                        className="
                          font-body
                          text-[10px]
                          tracking-[0.2em]
                          text-white/45
                          sm:text-xs
                        "
                      >
                        {card.subdesc}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                /*
                  VERTICAL CARDS

                  Desktop:
                  Image
                  Text

                  Mobile:
                  Image
                  Text
                */
                <div
                  className="
                    flex
                   min-h-135
                    flex-col
                    md:h-full
                    md:min-h-0
                  "
                >
                  {/* Image */}
                  <div
                    className="
                      relative
                     h-62.5
                      min-h-0
                      shrink-0
                      overflow-hidden
                   sm:h-70
                      md:h-1/2
                    "
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="
                        h-full
                        w-full
                        object-cover
                        brightness-[0.72]
                        transition
                        duration-700
                        group-hover:scale-105
                      "
                    />

                    {/* Subtle image overlay */}
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* Text */}
                  <div
                    className="
                      flex
                      flex-1
                      flex-col
                      justify-center
                      bg-black/20
                      p-6
                      sm:p-7
                      md:p-6
                      lg:p-8
                    "
                  >
                    <div className="space-y-2">
                      <h1
                        className="
                          font-heading
                          text-2xl
                          font-semibold
                          leading-tight
                          text-white/90
                          sm:text-3xl
                        "
                      >
                        {card.title}
                      </h1>

                      <p
                        className="
                          font-body
                          text-sm
                          leading-relaxed
                          text-white/50
                          sm:text-base
                          md:text-sm
                        "
                      >
                        {card.desc}
                      </p>
                    </div>

                    <div
                      className={`
                        mt-6
                        space-y-2
                        border-white/10
                        pt-5
                        sm:mt-7
                        sm:pt-6
                        ${card.borderClassName || ''}
                      `}
                    >
                      <h4
                        className="
                          font-heading
                          text-3xl
                          font-semibold
                          leading-none
                          text-[#D4AF37]
                          sm:text-4xl
                        "
                      >
                        {card.accent}
                      </h4>

                      <p
                        className="
                          font-body
                          text-[10px]
                          tracking-[0.2em]
                          text-white/45
                          sm:text-xs
                        "
                      >
                        {card.subdesc}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
