import { useState } from "react";
import About from "./components/About/About";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Products from "./components/Products/Products";
import { LenisScroll } from "./components/lenis";
import { useAnimationStore } from "./store/animation";
import PageLoader from "./components/PageLoader";

function App() {
  const [isActive, setIsActive] = useState(false);
  const { isLoaded, onCompleteLoaded } = useAnimationStore();

  return (
    <LenisScroll>
      <PageLoader isLoaded={isLoaded} onCompleted={onCompleteLoaded} />
      <Cursor isActive={isActive}/>
      <Navigation />
      <Hero />
      <About />
      <Products />
    </LenisScroll>
  );
}

export default App;
