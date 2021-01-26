import PropTypes from 'prop-types';
import { Field, Label, Hint } from '../FieldParts';
import { Input } from './styles';

export default function TextField({ label, helper, errorMsg, ...props }) {
  const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

  return (
    <Field as="label">
      <Label>{label}</Label>
      <Input {...props} {...invalidAttr} />
      <Hint errorMsg={errorMsg} helper={helper} />
    </Field>
  );
}

TextField.defaultProps = {
  type: 'text',
};

TextField.propTypes = {
  /** Field type */
  type: PropTypes.string,
  /** Field label */
  label: PropTypes.string.isRequired,
  /** Field description message */
  helper: PropTypes.string,
  /** Field error message */
  errorMsg: PropTypes.string,
};
