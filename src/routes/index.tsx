import { createFileRoute } from "@tanstack/react-router";
import { useRef } from "react";
import Navbar from "@/components/site/Navbar";
import HeroSection from "@/components/site/HeroSection";
import AboutSection from "@/components/site/AboutSection";
import ServicesSection from "@/components/site/ServicesSection";
import GallerySection from "@/components/site/GallerySection";
import BookingSection from "@/components/site/BookingSection";
import Footer from "@/components/site/Footer";

const title = "Barbershop — Barbearia Premium em São Paulo";
const description =
  "Barbearia premium em São Paulo: cortes clássicos, barba e tratamentos capilares. Agende seu horário online em poucos segundos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const bookingRef = useRef<HTMLDivElement>(null);

  const handleBookingClick = () => {
    const bookingElement = document.querySelector("#booking");
    if (bookingElement) {
      bookingElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar onBookingClick={handleBookingClick} />
      <main>
        <HeroSection onBookingClick={handleBookingClick} />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <div ref={bookingRef}>
          <BookingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
