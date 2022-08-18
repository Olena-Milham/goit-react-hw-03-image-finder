import { Component } from 'react';
import { createPortal } from 'react-dom';
import 'styles.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
    window.addEventListener('keydown', this.handleKeyDown);
  }
  // clearing method for eventleasteners, settimeount, http ,intervals...
  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  // we create method to turn our anonimus function to be able to reuse it
  handleKeyDown = e => {
    console.log(e.code);
    if (e.code === 'Escape') {
      console.log('call the right method');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      console.log('backdrop click');
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div onClick={this.handleBackdropClick} className="overlay">
        <div className="modal">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
