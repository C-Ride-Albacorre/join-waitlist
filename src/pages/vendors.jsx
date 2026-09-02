import VendorHero from '../components/vendors/hero';
import ProcessSection from '../components/vendors/process-section';
import ReasonsSection from '../components/vendors/reasons-section';
import VendorFAQSection from '../components/vendors/vendor-faq-section';
import PriorityAccessSection from '../components/vendors/priority-access-section';

export default function Vendors() {
  return (
    <>
      <VendorHero />
      <ProcessSection />
      <ReasonsSection />
      <VendorFAQSection />
      <PriorityAccessSection />
    </>
  );
}
