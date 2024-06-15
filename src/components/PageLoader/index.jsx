import { useGSAP } from "@gsap/react";
import { signal } from "@preact/signals-react";
import { gsap } from "gsap";
import React, { useRef } from "react";

import s from "./styles.module.scss";
import { useAnimationStore } from "../../store/animation";

export default function PageLoader({ isLoaded, onCompleted }) {
  const progress = signal(0);
  const refContent = useRef(null);
  const textRef = useRef(null);
  const { setIsFirstLoad } = useAnimationStore();
  useGSAP(() => {
    if (isLoaded && refContent.current) {
      const tl = gsap.timeline();
      const textAnimation = tl.to(textRef.current, {
        y: "0%",
        opacity: 1,
        delay: 0.5,
        ease: "power4.out",
        duration: 0.5,
      });

      const progressAnimation = tl.to(progress, {
        value: 100,
        duration: 1,
        ease: "linear",
        onUpdate: () => {
          const newProgress = Math.round(progress.value);
          if (textRef.current) {
            textRef.current.textContent = `${newProgress}`;
          }
        },
        onComplete: () => {
          if (refContent.current) {
            gsap.to(refContent.current, {
              opacity: 0,
              delay: 1,
              duration: 0.5,
              onComplete: () => {
                setIsFirstLoad();
                refContent.current?.remove();
                setTimeout(() => onCompleted(), 200);
              },
            });
          }
        },
      });

      return () => {
        textAnimation.revert();
        progressAnimation.revert();
      };
    }
  }, [isLoaded, onCompleted]);

  return (
    <div className={s.pageLoader} ref={refContent}>
      <div className={s.pageLoader_inner}>
        <div className={s.wrapper_img}>
          <img src="/logo-type-loader.png" alt="logo-type-loader" />
        </div>
        <h1 className={s.pageLoader_inner_text} ref={textRef}>
          0
        </h1>
      </div>
    </div>
  );
}
