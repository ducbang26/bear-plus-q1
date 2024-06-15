import React, { useRef } from "react";
import useParallax from "./useParallax";

export default function Parallax({
  children,
  offset,
}) {
  const refWrap = useRef(null);
  const refContent = useRef(null);
  useParallax({ refWrap, refContent, offset: offset || 0.15 });

  return (
    <div style={{ position: 'relative' }} ref={refWrap}>
      <div ref={refContent}>
        {children}
      </div>
    </div>
  );
}
