import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import { useAnimationStore } from '../../store/animation';
import useParagraphLineMask from './useParagraphLineMask';


export default function ParagraphLineMask({
  children,
  delayEnter,
  delayTrigger,
  duration,
}) {
  const refContent = useRef(null);
  const { isPageLeave, isPageEnter } = useAnimationStore();

  const { animationIn, animationHide } = useParagraphLineMask({
    refContent,
    delayTrigger,
    delayEnter,
    duration,
  });

  useEffect(() => {
    animationHide();
  }, [animationHide, isPageLeave]);

  useEffect(() => {
    const gsapContext = gsap.context(() => {
      isPageEnter &&
        ScrollTrigger.create({
          trigger: refContent.current,
          start: '+=20% bottom',
          onEnter: () => animationIn(),
          once: true,
        });
    }, [refContent]);

    return () => gsapContext.revert();
  }, [animationIn, isPageEnter]);

  if (!React.isValidElement(children)) {
    return <div>Error: Invalid children element</div>;
  }

  return React.cloneElement(children, { ...{ ref: refContent } });
}
