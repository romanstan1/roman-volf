import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { P1 , P2 } from "./Text";
import { greenBlack, vividOrange, pastelOne, pastelTwo } from "../images";

const CarouselInner = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
  height: 420px;
  width: 100%;
  overflow-x: scroll;
  img {
    margin: 0 20px;
    &:first-of-type {
      margin-left: 0;
    }
    &:last-of-type {
      margin-right: 50px;
      padding-right: 50px;
    }
  }
  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const CarouselWrapper = styled.div`
  /* display: flex; */
`;

const Landscape = styled.img`
  width:${(props => props.width ? props.width : 400)}px;
`;

const Portrait = styled.img`
  height:${(props => props.height ? props.height : 400)}px;
`;

const Name = styled(P1)`
  line-height: 2rem;
`;

const Size = styled(P2)`
  line-height: 2rem;
`;



const Carousel = ({ images, name, size }) => {
  return (
    <CarouselWrapper>
      <CarouselInner>
        {images.map(item => {
          if(item.orient === "portrait") {
            return <Portrait src={item.image} height={item.height} key={item.image} alt="" />;
          }
          return <Landscape src={item.image} width={item.width} key={item.image} alt="" />;
        })}
      </CarouselInner>
      <Name>Name goes here</Name>
      <Size>Size goes here</Size>

    </CarouselWrapper>
  );
};

const Home = () => {
  return (
    <Section minHeight bottomPadding>
      <Carousel images={greenBlack} /> 
      <Carousel images={pastelOne} /> 
      <Carousel images={pastelTwo} /> 
      <Carousel images={vividOrange} /> 
    </Section>
  );
};

export default Home;
