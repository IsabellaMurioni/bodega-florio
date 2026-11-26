import CommitmentsTimeline from '@/components/home/CommitmentsTimeline';
import HeroSection from '@/components/home/HeroSection';
import HistorySection from '@/components/home/HistorySection';
import LocationSection from '@/components/home/LocationSection';
import MetricsBand from '@/components/home/MetricsBand';
import ReservationCta from '@/components/home/ReservationCta';
import ReviewsSection from '@/components/home/ReviewsSection';
import TourTeaser from '@/components/home/TourTeaser';
import VinotecaSection from '@/components/home/VinotecaSection';
import WinesTeaser from '@/components/home/WinesTeaser';

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
      <ReservationCta />
    </>
  );
}

export default Home;
