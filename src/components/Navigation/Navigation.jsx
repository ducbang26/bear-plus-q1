import React, { useEffect, useState } from "react";
import s from "./styles.module.scss";
import { House } from "../../assets/house";
import { About } from "../../assets/about";
import { Port } from "../../assets/port";
import { Culture } from "../../assets/culture";
import { Careers } from "../../assets/careers";
import { Email } from "../../assets/email";
import { useLenis } from "lenis/react";

const Navigation = () => {
  const lenis = useLenis();

  const [show, setShow] = useState(0)
  const controlNavbar = () => {
      if (window.scrollY > 1900 ) {
          setShow(1)
      } else {
        setShow(0)
      }
  }

  useEffect(() => {
      window.addEventListener('scroll', controlNavbar)
      return () => {
          window.removeEventListener('scroll', controlNavbar)
      }
  }, [])

  return (
    <nav className={s.nav} style={{ opacity : `${show}`}}>
      <ul>
        <li>
          <a
            href="#home"
            className={`${s.tooltip}`}
            onClick={() => {
              lenis.scrollTo("#home", { lerp: 0.1 });
            }}
          >
            <House />
            <span className={`${s.tooltip_text} ${s.tooltip_right}`}>Home</span>
          </a>
        </li>
        <li>
          <a
            href="#about"
            className={`${s.tooltip}`}
            onClick={() => {
              lenis.scrollTo("#about", { lerp: 0.1 });
            }}
          >
            <About />
            <span className={`${s.tooltip_text} ${s.tooltip_right}`}>
              About
            </span>
          </a>
        </li>
        <li>
          <a
            href="#products"
            className={`${s.tooltip}`}
            onClick={() => {
              lenis.scrollTo("#products", { lerp: 0.1 });
            }}
          >
            <Port />
            <span className={`${s.tooltip_text} ${s.tooltip_right}`}>
              Products
            </span>
          </a>
        </li>
        <li>
          <a href="" className={`${s.tooltip}`}>
            <Culture />
            <span className={`${s.tooltip_text} ${s.tooltip_right}`}>
              Culture
            </span>
          </a>
        </li>
        <li>
          <a href="" className={`${s.tooltip}`}>
            <Careers />
            <span className={`${s.tooltip_text} ${s.tooltip_right}`}>
              Careers
            </span>
          </a>
        </li>
        <li>
          <a href="" className={`${s.tooltip}`}>
            <Email />
            <span className={`${s.tooltip_text} ${s.tooltip_right}`}>
              Email
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
