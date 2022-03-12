import PropTypes from 'prop-types';
import styled from 'styled-components';
import typography from 'theme/typography';

const Text = styled.span`
  ${({ theme, size }) => size && theme.typography[size]}
`;
const TextLight = styled(Text)`
  color: var(--colors-lynch);
`;

const textTypes = {
  size: PropTypes.oneOf(Object.keys(typography)),
  children: PropTypes.node.isRequired,
};
Text.propTypes = textTypes;
TextLight.propTypes = textTypes;

export default Text;
export { TextLight };
