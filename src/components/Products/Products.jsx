import React from "react";
import s from "./styles.module.scss";
import { Container } from "../container/Container";
import Button from "../Button/Button";
import ParagraphLineMask from "../../interactive/Mask";
import Fade from "../../interactive/Fade";
import Parallax from "../../interactive/Patallax";

const Products = () => {
  return (
    <section className={s.products} id="products">
      <ParagraphLineMask delayTrigger={0.4}>
        <h1 className={s.products_heading}>Products</h1>
      </ParagraphLineMask>
      <div className={s.top}>
        <Container className="relative">
          <Fade
            delayTrigger={0.8}
            delayEnter={0.4}
            direction="left"
            from="50px"
          >
            <div className={s.tablet}>
              <Parallax offset={0.2}>
                <img src="/tablet.png" alt="tablet" />
              </Parallax>
            </div>
          </Fade>
          <div className="grid">
            <div className={s.wrapper}>
              <ParagraphLineMask delayTrigger={0.8}>
                <h3 className={s.heading_3}>Selless Platform</h3>
              </ParagraphLineMask>
              <ParagraphLineMask delayTrigger={0.8}>
                <p className={s.text}>Catalyzing online sellers’ success</p>
              </ParagraphLineMask>

              <ParagraphLineMask delayTrigger={0.8}>
                <p className={s.subtext}>
                  Selless is a risk-and-hassle-free, data-driven, social
                  ecommerce platform built for online sellers who want to
                  succeed in the US Market.
                </p>
              </ParagraphLineMask>
              <ParagraphLineMask delayTrigger={0.8}>
                <p className={s.subtext}>
                  The growth trajectory of online shopping has steadily
                  increased since 2014. However, reports show a whopping number
                  of ninety percent of independent online sellers fail within
                  the first 120 days due to having limited performance marketing
                  skills, little to no market for their products, and lack of
                  online search visibility.
                </p>
              </ParagraphLineMask>
            </div>
          </div>
        </Container>
      </div>
      <div className={s.bottom}>
        <Container className="relative">
          <Fade
            delayTrigger={0.8}
            delayEnter={0.4}
            direction="right"
            from="50px"
          >
            <div className={s.chart}>
              <Parallax offset={-0.2}>
                <img src="/chart.png" alt="chart" />
              </Parallax>
            </div>
          </Fade>
          <div className="grid">
            <div className={s.wrapper}>
              <ParagraphLineMask delayTrigger={0.8}>
                <p className={s.text}>Selless accelerates business growth</p>
              </ParagraphLineMask>
              <ParagraphLineMask delayTrigger={0.8}>
                <p className={s.subtext}>
                  We provide the technology, infrastructure, and marketing
                  know-how to help online sellers engage with their prospects,
                  and increase success rate by 6X, while operating in a more
                  sufficient way.
                </p>
              </ParagraphLineMask>
              <Button />
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Products;
