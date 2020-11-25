import styled, { css } from "styled-components";
import BREAKPOINTS from "../styles/breakpoints";


export const styles = {
  h1: css`
    font-size: 50px;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 36px;
  }
  `,
  h2: css`
    font-size: 28px;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 22px;
  }
  `,
  h3: css`
    font-size: 22px;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 18px;
  }
  `,
  p1: css`
    font-size: 16px;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 16px;
  }
  `,
  p2: css`
    font-size: 14px;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 14px;
  }
  `,
  p3: css`
    font-size: 12px;
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 12px;
  }
  `,
};


export const H1 = styled.h1`
  padding-top: 100px;
  ${styles.h1}
`;

export const H2 = styled.h2`
  ${styles.h2}
`;

export const H3 = styled.h3`
  ${styles.h3}
`;

export const P1 = styled.p`
  ${styles.p1}
`;

export const P2 = styled.p`
  ${styles.p2}
`;

export const P3 = styled.p`
  ${styles.p3}
`;

