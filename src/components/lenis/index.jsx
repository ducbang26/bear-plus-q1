import gsap from "gsap";
import ReactLenis from "lenis/react";
import React, { useEffect, useRef } from "react";

export const LenisScroll = ({ children }) => {
  const lenisRef = useRef();


  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  }, []);

  return (
    <ReactLenis root ref={lenisRef} autoRaf={false}>
      {children}
    </ReactLenis>
  );
};
