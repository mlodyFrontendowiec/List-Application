import React from "react";
import styled from "styled-components";
import plusIcon from "assets/plus.svg";

const StyledButtonIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: #1e58ff;
  border-radius: 50%;
  background-image: url(${plusIcon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: absolute;
  bottom: 5%;
  right: 5%;
  cursor: pointer;
  z-index: 99;
  font-family: "Montserrat";
`;

const ButtonIcon = ({ toggle }) => {
  return <StyledButtonIcon onClick={toggle} />;
};

export default ButtonIcon;
