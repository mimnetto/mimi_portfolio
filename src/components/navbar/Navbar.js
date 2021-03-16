import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

const Navbar = (props) => {
  const barAnimation = useSpring({
    from: { transform: 'translate3d(0, -10rem, 0)' },
    transform: 'translate3d(0, 0, 0)',
  });

  const Barbot = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 900,
    config: config.wobbly,
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 700,
    config: config.wobbly,
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <NavLinks  className=".d-md-none .d-lg-block" style={linkAnimation}>
            <AnchorLink offset='150' href='#profile'>Profile</AnchorLink>
            <AnchorLink offset='120' href='#skills'>Skills</AnchorLink>
            <AnchorLink offset='120' href='#projects'>Projects</AnchorLink>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      <NavBot
        style={Barbot}
        />
    </NavBar>
    <CollapseMenu
      navbarState={props.navbarState}
      handleNavbar={props.handleNavbar}
    />
   </>
  )
}

export default Navbar

const NavBar = styled(animated.div)`
  position: fixed;
  font-family: september, sans-serif;
  width: 100%;
  top: 0;
  left: 0;
  background: #2a363b;
  z-index: 1;
  font-size: 2rem;
`;

const NavBot = styled(animated.nav)`
  position: fixed;
  font-family: september, sans-serif;
  width: 100%;
  top: 0;
  left: 0;
  background: #ff847c;
   z-index: 0;
  height: 1rem;
  margin-top: 5rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 3rem;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  display: inherit;

  & a {
    color: #fecea8;
    text-transform: uppercase;
    font-size: 62.5%;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 .5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #cec79f;
      border-bottom: 1px solid #cec79f;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;
