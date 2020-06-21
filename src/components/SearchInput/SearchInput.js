import React, { useState } from "react";
import styled from "styled-components";
import { setSearchItem } from "actions";
import { connect } from "react-redux";

const StyledInput = styled.input`
  width: 170px;
  height: 40px;
  background-color: white;
  border: 3px solid #1e58ff;
  border-radius: 20px;
  padding: 10px;
  position: absolute;
  right: 5%;
  top: 5%;
  outline: none;
  z-index: -1;
  @media (max-width: 600px) {
    width: 120px;
    height: 35px;
    padding: 3px 5px;
    font-size: 12px;
    top: 4%;
  }
  ::placeholder {
    @media (max-width: 600px) {
      font-size: 12px;
    }
    font-size: 16px;
  }
`;

const SearchInput = ({ setSearchItem }) => {
  const handleInput = (e) => {
    setSearchItem(e.target.value);
  };
  return (
    <StyledInput
      placeholder="search list"
      onChange={(event) => {
        handleInput(event);
      }}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  setSearchItem: (value) => dispatch(setSearchItem(value)),
});

export default connect(null, mapDispatchToProps)(SearchInput);
