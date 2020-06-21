import React, { Component } from "react";
import styled, { css } from "styled-components";
import plusIcon from "assets/plus.svg";
import Form from "components/Form/Form";
import MainTemplate from "../templates/mainTemplate";
import WrapperList from "../components/WrapperList/WrapperList";
import withModal from "../hoc/withModal";
import { connect } from "react-redux";
import Logo from "../components/Logo/Logo";
import ButtonIcon from "../components/ButtonIcon/ButtonIcon";
import { Link } from "react-router-dom";
import SearchInput from "../components/SearchInput/SearchInput";

class StartPage extends Component {
  render() {
    const { isModalOpen, toggle } = this.props;
    return (
      <MainTemplate>
        <Logo link={true}>List app</Logo>
        <Logo title>Active List</Logo>
        <ButtonIcon toggle={toggle} />
        <Form isModalOpen={isModalOpen} toggle={toggle} />
        <WrapperList />
        <SearchInput />
      </MainTemplate>
    );
  }
}

export default withModal(StartPage);
