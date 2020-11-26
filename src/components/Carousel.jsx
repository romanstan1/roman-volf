import React, { useState , useRef } from "react";
import styled, { css } from "styled-components";
import smoothscroll from "smoothscroll-polyfill"; 
import { P1 , P3 } from "./Text";
import COLORS from "../styles/colors"; 
import useInview from "../utils/useInview"; 

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
`;

const CarouselWrapper = styled.div`
  position: relative;
  margin: 15px 0;
`;

const Inner = styled.img`
  height: 350px;
  margin: 0 15px;

  transition: height 0.2s ease, opacity 1s ${(props => props.delay)}s ease-out;
  filter: grayscale(0%);
  opacity: 0;
  /* transition-delay: opacity 2s; */
  ${(props => !props.active &&
    css`
      filter: grayscale(100%);
      height: 280px;
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
    /* margin-right: 250px; */
    padding-right: 50px;
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
    background: ${(props => props.active ? COLORS.black : "transparent")};
    border-radius: 50%;
    height: 6px;
    width: 6px;
    border: 1px solid ${COLORS.black};
  }
  &:hover {
    border-color: ${COLORS.black};
  }
`;

const ItemInner = ({ active, i, item, setModalImg, handleClick }) => {
  const [inViewRef, inView] = useInview(true);
    return(
      <Inner
        ref={inViewRef}
        show={inView}
        delay={i * 0.3}
        active={i === active}
        src={item.image} 
        width={item.width}
        alt=""
        onClick={() => setModalImg(item.image)}
        onMouseEnter={() => handleClick(i)}
      />
    );

};

const Carousel = ({ setModalImg,  images, name, size }) => {
  const [active, setActive] = useState(0);
  const carouselRef = useRef();
  

  // useEffect(() => {
  //   items.addEventListener("touchstart", dragStart);
  //   items.addEventListener("touchend", dragEnd);
  //   items.addEventListener("touchmove", dragAction);
  // },[innerRef])

  const scroll = (index) => {
    const carouselRefCurrent = carouselRef.current;
    // carouselRefCurrent.addEventListener("scroll", scroll);
    const fullWidth = carouselRefCurrent.scrollWidth;

    const unit = (fullWidth / images.length);
    const distance = (unit * index) - (unit / 2);

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


  // useEffect(() => {
  //   const carouselRefCurrent = carouselRef.current;
  //   // carouselRefCurrent.addEventListener("scroll", onScroll);
  //   console.log("carouselRef:", carouselRef);
  //   const fullWidth = carouselRefCurrent.scrollWidth;

  //   const children = Array.from(carouselRefCurrent.children);

  //   children.forEach(ele => {
  //     console.log("ele.scrollLeft:", ele);
  //     console.log("ele.offsetLeft:", ele.offsetLeft);
  //   });

  //   // console.log("distanceScrolled:", distanceScrolled);
  //   return () => {
  //     // carouselRefCurrent.removeEventListener("scroll", onScroll);
  //   };
  // }, []);


  return (
    <CarouselWrapper>
      <CarouselInner ref={carouselRef}>
        {images.map((item, i) => {
          return (
            <ItemInner
              key={item.image} 
              active={active}
              item={item} 
              i={i}
              setModalImg={setModalImg}
              handleClick={handleClick}
            />
            );
        })}
      </CarouselInner>
      <DotsWrapper>
        {images.map((item, i) => {
          return (
            <Dot active={i === active} key={item.image} onClick={() => handleClick(i)}>
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