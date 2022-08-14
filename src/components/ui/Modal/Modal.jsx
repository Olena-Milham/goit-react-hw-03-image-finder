import { Component } from 'react';
import { createPortal } from 'react-dom';

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
      <div
        onClick={this.handleBackdropClick}
        className="overlay"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      >
        <div
          className="modal"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minHeight: '300px',
            maxWidth: '600px',
            width: '100%',
            padding: '12px',
            backgroundColor: '#fff',
            borderRadius: '3px',
            boxShadow:
              '0px 2px 1px -1px rgba(0,0,0,0.2), opx 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12),',
          }}
        >
          {this.props.children}
        </div>
      </div>,
      modalRoot
    );
  }
}
