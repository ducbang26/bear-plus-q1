import { signal } from '@preact/signals-react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/dist/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useCallback, useEffect, useMemo } from 'react';
import useObHeightChange from '../hooks/useObHeightChange';
import { useSignalEffect, useSignals } from '@preact/signals-react/runtime';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  ScrollTrigger.config({
    ignoreMobileResize: true,
  });
}

const pageStatus = signal('PAGE_ONCE');
const isPageEnter = signal(false);
const isPageLeave = signal(false);
const pageOnce = signal(false);
const isFirstLoad = signal(true);

function scrollRestoration() {
  window.scrollTo(0, 0);
  if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
  }
}

export const useAnimationStore = () => {
  useSignals();
  const { scrollHeight } = useObHeightChange();

  const isLoaded = useMemo(() => {
    return pageStatus.value === 'PAGE_LOADED';
  }, [pageStatus.value]);

  useSignalEffect(() => {
    scrollRestoration();
    pageOnce.value = true;
    setPageStatus('PAGE_LOADED');
  });

  useSignalEffect(() => {
    setPageLeave(pageStatus.value === 'PAGE_LOADED');
    setPageEnter(pageStatus.value === 'PAGE_ENTER');
  });

  const onCompleteLoaded = useCallback(() => {
    setPageStatus('PAGE_ENTER');
  }, []);

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [scrollHeight]);

  const setPageEnter = (status) => {
    isPageEnter.value = status;
  };

  const setPageLeave = (status) => {
    isPageLeave.value = status;
  };

  const setPageStatus = (status) => {
    pageStatus.value = status;
  };

  const setIsFirstLoad = () => {
    isFirstLoad.value = false;
  };

  return {
    pageStatus: pageStatus.value,
    isPageEnter: isPageEnter.value,
    isPageLeave: isPageLeave.value,
    isLoaded: isLoaded,
    isFirstLoad: isFirstLoad.value,
    pageOnce: pageOnce.value,
    scrollHeight: scrollHeight,
    setPageStatus,
    onCompleteLoaded,
    setIsFirstLoad,
  };
};
