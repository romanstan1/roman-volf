import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import Section from "./Section";
import Carousel from "./Carousel";
import { greenBlack, vividOrange, pastelOne, pastelTwo } from "../images";
import COLORS, { hexToRGBA, cssColor } from "../styles/colors"; 

const animation = keyframes`
  0%{
    transform: translate(-50%, -50%) scale(0.7);
    opacity: 0.4;
  }
  100%{
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left:0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background: ${cssColor(hexToRGBA(COLORS.white, 0.7))};
  cursor: pointer;
`;


const ModalImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 70vh;
  opacity: 0.4;
  transform: translate(-50%, -50%) scale(0.7);
  ${props =>
    props.show &&
    css`
      animation: ${animation} 0.2s ease;
      animation-fill-mode: forwards;
    `};
`;


const Home = () => {
  const [modalImg, setModalImg] = useState(null);
  const [startAnimation, setStartAnimation] = useState(false);
  
  useEffect(()=>{
    if(modalImg) {
      setTimeout(() => {
        setStartAnimation(true);
      }, 0);
    } else {
      setStartAnimation(false);
    }
  },[modalImg]);

  return (
    <>
      {modalImg && 
        <ModalWrapper show={startAnimation} onClick={() => setModalImg(null)}>
          <ModalImg show={startAnimation} src={modalImg} />
        </ModalWrapper>}
      <Section minHeight bottomPadding topPadding>
        <Carousel
          setModalImg={setModalImg}
          images={greenBlack} 
          name="Black Green"
          size="Oil & chalk on canvas. 70cm x 70cm"
        /> 
        <Carousel
          setModalImg={setModalImg} 
          images={pastelOne}
          name="Lemon Ultramarine"
          size="Oil on canvas. 100cm x 100cm"
        /> 
        <Carousel
          setModalImg={setModalImg}
          images={pastelTwo}
          name="Peach Green"
          size="Oil & chalk on canvas. 100cm x 100cm"
        /> 
        <Carousel
          setModalImg={setModalImg}
          images={vividOrange}
          name="Vivid Primary"
          size="Oil & chalk on canvas. 100cm x 100cm"
        /> 
      </Section>
    </>
  );
};

export default Home;
