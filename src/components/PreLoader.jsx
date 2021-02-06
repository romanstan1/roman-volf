import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import colors from "../styles/colors";

const Container = styled.div`
  position: fixed;
  left: 0;
  width: 100vw;
  right: 0;
  top: 0;
  z-index: 999;
  background: ${colors.beige};
  transition: 0.7s ease-in-out;
  height: ${({ hide }) => (hide ? 0 : 100)}%;
  &:after {
    content: '';
    position: absolute;
    left: 0;
    width: 100%;
    top: 100%;
    height: 70%;
    z-index: 999;
    background: ${colors.turquoise};
  }
`;

const Mask = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  top: 0;
  overflow: hidden;
  transition: 0.5s ease-in-out;
  transform: ${({ hide }) => (hide ? "translateY(-100px)" : "translateY(0px)")};
  height: 100%;
`;

const Icon = styled.div`
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    circle {
      transition: 1s ease-in-out;
      transform: rotate(-90deg);
      transform-origin: 50% 50%;
      &.black {
        transform: scale(-1, 1) rotate(-90deg);
        stroke-dashoffset: -150.8;
        stroke-dasharray: 150.8 150.8;
      }
    }
  }
`;

const Dots = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.8s ease-in-out;
  transform: ${({ active }) => (active ? "rotate(0deg)" : "rotate(-180deg)")};
  div {
    height: 10px;
    width: 10px;
    margin: 2px;
    background: ${colors.red};
    border-radius: 50%;
    &:last-of-type {
      background: ${colors.turquoise};
    }
  }
`;

const Preloader = () => {
  const [phase, setPhase] = useState(1);
  const circleRef = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line
    window.tiktokPreloaderHasRun = true;

    const radius = circleRef.current.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (100 / 100) * circumference;
    const t1 = setTimeout(() => {
      setPhase(1);
      circleRef.current.style.strokeDashoffset = -offset;
      circleRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
    }, 1100);

    const t2 = setTimeout(() => {
      setPhase(2);
    }, 2100);

    const t3 = setTimeout(() => {
      setPhase(3);
    }, 2800);

    return () => {
      if (t1) clearTimeout(t1);
      if (t2) clearTimeout(t2);
      if (t3) clearTimeout(t3);
    };
  }, []);

  return (
    <Container hide={phase >= 3}>
      <Mask hide={phase >= 3}>
        <Icon>
          <svg>
            <circle
              stroke="#CCCCCC"
              strokeWidth="2"
              fill="transparent"
              r="24"
              cx="25"
              cy="25"
            />
            <circle
              className="black"
              ref={circleRef}
              stroke="black"
              strokeWidth="2"
              fill="transparent"
              r="24"
              cx="25"
              cy="25"
            />
          </svg>
          <Dots active={phase >= 2}>
            <div />
            <div />
          </Dots>
        </Icon>
      </Mask>
    </Container>
  );
};

export default Preloader;
