import React from "react";
import style from "./navbar.module.scss";
import styled from "styled-components";

import { Navbar, Nav, NavLink, Container } from "react-bootstrap";

const NavbarContainer = styled(Navbar)`
  background-color: transparent !important;

  .navbar-nav .nav-link.active {
    color: rgb(23, 23, 23) !important;
    background-color: rgb(255, 255, 255) !important;
  }
`;

export const NavBar: React.FC<any> = (): any => {
  return (
    <div className={style.navbarContainer}>
      <NavbarContainer
        expand="sm"
        bg="light"
        variant="light"
        className={style.navbarNavContainer}
        collapseOnSelect
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
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
