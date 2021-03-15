import { Field, Label, Hint } from '../FieldParts';
import { Select } from './SelectField.styled';

export default function SelectField({ children, label, helper, errorMsg, ...props }) {
  const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

  return (
    <Field as="label">
      <Label>{label}</Label>
      <Select {...props} {...invalidAttr}>
        {children}
      </Select>
      <Hint errorMsg={errorMsg} helper={helper} />
    </Field>
  );
}
