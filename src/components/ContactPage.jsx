import React from "react";
import styled from "styled-components";
import COLORS from "../styles/colors"; 
import BREAKPOINTS from "../styles/breakpoints";

import Section from "./Section";
import { H1, P1 } from "./Text";

const Subheading = styled(P1)`
  color: ${COLORS.black02};
  padding-top: 60px;
  max-width: 650px;
  line-height: 2.4rem;
  text-align: center;
`;

const Email = styled.a`
  color: ${COLORS.black02};
  margin: 60px 0;
  max-width: 650px;
  line-height: 2.4rem;
  font-size: 22px;
  position: relative;
  z-index: 2;
  span {
    position: relative;
    z-index: 2;
  }
  div {
    transition: 0.1s ease;
    z-index: 1;
    position: absolute;
    content: "";
    bottom: 10px;
    left: -10px;
    width: calc(100% + 20px);
    height: 3px;
    background: ${COLORS.turquoise};
  }
  &:hover {
    div {
      height: 10px;
    }
  }
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 18px;
  }
`;

const ContactPage = () => {
  return (
    <Section minHeight center>
      <H1>Get in touch</H1>
      <Subheading>
        My work is available on direct sale, or by commission. <br />
        Please don’t hesitate to contact me with any questions or comments.
      </Subheading>
      <Email
        href="mailto:"
      >
        <div />
        <span>
          hello@romanvolf.com
        </span>
      </Email>
    </Section>
  );
};

export default ContactPage;
