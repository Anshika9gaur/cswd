
import { Herosection } from "@/components/herosection";
import { HeadSection } from "@/components/headsection";
import { CardHover } from "@/components/hover";
import { MovingCards } from "@/components/movingCard";
import { SponsorSection } from "@/components/SponsorSection";


export default function Home() {
  return (
    <>
      <Herosection />
      <CardHover />
      <MovingCards />
      <HeadSection />
      <SponsorSection />
      
    </>
  );
}
