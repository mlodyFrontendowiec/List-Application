import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledLogo = styled.h1`
  font-size: 40px;
  color: #1e58ff;
  position: absolute;
  left: 5%;
  top: 3%;
  font-weight: 600;
  text-decoration: none;
  @media (max-width: 600px) {
    font-size: 26px;
  }
  ${({ title }) =>
    title &&
    css`
      left: 50%;
      top: 10%;
      transform: translateX(-50%);
      font-size: 30px;
    `};
`;

const Logo = ({ children, title, link }) => {
  if (link) {
    return (
      <StyledLogo as={Link} to="/" title={title}>
        {children}
      </StyledLogo>
    );
  } else {
    return <StyledLogo title={title}>{children}</StyledLogo>;
  }
  return;
};

export default Logo;
