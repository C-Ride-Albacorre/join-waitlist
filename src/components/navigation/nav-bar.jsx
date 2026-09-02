import { useState } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo-main.svg';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-black/30 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 xl:px-0">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="C-Ride"
              width="120"
              height="48"
              className="select-none"
            />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 lg:flex">
            <ul className="flex items-center gap-7 text-sm font-body text-white/75">
              <li>
                <a
                  href="#why-c-ride"
                  className="transition hover:text-[#D4AF37]"
                >
                  Why C-Ride
                </a>
              </li>

              <li>
                <a href="#faq" className="transition hover:text-[#D4AF37]">
                  FAQ
                </a>
              </li>

              <li>
                <Link to="/vendors" className="transition hover:text-[#D4AF37]">
                  For Vendors
                </Link>
              </li>

              <li>
                <Link to="/drivers" className="transition hover:text-[#D4AF37]">
                  For Drivers
                </Link>
              </li>
            </ul>

            <a
              href="#waitlist"
              className="rounded-md bg-[#D4AF37] px-5 py-3 text-sm font-medium text-black  font-body transition hover:bg-[#c19b2e]"
            >
              Get Early Access
            </a>
          </div>

          {/* Mobile */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="rounded-md border border-white/10 p-2 text-white lg:hidden"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-60 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            <motion.div
              className="fixed right-0 top-0 z-70 h-full w-full max-w-sm bg-[#111211] text-white"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 28,
              }}
            >
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <img
                  src={logo}
                  alt="C-Ride"
                  width="110"
                  height="44"
                />

                <button
                  type="button"
                  onClick={closeMenu}
                  className="rounded-md border border-white/10 p-2"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="px-6 py-6">
                <div className="space-y-1">
                  <MobileLink
                    href="#why-c-ride"
                    label="Why C-Ride"
                    onClick={closeMenu}
                  />

                  <MobileLink href="#faq" label="FAQ" onClick={closeMenu} />

                  <MobileLink
                    href="/vendors"
                    label="For Vendors"
                    onClick={closeMenu}
                    isRoute
                  />

                  <MobileLink
                    href="/drivers"
                    label="For Drivers"
                    onClick={closeMenu}
                    isRoute
                  />
                </div>

                <a
                  href="#waitlist"
                  onClick={closeMenu}
                  className="mt-8 flex w-full items-center justify-center rounded-md bg-[#D4AF37] px-5 py-4 text-sm font-medium text-black font-body transition hover:bg-[#c19b2e]  "
                >
                  Get Early Access
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileLink({ href, label, onClick, isRoute = false }) {
  if (isRoute) {
    return (
      <Link
        to={href}
        onClick={onClick}
        className="flex items-center justify-between border-b border-white/10 py-5 text-sm text-white/80"
      >
        {label}
        <ChevronRight size={17} className="text-[#D4AF37]" />
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center justify-between border-b border-white/10 py-5 text-sm text-white/80"
    >
      {label}
      <ChevronRight size={17} className="text-[#D4AF37]" />
    </a>
  );
}

