import React, { useReducer } from "react";
import styled, { css } from "styled-components";
import withModal from "../../hoc/withModal";
import { addItem } from "../../actions";
import { addListItem } from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const StyledModal = styled.div`
  width: 25%;
  height: 100%;
  position: absolute;
  right: -25%;
  overflow: hidden;
  margin: 0;
  border-left: 5px solid #1e58ff;
  background-color: white;
  transition: 0.4s;
  opacity: 0;
  @media (max-width: 600px) {
    width: 100%;
    right: -100%;
  }
  ${({ isModalOpen }) =>
    isModalOpen &&
    css`
      opacity: 1;
      transform: translateX(-100%);
    `};
`;
const StyledFormWrapper = styled.form`
  font-family: "Arial";
  height: 700px;
  position: absolute;
  top: 20%;
  width: 70%;
  display: flex;
  flex-direction: column;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
`;
const StyledInput = styled.input`
  padding: 10px 5px;
  font-size: 20px;
  border: none;
  border-bottom: 3px solid grey;
  outline: none;
  transition: 0.5s;
  margin-bottom: 20px;
  :focus {
    border-bottom: 3px solid #1e58ff;
  }
`;
const StyledTextArea = styled.textarea`
  padding: 10px 5px;
  font-size: 20px;
  border: none;
  border-bottom: 3px solid grey;
  outline: none;
  transition: 0.5s;
  height: 150px;
  resize: none;
  :focus {
    border-bottom: 3px solid #1e58ff;
  }
`;
const StyledButtonSubmit = styled.button`
  font-size: 18px;
  margin-top: 20px;
  width: 190px;
  padding: 8px 18px;
  background-color: white;
  border: solid 2px #1e58ff;
  color: black;
  :hover {
    background-color: #1e58ff;
    color: white;
    cursor: pointer;
  }
`;
const Form = ({
  isModalOpen,
  toggle,
  details,
  addListItem,
  addItem,
  match,
}) => {
  const [formValues, addFormValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { title: "", content: "" }
  );

  const createId = () => {
    return Math.random().toString(36).substr(2, 9);
  };

  const listId = match.params.id;
  const listItem = formValues;

  return (
    <StyledModal isModalOpen={isModalOpen}>
      <StyledFormWrapper
        autoComplete="off"
        onSubmit={(event) => {
          if (formValues.title) {
            event.preventDefault();
            formValues.id = createId();
            toggle();
            details ? addListItem(listItem, listId) : addItem(formValues);
            event.target.reset();
          } else {
            event.preventDefault();
            return;
          }
        }}
      >
        <label htmlFor="input__name">
          {details ? "Dodaj nowe zadanie" : " Podaj nazwę nowej listy"}
        </label>

        <StyledInput
          type="text"
          id="input__name"
          placeholder="Tytuł"
          name="title"
          onChange={(e) => addFormValues({ [e.target.name]: e.target.value })}
        />
        {details && (
          <StyledTextArea
            type="text"
            id="input__content"
            name="content"
            placeholder="Treść"
            onChange={(e) => addFormValues({ [e.target.name]: e.target.value })}
          />
        )}

        <StyledButtonSubmit type="submit">
          {details ? "Dodaj zadanie" : "Stwórz listę"}
        </StyledButtonSubmit>
      </StyledFormWrapper>
    </StyledModal>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  addListItem: (item, listId) => dispatch(addListItem(item, listId)),
});

export default connect(null, mapDispatchToProps)(withRouter(Form));
