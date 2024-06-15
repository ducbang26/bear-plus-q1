import { useComputed, useSignal, useSignalEffect } from '@preact/signals-react';
import { useState } from 'react';
import { useIsomorphicLayoutEffect } from './useIsomorphicLayoutEffect';
import { debounce } from '../utils/uiHelper';

const useWindowResize = () => {
  const width = useSignal(0);
  const height = useSignal(0);
  const scrollHeight = useSignal(0);
  const listener = () => {
    width.value = window.innerWidth || document.body.clientWidth || 0;
    height.value = window.innerHeight || document.body.clientHeight || 0;
    scrollHeight.value = document.body.scrollHeight;
  };

  const deBounceListener = debounce(listener, 150);
  useIsomorphicLayoutEffect(() => {
    deBounceListener();
    window?.addEventListener?.('resize', deBounceListener);
    return () => {
      window?.removeEventListener?.('resize', deBounceListener);
    };
  }, []);

  const isMobile = useComputed(() => {
    return width.value < 768;
  });

  const isTablet = useComputed(() => {
    return width.value >= 768 && width.value < 1279;
  });

  const isDesktop = useComputed(() => {
    return width.value >= 1280;
  });

  return {
    width,
    height,
    isMobile,
    isTablet,
    isDesktop,
    scrollHeight,
  };
};

export const useIsMobile = () => {
  const [is, setIs] = useState(false);
  const { isMobile } = useWindowResize();
  useSignalEffect(() => {
    setIs(isMobile.value);
  });

  return is;
};

export const useIsDesktop = () => {
  const [is, setIs] = useState(false);
  const { isDesktop } = useWindowResize();
  useSignalEffect(() => {
    setIs(isDesktop.value);
  });

  return is;
};

export const useIsTablet = () => {
  const [is, setIs] = useState(false);
  const { isTablet } = useWindowResize();
  useSignalEffect(() => {
    setIs(isTablet.value);
  });

  return is;
};

export default useWindowResize;
