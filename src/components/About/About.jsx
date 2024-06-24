import React from "react";
import s from "./styles.module.scss";
import { Container } from "../container/Container";
import { Dot } from "../../assets/Dot";
import ParagraphLineMask from "../../interactive/Mask";
import Fade from "../../interactive/Fade";
import Parallax from "../../interactive/Patallax";

const About = () => {
  return (
    <section className={s.about} id="about">
      <div className={s.top}>
        <div className={s.logo_type}>
          <Parallax offset={-0.2}>
            <img src="/logo_type.png" alt="logo-type" />
          </Parallax>
        </div>
        <Container>
          <div>
            <ParagraphLineMask delayTrigger={0.4}>
              <h1 className={s.about_heading}>About Crossian</h1>
            </ParagraphLineMask>
          </div>
          <div className="grid">
            <div className={s.wrapper}>
              <ParagraphLineMask delayTrigger={0.8}>
                <p className={s.text}>
                  Our mission is to build a trusted cross-border ecommerce brand
                  that serves our customer groups by leveraging innovative
                  technology solutions that are simple, effective & disruptive.
                </p>
              </ParagraphLineMask>
              <ParagraphLineMask delayTrigger={1.2}>
                <p className={s.subtext}>
                  Crossian provides a three‑sided global platform where sellers
                  choose desired products for sale from a range of products.
                  When a customer places an order, the product is produced and
                  shipped by a fulfillment partner within Crossian&apos;s
                  supplier network.
                </p>
              </ParagraphLineMask>
            </div>
          </div>
        </Container>
      </div>
      <div className={s.bottom}>
        <Container className="relative">
          <div className={s.world}>
            <Parallax offset={0.2}>
              <img src="/world.png" alt="logo-type" />
            </Parallax>
          </div>
          <div className="grid">
            <div className={s.wrapper}>
              <ParagraphLineMask delayTrigger={0.4}>
                <p className={s.text}>
                  Crossian connects our three primary customer segments
                </p>
              </ParagraphLineMask>

              <ul>
                <Fade
                  delayTrigger={0.5}
                  delayEnter={0.4}
                  direction="bottom"
                  from="25px"
                >
                  <li className={s.subtext}>
                    <Dot />A global community of independent sellers, full-time
                    entrepreneurs, and side-hustlers looking to start an
                    ecommerce business.
                  </li>
                </Fade>
                <Fade
                  delayTrigger={1}
                  delayEnter={0.4}
                  direction="bottom"
                  from="25px"
                >
                  <li className={s.subtext}>
                    <Dot />
                    Consumers seeking for innovative day-to-day products across
                    a range of apparel, accessories, homewares, and other
                    lifestyle categories.
                  </li>
                </Fade>
                <Fade
                  delayTrigger={1.5}
                  delayEnter={0.4}
                  direction="bottom"
                  from="25px"
                >
                  <li className={s.subtext}>
                    <Dot />
                    Third-party suppliers and fulfillers that produce the
                    products after the customer has ordered them, and then
                    arranging for their delivery to the customer.
                  </li>
                </Fade>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
