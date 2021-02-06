import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link, useLocation } from "react-router-dom";
import COLORS, { hexToRGBA, cssColor } from "../styles/colors"; 
import BREAKPOINTS from "../styles/breakpoints";
import Section from "./Section";
import { styles } from "./Text";
import FONTS from "../styles/fonts";

const Wrapper = styled.div`
  display: flex;
  height: 70px;
  align-items: center;
  margin: 0 auto;
`;

const Outer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background: ${COLORS.beige};
  z-index: 5;
`;

const Spacer = styled.div`
  height: 70px;
`;

const Logo = styled(Link)`
  font-family: ${FONTS.bebasNeue};
  font-size: 48px;
`;

const Nav = styled.nav`
  display: flex;
  height: 50px;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
`;

const DesktopInner = styled.span`
  @media screen and (max-width: ${BREAKPOINTS.small}px) {
    display: none;
  }
`;

const MobileNav = styled.nav`
  position: fixed;
  display: none;
  flex-direction: column;
  top: 70px;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: flex-start;
  justify-content: flex-start;
  background: ${COLORS.beige};
  padding: 50px 0;
  z-index: 10;
  @media screen and (max-width: ${BREAKPOINTS.small}px) {
    display: flex;
  }
`;

const BurgerIcon = styled.div`
  display: none;
  height: 34px;
  width: 34px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  > div {
    width: 22px;
    height: 4px;
    background: black;
    transform-origin: center;
    transition: 0.1s ease;
    &:first-of-type {
      transform: translate(0px, 6px);
    }
    &:last-of-type {
      transform: translate(0px, -6px);
    }
  }

  ${(props) => props.isOpen && 
    css`
    > div { 
      &:first-of-type {
        transform: translate(0px, 2px) rotate(45deg);
      }
      &:last-of-type {
        transform: translate(0px, -2px) rotate(-45deg);;
      }
    }
    `
  }

  @media screen and (max-width: ${BREAKPOINTS.small}px) {
    display: flex;
  }
`;

const NavLink = styled(Link)`
  ${styles.p2};
  padding: 0 5px;
  margin: 0 20px;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease-in-out;
  font-weight: 500;
  outline: none;
  ${(props) => props.active && 
    css`
      opacity: 1;
    `
  }
  &:hover {
    opacity: 1;
  }
  &:last-of-type {
    margin-right: 5px;
  }
  @media screen and (max-width: ${BREAKPOINTS.small}px) {
    ${styles.h2};
    margin: 30px 15px;
    padding: 5px 5px;
    :focus{background-color: ${cssColor(hexToRGBA(COLORS.turquoise, 0.99))};}
  }
`;

const Header = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (val) => {
    return pathname === `/${val}`? "true" : undefined; 
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
      window.scrollTo(0,0);
    }, 300);
  },[pathname]);
  
  return  (
    <>
      <Outer>
        <Section>
          <Wrapper>
            <Logo to="/">
              Roman Volf
            </Logo>
            <Nav>
              <DesktopInner>
                <NavLink active={isActive("")} to="/">Works</NavLink>
                <NavLink active={isActive("statement")} to="/statement">Statement</NavLink>
                <NavLink active={isActive("contact")} to="/contact">Contact</NavLink>
              </DesktopInner>
              <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <div />
                <div />
              </BurgerIcon>
            </Nav>
          </Wrapper>
        </Section>
      </Outer>
      <Spacer />
      {isOpen && 
        <MobileNav>
          <NavLink active={isActive("")} to="/">Works</NavLink>
          <NavLink active={isActive("statement")} to="/statement">Statement</NavLink>
          <NavLink active={isActive("contact")} to="/contact">Contact</NavLink>
        </MobileNav>}
    </>
  );
};

export default Header;
