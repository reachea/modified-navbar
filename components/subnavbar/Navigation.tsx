import React, { useContext, useState } from "react";
import style from "./subnavbar.module.scss";
import styled from "styled-components";

import { Navbar } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faGooglePlusSquare,
  faYoutubeSquare,
} from "@fortawesome/free-brands-svg-icons";
import { ArticleDetectContext } from "../ArticleDetectController";

const NavigationContainer = styled(Navbar)`
  background-color: transparent !important;

  .navbar-nav .nav-link.active {
    color: rgb(225, 0, 0) !important;
    border-bottom: 1px solid rgb(225, 0, 0) !important;
  }

  .svg-inline--fa {
    margin-left: 10px;
  }
`;

interface SubNavBarProp {
  classNameProp: string;
  showNav: string;
}

export const Navigation: React.FC<SubNavBarProp> = ({
  classNameProp,
  showNav,
}): any => {
  const { title, id } = useContext(ArticleDetectContext);

  return (
    <div className={`${style.subNavbarContainer} ${classNameProp} ${showNav}`}>
      <NavigationContainer
        bg="light"
        variant="light"
        className={`${style.subNavbarNavContainer}`}
      >
        {/* <FontAwesomeIcon icon={faFacebookSquare} size="2x"></FontAwesomeIcon>
        <FontAwesomeIcon icon={faGooglePlusSquare} size="2x"></FontAwesomeIcon>
        
        <FontAwesomeIcon icon={faYoutubeSquare} size="2x"></FontAwesomeIcon> */}
        <div>
          {title} {id}
        </div>
      </NavigationContainer>
    </div>
  );
};
