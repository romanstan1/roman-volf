import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { H1, P1 } from "./Text";
import BREAKPOINTS from "../styles/breakpoints";

const Para = styled(P1)`
  margin: 100px 7vw 50px 7vw;
  line-height: 2rem;
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    margin: 50px 5px 50px 5px;
  }
`;

const Heading = styled(H1)`
  margin: 50px 7vw 0px 7vw;
  line-height: 2rem;
  @media screen and (max-width: ${BREAKPOINTS.medium}px) {
    margin: 0px 5px 50px 5px;
  }
`;

const StatementPage = () => {
  return (
    <Section minHeight>
      <Heading>Statement</Heading>
      <Para>
        My most recent work explores depth perception. 
        I have tried to create a sense of three dimensionality using
        a range of contrasting techniques,
        most notably linear perspective. 
        <br />
        <br />
        Within these paintings, the planes of 
        tessellating shapes aim to contradict one another, 
        leading the eye down a three dimensional
        path, only to then break this momentum. 
        <br />
        <br />
        Additionally, the ordered geometric design allows 
        precedence to be given to the colour relationships used throughout the 
        composition. These colours 
        sometimes work with, and sometimes work against the 
        three dimensional illusion. 
        <br />
        <br />
        My most notable influences are 
        from Rothko, Matisse, and M.C. Escher.  
      </Para>
    </Section>
  );
};

export default StatementPage;
