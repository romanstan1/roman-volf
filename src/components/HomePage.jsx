import React, { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import Section from "./Section";
import Carousel from "./Carousel";
import { greenBlack, vividOrange, pastelOne, pastelTwo, vividTurquoise } from "../images";
import COLORS, { hexToRGBA, cssColor } from "../styles/colors"; 
import BREAKPOINTS from "../styles/breakpoints";

const animation = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const hideanimation = keyframes`
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left:0;
  z-index: 20;
  width: 100%;
  height: 100%;
  background: ${cssColor(hexToRGBA(COLORS.black, 0.9))};
  outline: none
  cursor: pointer;
  ${props =>
    props.show &&
    css`
      animation: ${animation} 0.2s linear;
      animation-fill-mode: forwards;
    `};
  ${props =>
    props.hide &&
    css`
      animation: ${hideanimation} 0.2s linear;
      animation-fill-mode: forwards;
    `};
`;


const ModalImg = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 90vh;
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
  
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    height: unset;
    width: 92vw;
  }

  /* @media screen and (max-height: ${BREAKPOINTS.small}px){
    height: 95vh;
    width: unset;

    height: unset;
    width: 90vw;
  } */
`;


const Modal = ({ startAnimation, hideAnimation,  hideModal, modalImg }) => {
  
  return(
    <ModalWrapper
      show={startAnimation}
      hide={hideAnimation}
      onClick={hideModal}
    >
      <ModalImg src={modalImg} />
    </ModalWrapper>
  );
};

const MemoizedModal = React.memo(Modal);

const Home = () => {
  const [modalImg, setModalImg] = useState(null);
  const [startAnimation, setStartAnimation] = useState(false);
  const [hideAnimation, setHideAnimation] = useState(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }
    setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);
  
  useEffect(()=>{
    if(modalImg) {
      setTimeout(() => {
        setStartAnimation(true);
      }, 0);
    } else {
      setStartAnimation(false);
    }
  },[modalImg]);

  const hideModal = () => {
    setHideAnimation(true);
    setTimeout(() => {
      setHideAnimation(false);
      setModalImg(null);
    }, 220);
  };

  return (
    <>
      {modalImg && startAnimation &&
        <MemoizedModal
          startAnimation={startAnimation}
          hideAnimation={hideAnimation}
          hideModal={hideModal}
          modalImg={modalImg}
        />}
      <Section minHeight bottomPadding topPadding>
        
        <Carousel
          isMobile={isMobile}
          setModalImg={setModalImg}
          images={vividTurquoise} 
          name="Vivid Turquoise"
          size="Oil on canvas. 60 x 90cm"
        /> 
        <Carousel
          isMobile={isMobile}
          setModalImg={setModalImg}
          images={greenBlack} 
          name="Black and Green"
          size="Oil & chalk on canvas. 70 x 70cm"
        /> 
        <Carousel
          isMobile={isMobile}
          setModalImg={setModalImg} 
          images={pastelOne}
          name="Peach and Ultramarine"
          size="Oil on canvas. 75 x 90cm"
        /> 
        <Carousel
          isMobile={isMobile}
          setModalImg={setModalImg}
          images={pastelTwo}
          name="Pastel Green"
          size="Oil & chalk on canvas. 75 x 90cm"
        /> 
        <Carousel
          isMobile={isMobile}
          setModalImg={setModalImg}
          images={vividOrange}
          name="Matisse's Orange"
          size="Oil & chalk on canvas. 70 x 90cm"
        /> 
      </Section>
    </>
  );
};

export default Home;
