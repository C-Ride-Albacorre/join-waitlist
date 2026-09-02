import DriverFAQSection from '../components/drivers/driver-faq-section';
import DriverHero from '../components/drivers/hero';
import StandardSection from '../components/drivers/standard-section';
import StepsSection from '../components/drivers/steps-section';
import WaitlistSection from '../components/drivers/waitlist-section';

export default function Drivers() {
  return (
    <>
      <DriverHero />
      <StandardSection />
      <StepsSection />

      <DriverFAQSection />
      <WaitlistSection />
    </>
  );
}
