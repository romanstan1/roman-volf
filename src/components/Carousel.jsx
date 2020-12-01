import React, { useState , useRef } from "react";
import styled, { css } from "styled-components";
import smoothscroll from "smoothscroll-polyfill"; 
import Slider from "react-slick";
import { P1 , P3 } from "./Text";
import COLORS from "../styles/colors"; 
import useInview from "../utils/useInview"; 
import BREAKPOINTS from "../styles/breakpoints";

const CarouselInner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
  height: 420px;
  width: 100%;
  flex-shrink: 1;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */

  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    height: unset;
    width: unset;
  }
`;

const CarouselWrapper = styled.div`
  position: relative;
  margin: 15px 0 100px 0;
`;

const Inner = styled.img`
  height: 350px;
  margin: 0 15px;
  transition: height 0.2s ease, opacity 1s ${(props => props.delay)}s ease-out;
  /* filter: grayscale(0%); */
  opacity: 0;
  cursor: pointer;
  ${(props => !props.active &&
    css`
      /* filter: grayscale(100%); */
      height: 310px;
    `)
  }
  ${(props => props.show &&
    css`
      opacity: 1;
    `)
  }
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    padding-right: 50px;
  }
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    height: unset !important;
    width: 100%;
    filter: grayscale(0%) !important;
    margin: 0px;

    display: none;
  }
`;

const MobileInner = styled.div`
  min-width: 100%;
  height: 65vh;
  margin: 0;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  display: none;
  ${(props => props.src &&
    css`
      background-image: url(${props.src});
    `)
  }
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    display: block;
  }
`;

const Name = styled(P1)`
  line-height: 2rem;
`;

const Size = styled(P3)`
  line-height: 2rem;
  opacity: 0.5;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 400px;
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    justify-content: center;
    width: 100%;
    align-items: center;
    margin-top: 45px;
    margin-bottom: 30px;
    /* transform: translateY(55px); */
  }
`;

const DotsWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, 0);
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    bottom: 10px;
  }
`;

const Dot = styled.div`
  margin: 3px;
  opacity: 1;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 50%;
  transition: 0.1s ease;
  div {
    background: ${(props => props.active ? COLORS.black : "transparent")};
    border-radius: 50%;
    height: 6px;
    width: 6px;
    border: 1px solid ${COLORS.black};
  }
  &:hover {
    border-color: ${COLORS.black};
  }
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    height: 42px;
    width: 42px;
    div {
      height: 10px;
      width: 10px;
    }
  }
`;

const MobileWrapper = styled.div` 
  /* display: flex; */
  .slick-arrow {
    display: none !important;
  }
  .slick-active button::before{
    opacity: 1 !important;
  }
`;

const ItemInner = ({ active, i, item, setModalImg, handleMouseEnter }) => {
  const [inViewRef, inView] = useInview(true);
    return(
      <>
        <Inner
          ref={inViewRef}
          show={inView}
          delay={i * 0.3}
          active={i === active}
          src={item.image} 
          width={item.width}
          alt=""
          onClick={() => setModalImg(item.image)}
          onMouseEnter={() => handleMouseEnter(i)}
        />
      </>
    );

};

const Carousel = ({ 
  setModalImg,  images, name, 
  size, allowHover, isMobile }) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef();

  const scroll = (index) => {

    const carouselRefCurrent = carouselRef.current;
    const fullWidth = carouselRefCurrent.scrollWidth;
    let unit;
    let distance;
    
    if(isMobile) {
      distance = (window.innerWidth - 30) * index;      
    } else {
      unit = (fullWidth / images.length);
      distance = (unit * index) - (unit / 2);
    }
    
    // safari, ie & edge polyfill
    smoothscroll.polyfill();
    carouselRef.current.scrollTo({
      top: 0,
      left: distance,
      behavior: "smooth",
    });
  };
  
  const handleClick = (index) => {
    setActive(index);
    scroll(index);
  };

  const handleMouseEnter = (i) => {
    if(allowHover) {
      setTimeout(() => {
        handleClick(i);
      }, 50);
    }
  };
  // const handleDragStart = (e) => {
  //   console.log("drag start:", e);
  // };
  
  // const handleDragEnd = (e) => {
  //   console.log("drag end:", e);
  // };

  // const handleTouchStart = (e) => {
  //   console.log("touch start:", e);
  // };

  // const handleTouchMove = (e) => {
  //   console.log("touch move:", e);
  //   const { pageX } = e.touches[0];
  //   console.log("pageX:", pageX);
  // };
  
  // const handleTouchEnd = (e) => {
  //   console.log("touch end:", e);
  // };
  if(isMobile) {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <MobileWrapper>
        <Slider {...settings}>
          {images.map((item, i) => {
            return (
              <MobileInner
                key={item.image}
                active={i === active}
                onClick={() => setModalImg(item.image)}
                src={item.image}
              />
              );
          })}
        </Slider>
        <LabelWrapper>
          <Name>{name}</Name>
          <Size>{size}</Size>
        </LabelWrapper>
      </MobileWrapper>
    );
  }

  return (
    <CarouselWrapper>
      <CarouselInner
        ref={carouselRef}       
      >
        {images.map((item, i) => {
          return (
            <ItemInner
              key={item.image} 
              active={active}
              item={item} 
              i={i}
              setModalImg={setModalImg}
              handleMouseEnter={handleMouseEnter}
            />
            );
        })}
      </CarouselInner>
      <DotsWrapper>
        {images.map((item, i) => {
          return (
            <Dot
              active={i === active}
              key={item.image} 
              onClick={() => handleClick(i)}
            >
              <div />
            </Dot>);
        })}
      </DotsWrapper>
      <LabelWrapper>
        <Name>{name}</Name>
        <Size>{size}</Size>
      </LabelWrapper>
    </CarouselWrapper>
  );
};

export default Carousel;