import { gsap } from 'gsap';
import { useCallback } from 'react';

import s from './styles.module.scss';
import { getDelay } from '../../utils/uiHelper';
import useSplitType from '../../hooks/useSpitType';

export default function useParagraphLineMask({
  refContent,
  delayTrigger,
  delayEnter,
  duration,
}) {
  const { splitter } = useSplitType({
    refTarget: refContent,
    types: 'lines,words,chars',
  });

  const pageHide = useCallback(() => {
    splitter?.lines && gsap.set(splitter.words, { y: '100%', overwrite: 'auto' });
  }, [splitter]);

  const animationIn = useCallback(
    (delayIn) => {
      const delay = getDelay({ refContentCurrent: refContent.current, delayEnter, delayTrigger });

      splitter?.lines?.length &&
        splitter?.lines?.forEach((line, key) => {
          const words = line.querySelectorAll('.word');
          gsap.to(words, {
            y: '0%',
            delay: (delayIn || delay) + key / 10,
            ease: 'power3.out',
            duration: 1.2,
            stagger: 0.015,
          });
        });
    },
    [delayEnter, delayTrigger, refContent, splitter]
  );

  const animationOut = useCallback(() => {
    splitter?.lines?.length &&
      gsap.to(splitter.lines, {
        scrollTrigger: refContent.current,
        stagger: 0.15,
        y: '0%',
        ease: 'power3.out',
        duration: duration || 1.2,
      });
  }, [refContent, splitter]);

  refContent.current?.classList.add(s.LineMask);
  return { animationHide: pageHide, animationIn, animationOut };
}
