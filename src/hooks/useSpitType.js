import { useCallback, useEffect, useRef, useState } from 'react';
import SplitType from 'split-type';
import { debounce } from '../utils/uiHelper';

export default function useSplitType({ refTarget, types }) {
  const refTexts = useRef(null);
  const refResize = useRef(null);
  const [isReSplit, setIsReSplit] = useState(0);
  const refCurrentWidth = useRef(0);
  const [splitter, setSplitter] = useState();

  useEffect(() => {
    if (!refTarget.current) return;
    const text = new SplitType(refTarget.current, { types });
    setSplitter(text);

    refCurrentWidth.current = refTarget.current.getBoundingClientRect().width;
    const dbouceResize = debounce(() => {
      if (!refTarget.current) return;
      const { width } = refTarget.current.getBoundingClientRect();

      if (refCurrentWidth.current === width) return;
      refCurrentWidth.current = width;

      text?.split({ types });
      setSplitter(text);

      setIsReSplit(
        refTexts.current?.lines?.length ||
          refTexts.current?.words?.length ||
          refTexts.current?.chars?.length ||
          0
      );
    }, 150);

    refResize.current = new ResizeObserver(dbouceResize);
    refResize.current?.observe(refTarget.current);

    return () => {
      refResize.current?.disconnect();
      refResize.current = null;
    };
  }, [refTarget, types]);

  const clearReSplit = useCallback(() => {
    if (!refTarget.current || !refResize.current) return;
    refResize.current?.unobserve(refTarget.current);
    refResize.current?.disconnect();
    refResize.current = null;
  }, [refTarget]);

  return { splitter, isReSplit, clearReSplit };
}
