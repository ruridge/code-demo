import styled from 'styled-components';

export const Input = styled.input`
  display: block;
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1.5px solid var(--colors-pigeon);
  color: var(--colors-darkBlue);
  font-size: 1.25rem;
  line-height: 1.2;
  padding: 4px 0 8px;

  &:hover,
  &:focus {
    outline: none;
    border-bottom-color: var(--colors-irisBlue);
  }

  &::-webkit-input-placeholder,
  &::placeholder {
    color: var(--colors-bayoux);
  }
`;
