import AboutUs from "@/components/home/about/about-us";
import ContactSection from "@/components/home/contact/contact";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services/services";
import Footer from "@/components/partials/footer";
import Navbar from "@/components/partials/navbar";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <ContactSection/>
      <Footer />
    </main>
  )
}

