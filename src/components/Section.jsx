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
      min-height: calc(100vh - 70px - 80px);
    `
  }
  ${(props) => props.bottomPadding && 
    css`
      padding-bottom: 130px;
    `
  }
  ${(props) => props.topPadding && 
    css`
      padding-top: 40px;
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
        /* min-height: calc(100vh - 70px - 100px); */
      `
    }
  }
`;

const Section = ({ 
  children, className, minHeight, center, bottomPadding, topPadding }) => {
  return (
    <Wrapper
      className={className}
      minHeight={minHeight}
      center={center} 
      bottomPadding={bottomPadding}
      topPadding={topPadding}
    >
      {children}
    </Wrapper>
  );
};

export default Section;
