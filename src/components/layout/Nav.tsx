import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background: var(--lowlight);
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-110% - var(--top)));
    }
  }
`;

const HamburgerMenu = styled.article`
  position: absolute;
  right: 1rem;
  top: 1rem;
  width: 4rem;
  cursor: pointer;
  display: none;
  outline: none;
  * {
    pointer-events: none;
  }
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const NavItems = styled.ul`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  text-align: center;
  @media only screen and (max-width: 768px) {
    --top: 1rem;
    transition: 0.3s ease transform;
    background-color: var(--primaryDark);
    border: 2px solid var(--primary);
    border-right: 0;
    padding: 2rem;
    max-width: 300px;
    position: absolute;
    right: 0;
    top: var(--top);
  }
`;

const NavItem = styled.li`
  display: inline-block;
  transition: 0.3s ease background-color;
  &:hover {
    background-color: var(--primary);
  }
  a {
    display: inline-block;
    font-family: 'RobotoMono Regular';
    padding: 1rem 2rem;
    font-size: 2rem;
    color: var(--primaryLight);
  }
  .active {
      color: var(--highlight);
  }
  @media only screen and (max-width: 768px) {
    display: block;
    margin-bottom: 1rem;
  }
`;

const CloseNav = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: block;
    width: 3rem;
    margin: 0 0 0 auto;
    cursor: pointer;
    * {
      pointer-events: none;
    }
  }
`;

const Nav: React.FC = () => {
  const [showNavDropdown, setShowNavDropdown] = useState(false);
  return (
    <NavStyles>
      <HamburgerMenu
        onClick={() => setShowNavDropdown(!showNavDropdown)}
        role="button"
        onKeyDown={() => setShowNavDropdown(!showNavDropdown)}
        tabIndex={0}
      >
        <MdMenu />
      </HamburgerMenu>
      <NavItems className={!showNavDropdown ? 'hide-item' : ''}>
        <CloseNav
          onClick={() => setShowNavDropdown(!showNavDropdown)}
          role="button"
          onKeyDown={() => setShowNavDropdown(!showNavDropdown)}
          // The tabindex global attribute indicates that its element can be focused,
          // and where it exists in sequential keyboard navigation.
          tabIndex={0}
        >
          <MdClose />
        </CloseNav>
        <NavItem>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNavDropdown(!showNavDropdown)}
            role="button"
            onKeyDown={() => setShowNavDropdown(!showNavDropdown)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/about"
            onClick={() => setShowNavDropdown(!showNavDropdown)}
            role="button"
            onKeyDown={() => setShowNavDropdown(!showNavDropdown)}
            tabIndex={0}
          >
            About
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/projects"
            onClick={() => setShowNavDropdown(!showNavDropdown)}
            role="button"
            onKeyDown={() => setShowNavDropdown(!showNavDropdown)}
            tabIndex={0}
          >
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/experience"
            onClick={() => setShowNavDropdown(!showNavDropdown)}
            role="button"
            onKeyDown={() => setShowNavDropdown(!showNavDropdown)}
            tabIndex={0}
          >
            Experience
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/contact"
            onClick={() => setShowNavDropdown(!showNavDropdown)}
            role="button"
            onKeyDown={() => setShowNavDropdown(!showNavDropdown)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </NavItem>
      </NavItems>
    </NavStyles>
  );
};

export default Nav;
