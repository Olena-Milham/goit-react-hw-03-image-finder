import { Component } from 'react';

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');
  }
  render() {
    return (
      <div
        class="overlay"
        style={{
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100vw',
          height: '100vh',
          backgroundColor: 'rgb(o,0,0,0.5)',
        }}
      >
        <div
          class="modal"
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
          <img src="" alt="" />
        </div>
      </div>
    );
  }
}
