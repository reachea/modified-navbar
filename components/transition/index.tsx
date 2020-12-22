import React from "react";

import styled from "styled-components";

import { NavBar } from "../navbar";
import { SubNavBar } from "../subnavbar";

interface NavContainerProps {}

export class NavContainer extends React.Component<NavContainerProps> {
  state: {
    scroll: 0;
    isShow: true;
    showNav: false;
  };

  constructor(props: any) {
    super(props);
    this.state = {
      scroll: 0,
      isShow: true,
      showNav: false,
    };

    this.scrollEffect = this.scrollEffect.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollEffect);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollEffect);
  }

  scrollEffect() {
    if (window.scrollY - this.state.scroll > 0) {
      this.setState({
        scroll: window.scrollY,
        isShow: false,
      });

      if (window.scrollY > 6000) {
        this.setState({
          showNav: true,
        });
      } else if (window.scrollY < 6000) {
        this.setState({
          showNav: false,
        });
      }
    } else if (window.scrollY - this.state.scroll < 0) {
      this.setState({
        scroll: window.scrollY,
        isShow: true,
      });

      if (window.scrollY > 6000) {
        this.setState({
          showNav: true,
        });
      } else if (window.scrollY < 6000) {
        this.setState({
          showNav: false,
        });
      }
    }
  }

  render() {
    return (
      <>
        <Transition>
          <NavBar classNameProp={`${this.state.isShow ? "show" : "hidden"}`} />
          <SubNavBar
            classNameProp={`${this.state.isShow ? "down" : "top"}`}
            showNav={this.state.showNav}
          />
        </Transition>
      </>
    );
  }
}

const Transition = styled.div`
  .show {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
  .top {
    top: 0px;
    transition: all 200ms ease-out;
  }
  .down {
    top: 60px;
    transition: all 200ms ease-in;
  }
  .showNav {
    transition: all 200ms ease-in;
  }
  .dontShowNav {
    transition: all 200ms ease-out;
    display: none;
  }
`;
