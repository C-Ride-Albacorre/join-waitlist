import { motion } from 'framer-motion';
import { Input } from '../ui/input';
import { Check, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import SuccessModal from '../ui/success';
import ErrorMessage from '../ui/error';
import lagos from '../../assets/lagos-at-night.jpg';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  city: '',
  excitedToOrder: '',
  useCase: '',
};

export default function WaitlistSection() {
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
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.city.trim()
    ) {
      setError('Please fill in all required fields.');
      setShowError(true);
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address.');
      setShowError(true);
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = {
        fullName: formData.name,
        email: formData.email,
        phoneNumber: formData.phone,
        city: formData.city,
        orderCategory: formData.excitedToOrder,
        purpose: formData.useCase,
      };

      console.log('Submitting:', payload);

      const response = await fetch(
        'https://backend-service-1rc7.onrender.com/api/v1/waitlist/customer',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
          },
          body: JSON.stringify(payload),
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
      {isSuccess && (
        <SuccessModal
          open={isSuccess}
          message={successMessage}
          onClose={() => setIsSuccess(false)}
          onReset={handleReset}
        />
      )}

      <section
        id="waitlist"
        className="relative overflow-hidden bg-[#111211] py-20 sm:py-28"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={lagos}
            alt="Lagos at night"
            aria-hidden="true"
            className="h-full w-full object-cover opacity-20"
          />

          <div className="absolute inset-0 bg-[#111211]/80" />

          <div className="absolute left-[10%] top-[30%] h-87.5 w-87.5 rounded-full bg-[#D4AF37]/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 xl:px-0">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">
            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center gap-3 border border-[#D4AF37] bg-[#D4AF37]/10 rounded-full px-4 py-3 tracking-widest mb-5 w-fit">
                <div className="h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
                <p className=" text-xs uppercase text-[#D4AF37] font-body">
                  GET EARLY ACCESS
                </p>
              </div>

              <h2 className="mt-4 font-heading text-5xl font-semibold leading-[0.9] tracking-tighter text-white sm:text-6xl">
                Be first
                <br />
                <span className="text-[#D4AF37]">when we go live.</span>
              </h2>

              <p className="mt-7 max-w-md font-body leading-7 text-white/45">
                We're launching soon in Lagos, and early access members get in
                before everyone else. Join the waitlist and we'll reach out the
                moment we're ready.
              </p>

              <div className="mt-7 space-y-4">
                {['Early access', 'Launch updates', 'Exclusive offers'].map(
                  (item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 font-body text-sm text-white/90"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10">
                        <Check size={12} className="text-green-500" />
                      </div>
                      {item}
                    </div>
                  ),
                )}
              </div>
            </motion.div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 bg-black/40 p-5 backdrop-blur-md"
            >
              <div className="mb-6">
                <p className="font-body text-[10px] uppercase tracking-[0.2em] text-[#D4AF37]">
                  Get Early Access
                </p>

                <h3 className="mt-1 font-heading text-xl font-semibold text-white/80">
                  Join the waitlist
                </h3>
              </div>

              <form className="space-y-3" onSubmit={handleSubmit}>
                {showError && <ErrorMessage message={error} />}

            
                <Input
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  type="text"
                />

                <Input
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  type="email"
                />

                <Input
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  maxLength={15}
                  type="tel"
                />

                <Input
                  placeholder="City"
                  value={formData.city}
                  onChange={(e) =>
                    setFormData({ ...formData, city: e.target.value })
                  }
                  type="text"
                />

                <Input
                  placeholder="I am most excited to order?"
                  value={formData.excitedToOrder}
                  onChange={(e) =>
                    setFormData({ ...formData, excitedToOrder: e.target.value })
                  }
                  type="text"
                />

                <Input
                  placeholder="I'd use C-Ride for..."
                  value={formData.useCase}
                  onChange={(e) =>
                    setFormData({ ...formData, useCase: e.target.value })
                  }
                  type="text"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-3 w-full rounded-md bg-[#D4AF37] py-3 text-sm font-medium uppercase tracking-wide text-black transition hover:bg-[#c19b2e] font-body cursor-pointer disabled:cursor-not-allowed disabled:opacity-60
          "
                >
                  {isSubmitting ? 'Submitting...' : 'Secure my spot'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
