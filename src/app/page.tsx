import Hero from "./Components/Hero";
import { HomeImagesFilter } from "./Components/HomeImagesFilter";
export default function Home() {
  return (
    <div className="flex flex-col">
      <HomeImagesFilter />
      <Hero />

    </div>
  );
}
