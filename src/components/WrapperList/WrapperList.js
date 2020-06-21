import React, { Component } from "react";
import styled from "styled-components";
import ListItem from "./../ListItems/ListItem";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const StyledList = styled.ul`
  width: 70%;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

const WrapperList = ({ list, listItems, details, match, searchitem }) => {
  console.log(list);

  if (!details) {
    return (
      <>
        <StyledList>
          {list
            .filter((item) =>
              item.title.toLowerCase().includes(searchitem.toLowerCase())
            )
            .map((item) => {
              {
                console.log(item);
              }
              return <ListItem {...item} />;
            })}
        </StyledList>
      </>
    );
  } else {
    console.log(match.params.id);

    const activeItems = listItems.filter(
      (item) => item.pageid == match.params.id
    );

    return (
      <>
        <StyledList>
          {activeItems.map((item) => {
            return <ListItem details {...item} />;
          })}
        </StyledList>
      </>
    );
  }
};
const mapStateToProps = (state) => {
  const { list, listItems, searchitem } = state;
  return { list, listItems, searchitem };
};

export default connect(mapStateToProps)(withRouter(WrapperList));
