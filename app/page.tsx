
import { Herosection } from "@/components/herosection";
import { HeadSection } from "@/components/headsection";
import { CardHover } from "@/components/hover";
import { MovingCards } from "@/components/movingCard";


export default function Home() {
  return (
    <>
      <Herosection />
      <CardHover />
      <MovingCards />
      <HeadSection />
      
    </>
  );
}
