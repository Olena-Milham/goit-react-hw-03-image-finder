import Modal from 'components/ui/Modal';
import { useState } from 'react';

export const ImageItem = ({ data }) => {
  const [open, setOpen] = useState(false);
  const toggleModal = () => setOpen(!open);
  return (
    <li onClick={toggleModal}>
      {open && (
        <Modal onClose={toggleModal}>
          <img src={data.largeImageURL} alt="" />
        </Modal>
      )}

      <img src={data.webformatURL} alt={data.tags} />
    </li>
  );
};

// state = {

//     showModal: false,
//   };

//   toggleModal = () => {
//     this.setState(state => ({
//       showModal: !state.showModal,
//     }));
//   };

// const { showModal } = this.state;
// {showModal && (
//     <Modal onClose={this.toggleModal}>
//       <h1>Hello it's modal window </h1>
//       <img src="" alt="" />{' '}
//     </Modal>
// )}
