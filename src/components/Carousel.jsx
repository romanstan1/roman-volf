import React, { useEffect, useState , useRef } from "react";
import styled, { css } from "styled-components";
import { P1 , P3 } from "./Text";
import COLORS from "../styles/colors"; 

const CarouselInner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
  height: 420px;
  width: 100%;
  flex-shrink: 1;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const CarouselWrapper = styled.div`
  position: relative;
  margin: 15px 0;
`;

const Inner = styled.img`
  height: 350px;
  margin: 0 15px;
  transition: 0.2s ease;
  filter: grayscale(0%);
  ${(props => !props.active &&
    css`
      filter: grayscale(100%);
      height: 280px;
    `)
  }
  &:first-of-type {
    margin-left: 0;
  }
  &:last-of-type {
    margin-right: 250px;
    padding-right: 350px;
  }
  cursor: pointer;
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
`;


const DotsWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translate(-50%, 0);
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
    border-radius: 50%;
    background: ${COLORS.black};
    height: 5px;
    width: 5px;
  }
  &:hover {
    border-color: ${COLORS.black};
  }
`;

let posX1 = 0;
let posX2 = 0;
let posInitial;
let posFinal;
const threshold = 100;

function dragStart (e, items) {
  e.preventDefault();
  posInitial = items.offsetLeft;
  
  if (e.type === "touchstart") {
    posX1 = e.touches[0].clientX;
  } else {
    posX1 = e.clientX;

  }
}

function dragAction (e, items) {
  if (e.type === "touchmove") {
    posX2 = posX1 - e.touches[0].clientX;
    posX1 = e.touches[0].clientX;
  } else {
    posX2 = posX1 - e.clientX;
    posX1 = e.clientX;
  }
  items.style.left = `${items.offsetLeft - posX2  }px`;
}
  
function dragEnd (e, items) {
  posFinal = items.offsetLeft;
  if (posFinal - posInitial < -threshold) {
    // shiftSlide(1, "drag");
  } else if (posFinal - posInitial > threshold) {
    // shiftSlide(-1, "drag");
  } else {
    items.style.left = `${posInitial  }px`;
  }
}

const Carousel = ({ setModalImg,  images, name, size }) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef();
  // useEffect(() => {
  //   items.addEventListener("touchstart", dragStart);
  //   items.addEventListener("touchend", dragEnd);
  //   items.addEventListener("touchmove", dragAction);
  // },[innerRef])

  const onScroll = (e) => {
    console.log("e:", e);
    carouselRef.current.scrollTo(0,0);
  };

  useEffect(() => {
    carouselRef.current.scrollTo(0,0);
    const carouselRefCurrent = carouselRef.current;
    carouselRefCurrent.addEventListener("scroll", onScroll);
    return () => {
      carouselRefCurrent.removeEventListener("scroll", onScroll);
    };
  }, []); // eslint-disable-line


  return (
    <CarouselWrapper>
      <CarouselInner ref={carouselRef}>
        {images.map((item, i) => {
          return (
            <Inner
              key={item.image} 
              active={i === active}
              src={item.image} 
              width={item.width}
              alt=""
              onClick={() => setModalImg(item.image)}
              onMouseEnter={() => setActive(i)}
            />
            );
        })}
      </CarouselInner>
      <DotsWrapper>
        {images.map((item) => {
          return (
            <Dot key={item.image}>
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