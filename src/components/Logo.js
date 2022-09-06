import React from "react";
import logo from "../images/logo.png";
import styled from "styled-components";
import "typeface-open-sans-condensed";
import withSimpleErrorBoundary from "../util/withSimpleErrorBoundary";

const LogoImg = styled.img`
  width: 9.3em;
  height: 3.4em;
  margin-right: 0.5em;
  margin-bottom: 0;
`;

const LogoTypography = styled.div`
  flex: 1;
  font-family: "Open Sans Condensed", sans-serif !important;
  font-size: 1.75em !important;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  background-color: #fdf6e3;
  display: flex;
  align-items: center;
  padding: 1em;
  padding-right: 1.7em;
  height: 64px;

  :hover {
    text-decoration: none;
    color: black;
  }
`;

const Logo = () => (
  <StyledLink href="https://mooc.fi">
    <LogoImg src={logo} />
  </StyledLink>
);

export default withSimpleErrorBoundary(Logo);
