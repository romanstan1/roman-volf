import React from "react";
import styled, { css } from "styled-components";
import Section from "./Section";
import { H1 } from "./Text";

import VO3 from "../assets/vividorange-3.JPG";
import VO4 from "../assets/vividorange-4.JPG";


const CarouselWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-grow: 0;
  height: 500px;
  width: 100%; 
  img {
    margin: 20px;
  }
`;

const Landscape = styled.img`
  width:${(props => props.width ? props.width : 400)}px;
  /* height: auto; */
`;

const Portrait = styled.img`
  /* width: auto; */
  height:${(props => props.height ? props.height : 400)}px;
 
`;


const Carousel = ({ images }) => {
  return (
    <CarouselWrapper>
      {images.map(item => {
        if(item.size === "portrait") {
          return <Portrait src={item.image} height={item.height} key={item.image} alt="" />;
        }
        return <Landscape src={item.image} width={item.width} key={item.image} alt="" />;
      })}
    </CarouselWrapper>
  );
};

const vividOrange = [
  { 
    image: VO3, 
    size:"landscape", 
    // width: 500,
  },
  { 
    image: VO4, 
    size:"portrait", 
  }
];

const Home = () => {
  return (
    <Section minHeight>
      <Carousel images={vividOrange} /> 
    </Section>
  );
};

export default Home;
