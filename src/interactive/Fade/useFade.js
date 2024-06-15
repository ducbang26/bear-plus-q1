import { gsap } from 'gsap';
import { useEffect } from 'react';
import { useAnimationStore } from '../../store/animation';
import { useIsDesktop } from '../../hooks/useWindowResize';
import { getDelay } from '../../utils/uiHelper';


export default function useFade({
  refContent,
  direction = 'none',
  delayTrigger,
  delayEnter,
  duration = 0.8,
  from = '100%',
  isObserver,
  isMobile,
}) {
  const { isPageLeave, isPageEnter } = useAnimationStore();
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (isMobile && !isDesktop) {
      return;
    }

    if (!refContent.current) return;

    const gsapContext = gsap.context(() => {
      let options = { opacity: 0 };

      if (direction === 'left') options = { ...options, ...{ x: `-${from}` } };
      if (direction === 'right') options = { ...options, ...{ x: `${from}` } };
      if (direction === 'top') options = { ...options, ...{ y: `-${from}` } };
      if (direction === 'bottom') options = { ...options, ...{ y: `${from}` } };

      gsap.set(refContent.current, options);
    }, [refContent]);

    return () => gsapContext.revert();
  }, [direction, from, refContent, isPageLeave, isDesktop]);

  useEffect(() => {
    if (isMobile && !isDesktop) {
      return;
    }
    if (!refContent.current) return;

    const gsapContext = gsap.context(() => {
      const animationIn = (scrollTrigger) => {
        const delay = getDelay({
          refContentCurrent: refContent.current,
          delayEnter,
          delayTrigger,
        });

        let options = {
          scrollTrigger,
          opacity: 1,
          delay,
          ease: 'power3.out',
          duration,
        };

        if (direction === 'left') options = { ...options, ...{ x: 0 } };
        if (direction === 'right') options = { ...options, ...{ x: 0 } };
        if (direction === 'top') options = { ...options, ...{ y: 0 } };
        if (direction === 'bottom') options = { ...options, ...{ y: 0 } };
        gsap.to(refContent.current, options);
      };

      if (!isObserver) {
        isPageEnter && animationIn(refContent.current);
      } else {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            animationIn(null);
            refContent.current && observer?.unobserve(refContent.current);
            observer?.disconnect();
          }
        });

        isPageEnter && refContent.current && observer?.observe(refContent.current);
      }
    }, [refContent]);

    return () => gsapContext.revert();
  }, [
    duration,
    delayEnter,
    delayTrigger,
    direction,
    isPageEnter,
    refContent,
    isObserver,
    isDesktop,
  ]);
}
