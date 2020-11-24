import React from "react";
import styled from "styled-components";
import Section from "./Section";
import { H1, P1 } from "./Text";

const Para = styled(P1)`
  margin: 150px 7vw 50px 7vw;
  line-height: 2rem;
`;

const StatementPage = () => {
  return (
    <Section minHeight>
      <H1>Statement Page</H1>
      <Para>
        Hi everyone and thank you for taking time out of your day to take a look at how I spend mine. I am a designer/artist person with a over 20 years experience under my belt. I’ve worked on ads for Nissan, posters for movies, reports for lawyers and logos for businesses. I’m always working on something new.
        If you are interested in hiring me for freelance design work please feel free to email me. I’m always excited to talk about new potential design projects.
        If you are interested in staying up to date with new poster releases please sign up for my mailing list or check out any of my social media outlets.
      </Para>
    </Section>
  );
};

export default StatementPage;
