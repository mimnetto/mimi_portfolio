import React from 'react';
import ReactDOM from 'react-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
  const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

  if (props.navbarState === true) {
    return (
      <CollapseWrapper style={{
        transform: open.interpolate({
          range: [0, 0.2, 0.3, 1],
          output: [0, -20, 0, -200],
        }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
      }}
      >
        <NavLinks>
        <li>
          <AnchorLink offset={() => 100} href='#profile' onClick={props.handleNavbar}>Profile</AnchorLink>
        </li>
        <li>
        <AnchorLink offset={() => 100} href='#skills' onClick={props.handleNavbar}>Skills</AnchorLink>
        </li>
        <li>
        <AnchorLink offset={() => 100} href='#projects' onClick={props.handleNavbar}>Projects</AnchorLink>
        </li>
      </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div)`
  background: #2a363b;
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  z-index: 1;
`;

const NavLinks = styled.ul`
  list-style-type: none;
  padding: 2rem 1rem 2rem 2rem;

  & li {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #cec79f;
      border-bottom: 1px solid #cec79f;
    }
  }
`;
