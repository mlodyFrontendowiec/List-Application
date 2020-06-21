import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo/Logo";
import ButtonIcon from "../components/ButtonIcon/ButtonIcon";
import MainTemplate from "../templates/mainTemplate";
import Form from "../components/Form/Form";
import withModal from "../hoc/withModal";
import WrapperList from "../components/WrapperList/WrapperList";

const DetailsPage = ({ isModalOpen, toggle }) => {
  return (
    <MainTemplate>
      <Logo link={true}>List app</Logo>
      <Logo title>Items</Logo>
      <ButtonIcon toggle={toggle} />
      <Form isModalOpen={isModalOpen} toggle={toggle} details />
      <WrapperList details />
    </MainTemplate>
  );
};

export default withModal(DetailsPage);
