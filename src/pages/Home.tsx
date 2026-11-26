import CommitmentsTimeline from '@/components/home/CommitmentsTimeline';
import HeroSection from '@/components/home/HeroSection';
import HistorySection from '@/components/home/HistorySection';
import LocationSection from '@/components/home/LocationSection';
import MetricsBand from '@/components/home/MetricsBand';
import ReviewsSection from '@/components/home/ReviewsSection';
import TourTeaser from '@/components/home/TourTeaser';
import VinotecaSection from '@/components/home/VinotecaSection';
import WinesTeaser from '@/components/home/WinesTeaser';
import CtaBand from '@/components/ui/CtaBand';

function Home() {
  return (
    <>
      <title>Bodega Florio · Maipú, Mendoza, desde 1912</title>
      <HeroSection />
      <HistorySection />
      <CommitmentsTimeline />
      <WinesTeaser />
      <TourTeaser />
      <MetricsBand />
      <ReviewsSection />
      <VinotecaSection />
      <LocationSection />
      <CtaBand
        id="reserva-title"
        title="Vení a conocer Florio."
        text="Recorridos, degustaciones y una mesa con vista a los viñedos te esperan."
        whatsappMessage="Hola, quiero reservar una visita a Bodega Florio."
      />
    </>
  );
}

export default Home;
