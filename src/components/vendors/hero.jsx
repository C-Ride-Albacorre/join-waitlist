import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Input } from '../ui/input';
import ErrorMessage from '../ui/error';
import SuccessMessage from '../ui/success';
import { useState } from 'react';
import SuccessModal from '../ui/success';
import restaurant from '../../assets/restaurant.jpg';

export default function VendorHero() {
  return (
    <section
      id="waitlist"
      className="relative min-h-180 overflow-hidden bg-[#111211]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={restaurant}
          alt="restaurant"
          aria-hidden="true"
          className="h-full w-full object-cover object-center"
        />

        {/* Overall dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Left side darkening - keeps text readable */}
        <div className="absolute inset-0 bg-linear-to-r from-[#111211]/95 via-[#111211]/70 to-[#111211]/20" />

        {/* Bottom fade */}
        <div className="absolute inset-0 bg-linear-to-t from-[#111211] via-transparent to-black/20" />

        {/* Subtle green glow */}
        <div className="absolute right-[10%] top-[25%] h-100 w-100 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto flex min-h-180 max-w-7xl items-center px-6 py-32 xl:px-0">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2 ">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <h1 className="text-5xl font-heading font-semibold leading-[0.95] tracking-tighter sm:text-6xl lg:text-7xl text-white">
              Grow Your Business with Delivery You Can
              <br />
              <span className="text-[#D4AF37]">Finally Trust.</span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/55 sm:text-base font-body">
              Protect your reputation, reach thousands of local customers, and
              eliminate delivery drama. Join Nigeria's first curated
              multi-vehicle commerce and fulfillment ecosystem.
            </p>

            <a
              href="#waitlist"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#D4AF37] px-5 py-3 text-sm font-medium font-body text-black transition hover:bg-[#c19b2e] cursor-pointer"
            >
              Get Early Access
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </motion.div>

          {/* FORM */}

          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}

const initialFormData = {
  name: '',
  businessName: '',
  workEmail: '',
  phoneNumber: '',
  businessType: '',
  businessAddress: '',
};

function WaitlistForm() {
  const [formData, setFormData] = useState(initialFormData);

  const [error, setError] = useState('');

  const [showError, setShowError] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [isSuccess, setIsSuccess] = useState(false);

  const [successMessage, setSuccessMessage] = useState('');

  const handleReset = () => {
    setFormData(initialFormData);
    setError('');
    setShowError(false);
    setSuccessMessage('');
    setIsSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setShowError(false);

    if (
      !formData.name.trim() ||
      !formData.workEmail.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.businessAddress.trim()
    ) {
      setError('Please fill in all required fields.');
      setShowError(true);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      setError('Please enter a valid email address.');
      setShowError(true);
      return;
    }

    try {
      setIsSubmitting(true);

      console.log('Submitting:', formData);

      const response = await fetch(
        'https://backend-service-1rc7.onrender.com/api/v1/waitlist/vendor',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      console.log('API response:', data);

      if (!response.ok) {
        throw new Error(
          data?.message || 'Failed to submit form. Please try again.',
        );
      }

      // API returned 201
      setSuccessMessage(
        `Thanks, ${formData.name.split(' ')[0]}. You're officially on the C-Ride waitlist.`,
      );

      setIsSuccess(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error('Waitlist submission error:', error);

      setError(
        error instanceof Error
          ? error.message
          : 'An error occurred. Please try again.',
      );

      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.7 }}
        className="mx-auto w-full max-w-md rounded-xl border border-white/10 bg-black/30 p-5 backdrop-blur-md space-y-5"
      >
        <div className="space-y-1">
          <p className="text-[10px] tracking-widest uppercase text-green-600 font-body ">
            Get Early Access
          </p>
          <p className="text-xl font-heading font-semibold text-white/70">
            Join the Vendor Waitlist
          </p>

          <p className="text-xs leading-5 text-white/30 font-body">
            Pioneer access — first in line when we launch.
          </p>
        </div>

        <form className="space-y-3" onSubmit={handleSubmit}>
          {showError && <ErrorMessage message={error} />}

          {isSuccess && <SuccessModal message={successMessage} />}
          <Input
            placeholder="Full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
          />

          <Input
            placeholder="Email address"
            value={formData.workEmail}
            onChange={(e) =>
              setFormData({ ...formData, workEmail: e.target.value })
            }
            type="email"
          />

          <Input
            placeholder="Phone number"
            value={formData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...formData, phoneNumber: e.target.value })
            }
            maxLength={15}
            type="tel"
          />

          <Input
            placeholder="Business Name"
            value={formData.businessName}
            onChange={(e) =>
              setFormData({ ...formData, businessName: e.target.value })
            }
            type="text"
          />

          <Input
            placeholder="Business Type (e.g., Restaurant, Retail, etc.)"
            value={formData.businessType}
            onChange={(e) =>
              setFormData({ ...formData, businessType: e.target.value })
            }
            type="text"
          />

          <Input
            placeholder="Business Address"
            value={formData.businessAddress}
            onChange={(e) =>
              setFormData({ ...formData, businessAddress: e.target.value })
            }
            type="text"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-3 w-full rounded-md bg-[#D4AF37] py-3 text-sm font-medium uppercase tracking-wide text-black transition hover:bg-[#c19b2e] font-body cursor-pointer disabled:cursor-not-allowed disabled:opacity-60
 "
          >
            {isSubmitting ? 'Submitting...' : 'Join Vendor Waitlist'}
          </button>
        </form>
      </motion.div>
    </>
  );
}
