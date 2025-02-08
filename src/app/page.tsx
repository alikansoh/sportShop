import Hero from "./Components/Hero";
import PopularItem from "./Components/PopularItem";
import { HomeImagesFilter } from "./Components/HomeImagesFilter";
import Deal from "./Components/Deal.jsx";
export default function Home() {
  return (
    <div className="flex flex-col font-sans">
      <HomeImagesFilter />
      <Hero />
      <PopularItem />

      <Deal />
      <Deal />



    </div>
  );
}
