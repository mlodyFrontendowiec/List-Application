import React from "react";

export const addItem = (list) => ({
  type: "ADD_LIST",
  payload: { ...list },
});

export const addListItem = (item, pageid) => ({
  type: "ADD_LIST_ITEM",
  payload: { ...item, pageid },
});

export const removeList = (id) => ({
  type: "REMOVE_LIST",
  payload: { id },
});
export const removeListItem = (id) => ({
  type: "REMOVE_LIST_ITEM",
  payload: { id },
});
export const setSearchItem = (value) => ({
  type: "SET_SEARCH_ITEM",
  payload: value,
});
