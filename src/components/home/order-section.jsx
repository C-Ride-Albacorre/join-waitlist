import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import food from '../../assets/food.jpg';
import gifts from '../../assets/gifts.jpg';

const orderCards = [
  {
    subTitle: 'Order',
    title: 'Order From Lagos’ Finest',
    description:
      'Verified restaurants, home chefs, grocery stores, and essentials, all in one app. Delivered in a car, temperature controlled, exactly the way it was made.',
    image: food,
    subTitleColor: 'text-[#D4AF37]',
  },
  {
    subTitle: 'Send',
    subTitleColor: 'text-green-500',
    title: 'Send anything that matters',
    description:
      "Documents, gifts, a camera setup, a laptop — whatever you're sending across Lagos rides secure, tracked from pickup to doorstep, handled by verified drivers who treat it like their own.",
    image: gifts,
  },
];

export default function OrderSection() {
  return (
    <section
      id="why-c-ride"
      className="bg-[#e9e9e3] py-20 text-[#151515] sm:py-28"
    >
      <div className="mx-auto max-w-7xl space-y-16 px-6 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-2"
        >
          <p className="font-body text-sm uppercase tracking-[0.25em] text-[#8b761d]">
            WHAT C-RIDE DOES
          </p>

          <h2 className="font-heading text-4xl font-semibold leading-none tracking-tight sm:text-5xl">
            Order what you love.
          </h2>

          <p className="font-serif text-4xl italic text-black">
            Send what matters.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {orderCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-4xl bg-[#111211]"
            >
              {/* Image */}
              <div className="relative aspect-[1.45] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Gradient flows from image into content */}
                <div className="absolute inset-x-0 bottom-0 h-[70%] bg-linear-to-t from-[#111211] via-[#111211]/80 to-transparent" />
              </div>

              {/* Content overlaps the bottom of image */}
              <div className="relative -mt-24 z-10 px-8 pb-8 pt-12">
                <p
                  className={`font-body text-xs uppercase tracking-[0.25em] ${card.subTitleColor}`}
                >
                  {card.subTitle}
                </p>

                <h3 className="font-heading text-3xl font-semibold text-white">
                  {card.title}
                </h3>

                <p className="mt-3 max-w-md font-body text-sm leading-6 text-white/50">
                  {card.description}
                </p>

                <a
                  href="#waitlist"
                  className={`mt-6 inline-flex items-center gap-2 font-body text-sm font-medium transition ${card.subTitleColor} hover:text-[#c19b2e]`}
                >
                  Get Early Access
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
