import { useRef } from "react";
import About from "./components/About/About";
import Cursor from "./components/Cursor/Cursor";
import Hero from "./components/Hero/Hero";
import Navigation from "./components/Navigation/Navigation";
import Products from "./components/Products/Products";
import { LenisScroll } from "./components/lenis";
import { useAnimationStore } from "./store/animation";
import PageLoader from "./components/PageLoader";
import ScrollSpy from "react-scrollspy-navigation";

function App() {
  const { isLoaded, onCompleteLoaded } = useAnimationStore();
  const stickyElement = useRef(null);

  return (
    <LenisScroll>
      <PageLoader isLoaded={isLoaded} onCompleted={onCompleteLoaded} />
      <Cursor stickyElement={stickyElement} />
      <Navigation />
      <Hero ref={stickyElement} />
      <About />
      <Products />
    </LenisScroll>
  );
}

export default App;
