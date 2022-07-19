import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { ButtonStyled } from './Button.styled';

function Button({ children, as = 'button', ...props }) {
  if (as === 'button') {
    props.type ?? (props.type = 'button');
  }
  return (
    <ButtonStyled {...props} as={as}>
      {children}
    </ButtonStyled>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  withshadow: PropTypes.bool,
};

const ButtonIcon = styled.svg`
  fill: white;
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

ButtonIcon.propTypes = {
  as: PropTypes.elementType.isRequired,
};

Button.Icon = ButtonIcon;
export default Button;
