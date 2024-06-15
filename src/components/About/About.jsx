import React from "react";
import s from "./styles.module.scss";
import { Container } from "../container/Container";
import { Dot } from "../../assets/Dot";
import ParagraphLineMask from "../../interactive/Mask";
import Fade from "../../interactive/Fade";

const About = () => {
  return (
    <section className={s.about} id="about">
      <div className={s.top}>
        <div className={s.logo_type}>
          <img src="/logo_type.png" alt="logo-type" />
        </div>
        <ParagraphLineMask delayTrigger={0.4}>
          <h1 className={s.about_heading}>About Crossian</h1>
        </ParagraphLineMask>
        <Container className="grid">
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
                choose desired products for sale from a range of products. When
                a customer places an order, the product is produced and shipped
                by a fulfillment partner within Crossian&apos;s supplier
                network.
              </p>
            </ParagraphLineMask>
          </div>
        </Container>
      </div>
      <div className={s.bottom}>
        <div className={s.world}>
          <img src="/world.png" alt="logo-type" />
        </div>
        <Container className="grid">
          <div className={s.wrapper}>
            <ParagraphLineMask delayTrigger={0.4}>
              <p className={s.text}>
                Crossian connects our three primary customer segments
              </p>
            </ParagraphLineMask>
            <Fade
              delayTrigger={0.8}
              delayEnter={0.4}
              direction="bottom"
              from="25px"
            >
              <ul>
                <li className={s.subtext}>
                  <Dot />A global community of independent sellers, full-time
                  entrepreneurs, and side-hustlers looking to start an ecommerce
                  business.
                </li>
                <li className={s.subtext}>
                  <Dot />
                  Consumers seeking for innovative day-to-day products across a
                  range of apparel, accessories, homewares, and other lifestyle
                  categories.
                </li>
                <li className={s.subtext}>
                  <Dot />
                  Third-party suppliers and fulfillers that produce the products
                  after the customer has ordered them, and then arranging for
                  their delivery to the customer.
                </li>
              </ul>
            </Fade>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default About;
