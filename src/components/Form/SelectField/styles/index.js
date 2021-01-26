import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  background: none;
  border: none;
  border-bottom: 1.5px solid var(--colors-pigeon);
  color: var(--colors-darkBlue);
  font-size: 1.25rem;
  line-height: 1.2;
  padding: 4px 0 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-image: url("data:image/svg+xml;utf8, <svg viewBox='0 0 12 8' xmlns='http://www.w3.org/2000/svg'> <path d='M.4.9a.85.85 0 011.2 0L6 5.3 10.4.9a.85.85 0 111.2 1.2l-5 5a.85.85 0 01-1.2 0l-5-5A.85.85 0 01.4.9z' fill='black'/></svg>");
  background-repeat: no-repeat;
  background-size: 14px;
  background-position-x: calc(100% - 12px);
  background-position-y: 50%;

  &:hover,
  &:focus {
    outline: none;
    border-bottom-color: var(--colors-irisBlue);
  }
`;
