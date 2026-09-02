import { Mail, MapPin, Phone } from 'lucide-react';

import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/svg/logo-main.svg';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#111211] text-white font-body">
      <div className="mx-auto max-w-7xl px-6 py-14 xl:px-0">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* BRAND */}
          <div className="lg:col-span-2">
            <img
              src={logo}
              alt="C-Ride"
              width="100"
              height="40"
            />

            <p className="mt-4 max-w-xs font-body text-sm leading-6 text-white/35">
              Beyond delivery, it&apos;s care.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                className="rounded-full border border-white/10 p-2.5 text-white/50 transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
              >
                <FaInstagram size={18} />
              </a>

              {/* <a
                href="https://www.instagram.com/c_rideofficial/"
                target='_blank' rel='noopener noreferrer'
                className="rounded-full border border-white/10 p-2.5 text-white/50 transition hover:border-[#D4AF37]/50 hover:text-[#D4AF37]"
              >
                <FaLinkedinIn size={18} />
              </a> */}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-body text-sm font-semibold text-white">
              Company
            </h4>

            <ul className="mt-5 space-y-3 font-body text-sm text-white/60">
              <li>
                <a href="#faqs" className="hover:text-white">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#why-c-ride" className="hover:text-white">
                  Why C-Ride
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="font-body text-sm font-semibold text-white">
              Services
            </h4>

            <ul className="mt-5 space-y-3 font-body text-sm text-white/60">
              <li>
                <Link to="/" className="hover:text-white">
                  Customers
                </Link>
              </li>

              <li>
                <Link to="/vendors" className="hover:text-white">
                  Vendors
                </Link>
              </li>

              <li>
                <Link to="/drivers" className="hover:text-white">
                  Drivers
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="font-body text-sm font-semibold text-white">
              Contact
            </h4>

            <ul className="mt-5 space-y-4 font-body text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Mail size={13} className="text-[#D4AF37]" />
                hello@c-ride.co
              </li>

              <li className="flex items-center gap-2">
                <Phone size={13} className="text-[#D4AF37]" />
                +234 703 110 9145
              </li>

              <li className="flex items-start gap-2">
                <MapPin size={13} className="mt-0.5 shrink-0 text-[#D4AF37]" />

                <span>
                  1b, Chidi&apos;s Court,
                  <br />
                  Cluster One Estate,
                  <br />
                  Ikota, Lagos
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 border-t border-white/10 pt-6">
          <div className="flex flex-col justify-between gap-4 font-body text-xs text-white/45 md:flex-row">
            <p>© 2026 C-Ride. All rights reserved.</p>

            <div className="flex gap-5">
              <span className="text-green-500">Designed Sustainably</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
