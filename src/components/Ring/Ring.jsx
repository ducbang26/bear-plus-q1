import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export const Ring = ({width, delay}) => {
  const svgAnimateRef = useRef(null);

  useGSAP(
    () => {
      const ringAnimation = gsap.to(".line", {
        opacity: 1,
        ease: "power4.inOut",
        delay: delay,
        stagger: 0.05,
      });

      return () => {
        ringAnimation.revert();
      };
    },
    { scope: svgAnimateRef },
    []
  );

  return (
    <svg
      width={width}
      // height="417"
      viewBox="0 0 419 417"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={svgAnimateRef}
    >
      <line
        x1="237.551"
        y1="2.28937"
        x2="233.368"
        y2="34.57"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="264.637"
        y1="7.71662"
        x2="256.212"
        y2="39.1581"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="289.993"
        y1="16.3632"
        x2="277.597"
        y2="46.461"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="314.751"
        y1="28.6159"
        x2="298.476"
        y2="56.8055"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="337.005"
        y1="43.5303"
        x2="317.241"
        y2="69.3943"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="357.748"
        y1="61.7733"
        x2="334.732"
        y2="84.79"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="375.384"
        y1="81.9394"
        x2="349.6"
        y2="101.807"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="390.699"
        y1="104.93"
        x2="362.509"
        y2="121.205"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="402.514"
        y1="128.973"
        x2="372.466"
        y2="141.49"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="411.357"
        y1="155.143"
        x2="379.915"
        y2="163.568"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="416.546"
        y1="181.425"
        x2="384.283"
        y2="185.739"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="418.315"
        y1="208.993"
        x2="385.764"
        y2="208.993"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="416.525"
        y1="235.723"
        x2="384.245"
        y2="231.539"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="411.098"
        y1="262.809"
        x2="379.657"
        y2="254.384"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="402.451"
        y1="288.164"
        x2="372.354"
        y2="275.768"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="390.199"
        y1="312.923"
        x2="362.009"
        y2="296.647"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="375.284"
        y1="335.176"
        x2="349.42"
        y2="315.413"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="357.041"
        y1="355.92"
        x2="334.025"
        y2="332.903"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="336.875"
        y1="373.555"
        x2="317.008"
        y2="347.771"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="313.885"
        y1="388.87"
        x2="297.61"
        y2="360.681"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="289.842"
        y1="400.685"
        x2="277.325"
        y2="370.637"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="263.671"
        y1="409.528"
        x2="255.246"
        y2="378.087"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="237.389"
        y1="414.718"
        x2="233.076"
        y2="382.454"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="210.822"
        y1="383.936"
        x2="210.822"
        y2="416.486"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="188.267"
        y1="382.544"
        x2="184.083"
        y2="414.825"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="165.397"
        y1="378.087"
        x2="156.972"
        y2="409.528"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="143.971"
        y1="370.906"
        x2="131.575"
        y2="401.003"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="123.033"
        y1="360.681"
        x2="106.758"
        y2="388.87"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="104.196"
        y1="348.199"
        x2="84.4329"
        y2="374.063"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="86.6187"
        y1="332.903"
        x2="63.6019"
        y2="355.92"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="71.654"
        y1="315.971"
        x2="45.8697"
        y2="335.839"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="58.6339"
        y1="296.647"
        x2="30.4442"
        y2="312.923"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="48.5615"
        y1="276.419"
        x2="18.5138"
        y2="288.936"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="39.8825"
        y1="253.365"
        x2="8.44106"
        y2="261.79"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="35.3888"
        y1="231.219"
        x2="3.12527"
        y2="235.533"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="33.7751"
        y1="207.974"
        x2="1.22454"
        y2="207.974"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="35.1662"
        y1="185.42"
        x2="2.88559"
        y2="181.236"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="39.6237"
        y1="162.549"
        x2="8.18225"
        y2="154.125"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="46.805"
        y1="141.123"
        x2="16.7072"
        y2="128.727"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="57.0299"
        y1="120.186"
        x2="28.8402"
        y2="103.911"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="69.5118"
        y1="101.349"
        x2="43.6479"
        y2="81.5852"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="84.8075"
        y1="83.7711"
        x2="61.7908"
        y2="60.7544"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="102.843"
        y1="69.5462"
        x2="82.976"
        y2="43.762"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="122.167"
        y1="56.5262"
        x2="105.892"
        y2="28.3366"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="142.395"
        y1="46.7327"
        x2="129.878"
        y2="16.6849"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="163.327"
        y1="38.1391"
        x2="154.902"
        y2="6.69766"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="186.577"
        y1="34.6641"
        x2="182.263"
        y2="2.40053"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
      <line
        x1="210.822"
        y1="0.5"
        x2="210.822"
        y2="33.0506"
        stroke="white"
        strokeLinecap="round"
        className="line"
        style={{ opacity: "0.2" }}
      />
    </svg>
  );
};
