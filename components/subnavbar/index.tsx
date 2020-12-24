import React, { useState, useContext } from "react";
import style from "./subnavbar.module.scss";
import styled from "styled-components";

import { ScrollContext } from "../../contexts/scroll";

import { Navigation } from "./navigation";

import { Navbar, Nav, NavLink, NavDropdown } from "react-bootstrap";

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
  classNameProp: string;
}

export const SubNavBar: React.FC<SubNavBarProp> = ({ classNameProp }): any => {
  const [selectedKey, setSelectedKey] = useState("");

  const dropDownOne = ["5", "6", "7", "8"];
  const dropDownTwo = ["9", "10", "11", "12"];

  const handleSelect = (eventKey: string) => {
    setSelectedKey(eventKey);
  };

  //context
  const scrollContext = useContext(ScrollContext);

  //state

  return (
    <div className={`${style.subNavbarContainer} ${classNameProp}`}>
      <SubNavbarContainer
        bg="light"
        variant="light"
        className={`${style.subNavbarNavContainer} ${
          scrollContext.viewOne ? "showNav" : "dontShowNav"
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

          <NavDropDown
            title="CATEGORIES"
            id="basic-nav-dropdown"
            className={`${style.subNavbarNavDropdown} ${
              dropDownOne.filter(
                (selectKey) => selectKey === selectedKey
              )[0] === selectedKey
                ? "active"
                : ""
            }`}
          >
            <NavDropdown.Item eventKey="5" href="#sample/1">
              sample 1
            </NavDropdown.Item>

            <NavDropdown.Item eventKey="6" href="#sample/2">
              sample 2
            </NavDropdown.Item>

            <NavDropdown.Item eventKey="7" href="#sample/3">
              sample 3
            </NavDropdown.Item>

            <NavDropdown.Item eventKey="8" href="#sample/4">
              sample 4
            </NavDropdown.Item>
          </NavDropDown>

          <NavDropDown
            title="MARKETS"
            id="basic-nav-dropdown"
            className={`${style.subNavbarNavDropdown} ${
              dropDownTwo.filter(
                (selectKey) => selectKey === selectedKey
              )[0] === selectedKey
                ? "active"
                : ""
            } `}
          >
            <NavDropdown.Item eventKey="9" href="#sample/5">
              sample 5
            </NavDropdown.Item>

            <NavDropdown.Item eventKey="10" href="#sample/6">
              sample 6
            </NavDropdown.Item>

            <NavDropdown.Item eventKey="11" href="#sample/7">
              sample 7
            </NavDropdown.Item>

            <NavDropdown.Item eventKey="12" href="#sample/8">
              sample 8
            </NavDropdown.Item>
          </NavDropDown>
        </Nav>
      </SubNavbarContainer>

      <Navigation
        classNameProp={classNameProp}
        showNav={`${scrollContext.viewTwo ? "showNav" : "dontShowNav"}`}
      />
    </div>
  );
};
