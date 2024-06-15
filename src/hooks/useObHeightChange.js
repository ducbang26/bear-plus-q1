import { useCallback, useMemo, useRef, useState } from 'react';
import { debounce } from '../utils/uiHelper';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';

export default function useObHeightChange() {
  const [scrollHeight, setScrollHeight] = useState(0);
  const refCurrentHeight = useRef(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedResize = useCallback(
    debounce(() => {
      if (refCurrentHeight.current === document?.body.scrollHeight) return;
      refCurrentHeight.current = Math.floor(document?.body.scrollHeight);
      setScrollHeight(Math.floor(document?.body.scrollHeight));
    }, 350),
    []
  );

  const resizeObserver = useMemo(() => {
    if (typeof window !== 'undefined') return new ResizeObserver(debouncedResize);
  }, [debouncedResize]);

  useIsomorphicLayoutEffect(() => {
    refCurrentHeight.current = document?.body.scrollHeight;
    resizeObserver?.observe(document.body);
    return () => {
      resizeObserver?.disconnect();
    };
  }, [resizeObserver]);

  return { scrollHeight };
}
