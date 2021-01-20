import React, { useState, useContext } from "react";
import style from "./subnavbar.module.scss";
import styled from "styled-components";

import { ScrollContext } from "../../contexts/scroll";

import { Navigation } from "./Navigation";

import { Navbar, Nav, NavLink, NavDropdown } from "react-bootstrap";
import { ArticleDetectContext } from "../ArticleDetectController";

const SubNavbarContainer = styled(Navbar)`
  background-color: transparent !important;

  .navbar-nav .nav-link.active {
    color: rgb(225, 0, 0) !important;
    border-bottom: 1px solid rgb(225, 0, 0) !important;
  }
`;

const NavDropDown = styled(NavDropdown)`
  .dropdown-menu.show .dropdown-item.active {
    color: rgb(166, 166, 166);
    background-color: transparent;
  }

  &.active {
    border-bottom: 1px solid rgb(225, 0, 0) !important;
    #basic-nav-dropdown {
      color: rgb(225, 0, 0) !important;
    }
  }
`;

interface SubNavBarProp {
  transition: string;
}

export const SubNavBar: React.FC<SubNavBarProp> = ({ transition }): any => {
  const [selectedKey, setSelectedKey] = useState("");
  const { title } = useContext(ArticleDetectContext);

  const handleSelect = (eventKey: string) => {
    setSelectedKey(eventKey);
  };

  return (
    <div
      className={`${style.subNavbarContainer} ${title ? transition : "down"}`}
    >
      <SubNavbarContainer
        bg="light"
        variant="light"
        className={`${style.subNavbarNavContainer} ${
          title
            ? transition === "down"
              ? "showNav"
              : "dontShowNav"
            : "showNav"
        } }`}
      >
        <Nav
          className="mr-auto"
          activeKey={selectedKey}
          onSelect={(eventKey) => handleSelect(eventKey)}
        >
          <NavLink eventKey="1" href="#premium" className={style.subNavbarNav}>
            <p className={style.subNavbarNavText}>PREMIUM</p>
          </NavLink>

          <NavLink eventKey="2" href="#visuals" className={style.subNavbarNav}>
            <p className={style.subNavbarNavText}>VISUALS</p>
          </NavLink>

          <NavLink eventKey="3" href="#videos" className={style.subNavbarNav}>
            <p className={style.subNavbarNavText}>VIDEOS</p>
          </NavLink>

          <NavLink eventKey="4" href="#events" className={style.subNavbarNav}>
            <p className={style.subNavbarNavText}>NEWSLETTERS</p>
          </NavLink>
        </Nav>
      </SubNavbarContainer>

      <Navigation
        classNameProp={title ? transition : "down"}
        showNav={`${
          title
            ? transition === "down"
              ? "dontShowNav"
              : "showNav"
            : "dontShowNav"
        }`}
      />
    </div>
  );
};
