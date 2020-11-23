import React from "react";
import styled from "styled-components";
import COLORS from "../styles/colors"; 
import BREAKPOINTS from "../styles/breakpoints";

import Section from "./Section";
import { H1,H2, H3, P1 } from "./Text";

const Heading = styled(H1)`
  /* margin-top: 40px; */
`;

const Subheading = styled(P1)`
  color: ${COLORS.black02};
  padding-top: 60px;
  max-width: 650px;
  line-height: 2.4rem;
  text-align: center;
`;

const Email = styled.a`
  color: ${COLORS.black02};
  padding: 60px 0;
  max-width: 650px;
  line-height: 2.4rem;
  font-size: 22px;
  &:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: ${BREAKPOINTS.large}px) {
    font-size: 18px;
  }
`;

const ContactPage = () => {
  return (
    <Section minHeight center>
      <Heading>Get in touch</Heading>
      <Subheading>My work is available on direct sale, or by commission. <br />Please don’t hesitate to contact me with any questions or comments.
      </Subheading>
      <Email
        href="mailto:"
      >hello@romanvolf.com
      </Email>
    </Section>
  );
};

export default ContactPage;
