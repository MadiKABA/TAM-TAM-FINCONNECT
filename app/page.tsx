import ApprocheSection from "./components/ApprocheSection";
import DefiSection from "./components/DefiSection";
import EventSection from "./components/EventSection";
import Hero from "./components/Hero";
import SolutionSection from "./components/SolutionSection";

export default function Home() {
  return (

    <main className="">
      <Hero />
      <EventSection />
      <DefiSection />
      <SolutionSection />
      <ApprocheSection />
    </main>

  );
}
