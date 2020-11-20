import React from "react";
import styled, { css } from "styled-components";
import BREAKPOINTS from "../styles/breakpoints";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1320px;
  padding: 0 30px;
  ${(props) => props.minHeight && 
    css`
      /* height of page minus header and footer  */
      min-height: calc(100vh - 70px - 250px);
    `
  }
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    padding: 0 15px;
    ${(props) => props.minHeight && 
      css`
        /* height of page minus header and footer  */
        min-height: calc(100vh - 70px - 150px);
      `
    }
  }
`;

const Section = ({ children, className, minHeight }) => {
  return (
    <Wrapper className={className} minHeight={minHeight}>
      {children}
    </Wrapper>
  );
};

export default Section;
