import ApprocheSection from "./components/ApprocheSection";
import DefiSection from "./components/DefiSection";
import EventSection from "./components/EventSection";
import Hero from "./components/Hero";
import PartenairesSection from "./components/PartenairesSection";
import ReservationSection from "./components/ReservationSection";
import SolutionSection from "./components/SolutionSection";
import VisionnairesSection from "./components/VisionnairesSection";

export default function Home() {
  return (

    <main className="">
      <Hero />
      <EventSection />
      <DefiSection />
      <SolutionSection />
      <ApprocheSection />
      <VisionnairesSection />
      <PartenairesSection />
      <ReservationSection />
    </main>

  );
}
