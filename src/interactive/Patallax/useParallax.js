import { useCallback, useRef } from "react";
import { MathMap } from "../../utils/uiHelper";
import { useLenis } from "lenis/react";

export default function useParallax({
    refContent,
    refWrap,
    offset = 0.1,
    max,
    min,
  }) {
    const refOptions = useRef({
      isFirstRender: false,
    });
    const runParallax = useCallback(() => {
      const rectWrap = refWrap.current?.getBoundingClientRect();
      if (!rectWrap) return;
      const { innerHeight: height } = window;
  
      const rageTrigger = MathMap(
        height + rectWrap.height / 2,
        height,
        0,
        -height / 2,
        height / 2
      );
      const centerWrap = rectWrap.top + rectWrap.height / 2;
  
      let dis = MathMap(centerWrap, height, 0, -height / 2, height / 2);
      if (Math.abs(dis) >= Math.abs(rageTrigger)) {
        if (!refOptions.current.isFirstRender && refContent.current) {
          refContent.current.style.transform = `translate3d(0px, ${
            rageTrigger * offset
          }px, 0px)`;
          refOptions.current.isFirstRender = true;
        }
        return;
      }
  
      if (min !== undefined) {
        dis = Math.min(dis, min);
      }
      if (max !== undefined) {
        dis = Math.max(dis, max);
      }
  
      if (refContent.current) {
        refContent.current.style.transform = `translate3d(0px, ${
          dis * offset
        }px, 0px)`;
        refContent.current.style.backfaceVisibility = `hidden`;
        refContent.current.style.willChange = `transform`;
        refContent.current.style.inset = `0px`;
      }
    }, [max, min, offset, refContent, refWrap]);
  
    useLenis(runParallax, []);
  }