import EnoturismoSplit from '@/components/home/EnoturismoSplit';
import GastronomyCollage from '@/components/home/GastronomyCollage';
import HomeHero from '@/components/home/HomeHero';
import HomeReviews from '@/components/home/HomeReviews';
import PassionBand from '@/components/home/PassionBand';
import WineLines from '@/components/home/WineLines';

function Home() {
  return (
    <>
      <title>Bodega Florio</title>
      <HomeHero />
      <EnoturismoSplit />
      <WineLines />
      <PassionBand />
      <GastronomyCollage />
      <HomeReviews />
    </>
  );
}

export default Home;
