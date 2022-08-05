import { Component } from 'react';
import Modal from 'components/Modal';

export class App extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  render() {
    // const { showModal } = this.state;
    return <Modal />;
  }
}
