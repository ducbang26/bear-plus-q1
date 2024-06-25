import React, { useRef, useState } from "react";
import s from "./styles.module.scss";
import gsap from "gsap";

const Cursor = ({stickyElement}) => {
  const [isHovered, setIsHovered] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const delayedMouse = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);
  const circle = useRef();
  const cursorSize = isHovered ? 58 : 30;

  const lerp = (x, y, a) => x * (1 - a) + y * a;

  const manageMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, height, width } = stickyElement.current.getBoundingClientRect();

    //center position of the stickyElement
    const center = {x: left + width / 2, y: top + height / 2}

    if(isHovered){
      mouse.current = {
        x: center.x,
        y: center.y,
      };
    } else {
      mouse.current = {
        x: clientX,
        y: clientY,
      };
    }
  };

  const animate = () => {
    const { x, y } = delayedMouse.current;

    delayedMouse.current = {
      x: lerp(x, mouse.current.x, 0.075),
      y: lerp(y, mouse.current.y, 0.075),
    };

    moveCircle(delayedMouse.current.x, delayedMouse.current.y);

    rafId.current = window.requestAnimationFrame(animate);
  };

  const moveCircle = (x, y) => {
    gsap.set(circle.current, { x, y, xPercent: -50, yPercent: -50 });
  };

  const manageMouseOver = e => {
    setIsHovered(true)
  }

  const manageMouseLeave = e => {
    setIsHovered(false)
  }

  React.useEffect(() => {
    animate();
    stickyElement.current.addEventListener("mouseenter", manageMouseOver)
    stickyElement.current.addEventListener("mouseleave", manageMouseLeave)
    window.addEventListener("mousemove", manageMouseMove);
    return () => {
      stickyElement.current.removeEventListener("mouseenter", manageMouseOver)
      stickyElement.current.removeEventListener("mouseleave", manageMouseLeave)
      window.removeEventListener("mousemove", manageMouseMove);
    };
  }, [isHovered]);
  return <div className={s.cursor} ref={circle} style={{width: `${cursorSize}px`, height: `${cursorSize}px`}} />;
};

export default Cursor;
