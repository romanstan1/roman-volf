import styled from "styled-components";
import BREAKPOINTS from "../styles/breakpoints";

export const H1 = styled.h1`
  padding-top: 100px;
  font-size: 50px;
 @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 36px;
  }
`;

export const H2 = styled.h2`
 font-size: 28px;
 @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 22px;
  }
`;

export const H3 = styled.h3`
 font-size: 22px;
 @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 18px;
  }
`;

export const P1 = styled.p`
 font-size: 16px;
 @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 16px;
  }
`;

export const P2 = styled.p`
 font-size: 14px;
 @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 14px;
  }
`;

