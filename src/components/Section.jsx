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
      min-height: calc(100vh - 70px - 150px);
    `
  }
  ${(props) => props.center && 
    css`
      /* height of page minus header and footer  */
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `
  }
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    padding: 0 15px;
    ${(props) => props.minHeight && 
      css`
        /* height of page minus header and footer  */
        min-height: calc(100vh - 70px - 100px);
      `
    }
  }
`;

const Section = ({ children, className, minHeight, center }) => {
  return (
    <Wrapper className={className} minHeight={minHeight} center={center}>
      {children}
    </Wrapper>
  );
};

export default Section;
