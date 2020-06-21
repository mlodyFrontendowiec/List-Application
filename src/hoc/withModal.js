import React, { Component } from "react";
const withModal = (NewComponent) =>
  class WithModal extends Component {
    state = {
      isModalOpen: false,
    };
    toggleModal = () => {
      this.setState((prevState) => ({
        isModalOpen: !prevState.isModalOpen,
      }));
    };
    render() {
      const { isModalOpen } = this.state;
      return (
        <NewComponent
          isModalOpen={isModalOpen}
          toggle={this.toggleModal}
          {...this.props}
        />
      );
    }
  };

export default withModal;
