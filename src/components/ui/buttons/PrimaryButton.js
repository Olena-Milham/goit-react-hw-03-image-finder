import 'styles.css';
import PropTypes from 'prop-types';

export const PrimaryButton = ({ children, onClick }) => {
  return (
    <button className="Button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// =======
// import styled from 'styled-components';

// export const PrimaryButton = styled.button``;
