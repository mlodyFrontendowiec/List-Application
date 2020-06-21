import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { removeList, removeListItem } from "./../../actions";

const StyledListItem = styled.li`
  width: 80%;
  height: ${({ details }) => (details ? "180px" : "100px")};
  transform: translateX(-50%);
  list-style: none;
  margin-top: 20px;
  position: relative;
  left: 40%;
  border: 3px solid #1e58ff;
`;
const StyledHeading = styled.h1`
  text-align: center;
  color: black;
  font-size: 20px;
  margin-top: 10px;
`;
const StyledDetailsButton = styled.button`
  position: absolute;
  right: 15px;
  bottom: 15px;
  padding: 3px 6px;
  border: 2px solid #1e58ff;
  background-color: white;
  cursor: pointer;
  text-decoration: none;
  color: black;
  @media (max-width: 700px) {
    padding: 3px 5px;
    border: 1px solid #1e58ff;
    font-size: 14px;
  }
  ${({ remove }) =>
    remove &&
    css`
      right: 140px;
      width: 100px;
      height: 29px;
      font-size: 16px;
      @media (max-width: 700px) {
        padding: 3px 5px;
        border: 1px solid #1e58ff;
        width: 80px;
        font-size: 14px;
      }
    `}
  :hover {
    background-color: #1e58ff;
    color: white;
  }
`;
const StyledDate = styled.p`
  color: black;
  position: absolute;
  left: 10px;
  bottom: 10px;
`;
const StyledParagraph = styled.p`
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;

const ListItem = (props) => {
  const { title, id, content, details, removeList, removeListItem } = props;

  const date = new Date();
  const removeId = id;
  return (
    <StyledListItem details={details} data-id={id}>
      <StyledHeading>{title}</StyledHeading>
      {details && <StyledParagraph>{content}</StyledParagraph>}
      {!details && (
        <StyledDetailsButton as={Link} to={`/list/details/${id}`}>
          See details
        </StyledDetailsButton>
      )}
      {!details && (
        <StyledDetailsButton
          remove={true}
          onClick={(id) => removeList(removeId)}
        >
          Remove
        </StyledDetailsButton>
      )}
      {details && (
        <StyledDetailsButton
          remove={true}
          onClick={(id) => removeListItem(removeId)}
        >
          Remove
        </StyledDetailsButton>
      )}
      <StyledDate> created: {date.toLocaleDateString()} </StyledDate>
    </StyledListItem>
  );
};
const mapDispatchToProps = (dispatch) => ({
  removeList: (id) => dispatch(removeList(id)),
  removeListItem: (id) => dispatch(removeListItem(id)),
});

export default connect(null, mapDispatchToProps)(ListItem);
