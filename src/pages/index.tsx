import AboutUs from "@/components/home/about/about-us";
import BronFormContent from "@/components/home/bron-form";
import TestimonialSlider from "@/components/home/employes";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services/services";
import SupportPages from "@/components/home/support";
import TravelerPages from "@/components/home/traveler";
import RootLayout from "@/components/layout/root";


export default function Home() {
  return (
    <RootLayout>
      <Hero />
      <AboutUs />
      <Services />
      <BronFormContent />
      <SupportPages />
      <TravelerPages />
      <TestimonialSlider />
    </RootLayout>
  )
}

