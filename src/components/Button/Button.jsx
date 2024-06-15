import React from "react";
import s from "./styles.module.scss";
import Fade from "../../interactive/Fade";

const Button = () => {
  return (
    <Fade delayTrigger={0.8} delayEnter={0.4} direction="bottom" from="50px">
    <div className={s.button}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="15"
        viewBox="0 0 14 15"
        fill="none"
      >
        <circle
          opacity="0.2"
          cx="7"
          cy="7.91406"
          r="6"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
      <span>Visit website</span>
    </div>
    </Fade>
  );
};

export default Button;
