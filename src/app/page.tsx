import Hero from "./Components/Hero";
import PopularItem from "./Components/PopularItem";
import { HomeImagesFilter } from "./Components/HomeImagesFilter";
export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeImagesFilter />
      <Hero />
      <PopularItem />



    </div>
  );
}
