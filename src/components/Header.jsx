import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Section from "./Section";

const Wrapper = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
`;

const Logo = styled(Link)`
  font-family: 'Bebas Neue';
  font-size: 48px;
`;

const Nav = styled.nav`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

const NavLink = styled(Link)`
  font-size: 14px;
  padding: 0 5px;
  margin: 0 20px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  &:last-of-type {
    margin-right: 5;
  }
`;

const Header = () => {
  return (
    <Section>
      <Wrapper>
        <Logo to="/">
          Roman Volf
        </Logo>
        <Nav>
          <NavLink to="/">Works</NavLink>
          <NavLink to="/statement">Statement</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </Nav>
      </Wrapper>
    </Section>
  );
};

export default Header;
