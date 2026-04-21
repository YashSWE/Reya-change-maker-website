import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { Curriculum } from "@/components/Curriculum";
import { Perks } from "@/components/Perks";
import { Facilitator } from "@/components/Facilitator";
import { Testimonials } from "@/components/Testimonials";
import { Details } from "@/components/Details";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Mission />
      <Curriculum />
      <Perks />
      <Facilitator />
      <Testimonials />
      <Details />
      <Footer />
    </main>
  );
}
