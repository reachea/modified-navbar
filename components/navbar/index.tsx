import React, { useContext } from "react";
import style from "./navbar.module.scss";
import styled from "styled-components";

import { Navbar, Nav, NavLink } from "react-bootstrap";
import { ArticleDetectContext } from "../ArticleDetectController";

const NavbarContainer = styled(Navbar)`
  background-color: transparent !important;

  .navbar-nav .nav-link.active {
    color: rgb(23, 23, 23) !important;
    background-color: rgb(255, 255, 255) !important;
  }
`;

interface NavBarProps {
  classNameProp: string;
}

export const NavBar: React.FC<NavBarProps> = ({ classNameProp }): any => {
  const { title } = useContext(ArticleDetectContext);

  return (
    <div
      className={`${style.navbarContainer} ${title ? classNameProp : "show"}`}
    >
      <NavbarContainer
        expand="sm"
        bg="light"
        variant="light"
        className={style.navbarNavContainer}
        collapseOnSelect
      >
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className={style.navHamburgerBtn}
        />
        <Navbar.Brand href="#home" className={style.brandLogo}>
          Navbar
        </Navbar.Brand>
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className={style.navCollapse}
        >
          <Nav className="mr-auto">
            <NavLink href="#news" className={style.navbarNav}>
              <p className={style.navbarNavText}>NEWS</p>
            </NavLink>

            <NavLink href="#jobs" className={style.navbarNav}>
              <p className={style.navbarNavText}>JOBS</p>
            </NavLink>

            <NavLink href="#companies" className={style.navbarNav}>
              <p className={style.navbarNavText}>COMPANIES</p>
            </NavLink>

            <NavLink href="#events" className={style.navbarNav}>
              <p className={style.navbarNavText}>EVENTS</p>
            </NavLink>

            <NavLink href="#about" className={style.navbarNav}>
              <p className={style.navbarNavText}>ABOUT</p>
            </NavLink>

            <NavLink href="#advertise" className={style.navbarNav}>
              <p className={style.navbarNavText}>ADVERTISE</p>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </NavbarContainer>
    </div>
  );
};
