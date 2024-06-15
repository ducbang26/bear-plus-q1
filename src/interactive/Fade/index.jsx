import React, { useMemo, useRef } from "react";
import useFade from "./useFade";

export default function Fade({
  direction = "none",
  delayTrigger,
  delayEnter,
  children,
  duration,
  from,
  isObserver,
  isMobile,
}) {
  const refContent = useRef(null);

  const memoFade = useMemo(() => {
    return {
      refContent,
      delayTrigger,
      delayEnter,
      direction,
      duration,
      from,
      isObserver,
      isMobile,
    };
  }, [
    refContent,
    delayTrigger,
    delayEnter,
    direction,
    duration,
    from,
    isObserver,
    isMobile,
  ]);
  useFade(memoFade);
  if (!React.isValidElement(children)) {
    return <div>Error: Invalid children element</div>;
  }

  return React.cloneElement(children, { ...{ ref: refContent } });
}
