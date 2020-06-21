import React from "react";
const initialState = {
  list: [],
  listItems: [],
  searchitem: "",
};
const myReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_LIST":
      return {
        ...state,
        list: [...state.list, payload],
      };
    case "ADD_LIST_ITEM":
      console.log(payload);
      return {
        ...state,
        listItems: [...state.listItems, payload],
      };
    case "REMOVE_LIST":
      console.log(payload);
      return {
        ...state,
        list: [...state.list.filter((item) => item.id != payload.id)],
      };
    case "REMOVE_LIST_ITEM":
      console.log(payload);
      return {
        ...state,
        listItems: [...state.listItems.filter((item) => item.id != payload.id)],
      };
    case "SET_SEARCH_ITEM":
      console.log(payload);
      return {
        ...state,
        searchitem: payload,
      };

    default:
      return state;
  }
};
export default myReducer;
