import React from "react";
import styled from "styled-components";
import Section from "./Section";
import COLORS from "../styles/colors"; 
import BREAKPOINTS from "../styles/breakpoints";
import { P2 } from "./Text";

const Wrapper = styled.footer`
  /* background: ${COLORS.black}; */
  /* border-top: 1px solid ${COLORS.grey02}; */
  height: 150px;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    height: 150px;
  }
`;

const Text = styled(P2)`
  color: ${COLORS.grey02};
  text-align: center;
  margin: 4px 10px;
`;

const StyledSection = styled(Section)`
  display: flex;
  height: 150px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${COLORS.grey03};
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    height: 100px;
  }
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  /* align-items: flex-start; */
  /* margin-right: 200px; */
  p {
    &:first-of-type {
    /* border-right: 1px solid ${COLORS.black02}; */
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <StyledSection center>
        <TextWrap>
          <Text>
            All images copyright Roman Volf.
          </Text>
          <Text>
            All rights reserved.
          </Text>
        </TextWrap>
      </StyledSection>
    </Wrapper>
  );
};

export default Footer;
