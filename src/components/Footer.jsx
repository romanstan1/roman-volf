import React from "react";
import styled from "styled-components";
import Section from "./Section";
import COLORS from "../styles/colors"; 
import BREAKPOINTS from "../styles/breakpoints";

const Wrapper = styled.footer`
  background: ${COLORS.black};
  height: 250px;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    height: 150px;
  }
`;

const Text = styled.p`
  color: ${COLORS.white};
  text-align: center;
`;

const StyledSection = styled(Section)`
  display: flex;
  height: 250px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    height: 150px;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <StyledSection>
        <Text>
          All rights reserved
        </Text>
      </StyledSection>
    </Wrapper>
  );
};

export default Footer;
