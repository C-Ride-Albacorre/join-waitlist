import Hero from "../components/home/hero";
import FeelingSection from "../components/home/feeling-section";
import OrderSection from "../components/home/order-section";
import VerifiedSection from "../components/home/verified-section";
import FAQSection from "../components/home/faq-section";
import WaitlistSection from "../components/home/waitlist-section";


export default function Home() {
  return (
    <>
      <Hero />
      <FeelingSection />
      <OrderSection />
      <VerifiedSection />
      <FAQSection />
      <WaitlistSection />
    </>
  );
}
