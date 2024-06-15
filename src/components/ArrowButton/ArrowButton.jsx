import React from "react";
import s from "./styles.module.scss";
import { Arrow } from "../../assets/arrow";
import { useLenis } from "lenis/react";
import Fade from "../../interactive/Fade";

export const ArrowButton = () => {
  const lenis = useLenis();

  return (
    <Fade delayTrigger={0.7} delayEnter={0.3} direction="bottom" from="25px">
      <div
        className={s.arrow_button}
        onClick={() => {
          lenis.scrollTo("#bottomHome", { lerp: 0.1, offset: -200 });
        }}
      >
        <Arrow />
      </div>
    </Fade>
  );
};
