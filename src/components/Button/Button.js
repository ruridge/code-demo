import PropTypes from 'prop-types';

import { ButtonStyled } from './styles';

export default function Button({ children, ...props }) {
  return (
    <ButtonStyled type="button" {...props}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  /** Button text content */
  children: PropTypes.node,
};
