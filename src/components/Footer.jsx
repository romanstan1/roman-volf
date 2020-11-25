import React from "react";
import styled from "styled-components";
import Section from "./Section";
import COLORS from "../styles/colors"; 
import BREAKPOINTS from "../styles/breakpoints";
import { P3 } from "./Text";

const Wrapper = styled.footer`
  /* background: ${COLORS.black}; */
  /* border-top: 1px solid ${COLORS.grey02}; */
  height: 80px;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    /* height: 150px; */
  }
`;

const Left = styled(P3)`
  color: ${COLORS.grey02};
  text-align: left;
  margin: 4px 15px 4px 0px;
`;

const Right = styled(P3)`
  color: ${COLORS.grey02};
  text-align: right;
  margin: 4px 0px 4px 15px;
`;

const StyledSection = styled(Section)`
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${COLORS.grey03};
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    /* height: 100px; */
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
          <Left>
            ©2020 Roman Volf
          </Left>
          <Right>
            hello@romanvolf.com
          </Right>
        </TextWrap>
      </StyledSection>
    </Wrapper>
  );
};

export default Footer;
