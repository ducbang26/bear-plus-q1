import React, { forwardRef } from "react";
import s from "./styles.module.scss";
import { Container } from "../container/Container";
import { ArrowButton } from "../ArrowButton/ArrowButton";
import { Blockquote } from "../../assets/blockquote";
import ParagraphLineMask from "../../interactive/Mask";
import Fade from "../../interactive/Fade";
import Parallax from "../../interactive/Patallax";

const Hero = forwardRef(function index(props, ref) {
  return (
    <section className={s.hero} id="home">
      <Container>
        <div className={s.wrapper}>
          <Fade
            delayTrigger={0.3}
            delayEnter={0.3}
            direction="bottom"
            from="25px"
          >
            <img src="/Logo.svg" alt="logo" />
          </Fade>
          <ParagraphLineMask delayTrigger={0.4}>
            <h1 className={s.hero_title}>
              Leading and Leveling the playing field for cross-border Ecommerce
            </h1>
          </ParagraphLineMask>
          <div ref={ref}>
            <ArrowButton />
          </div>
        </div>
      </Container>
      <div className={s.home_cols_wrap}>
        <Parallax offset={0.2}>
          <img
            src="/home_col_3.png"
            sizes="100vw"
            alt=""
            className={`${s.img_full} ${s.col_3}`}
          />
        </Parallax>
        <Parallax offset={0.1}>
          <img
            src="/home_col_2.png"
            sizes="100vw"
            alt=""
            className={`${s.img_full} ${s.col_2}`}
          />
        </Parallax>
        <Parallax offset={-0.2}>
          <img
            src="/home_col_1.png"
            sizes="100vw"
            alt=""
            className={`${s.img_full} ${s.col_1}`}
          />
        </Parallax>
      </div>
      <Container>
        <div className="grid">
          <Fade
            delayTrigger={0.4}
            delayEnter={0.4}
            direction="bottom"
            from="25px"
          >
            <div className={s.hero_content} id="bottomHome">
              <img src="/hero_content.png" alt="" />
              <Parallax offset={-0.1}>
                <p className={s.text}>
                  <Blockquote />
                  At Crossian, we strive to cut the learning curve and barriers
                  for our core customer groups by simplifying their operations
                  or buying experience
                </p>
              </Parallax>
            </div>
          </Fade>
        </div>
      </Container>
    </section>
  );
});

export default Hero;
