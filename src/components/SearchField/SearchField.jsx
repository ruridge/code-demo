import * as React from 'react';
import styled, { css } from 'styled-components/macro';
import { ReactComponent as IconSearch } from 'theme/icons/search.svg';

const activeCss = css`
  border-color: var(--border-color);
  outline: none;
  box-shadow: var(--shadow-color) inset 1px 2px 3px 0px;
`;

const StyledInput = styled.input`
  --border-color: #e7effc;
  --shadow-color: #c6d6ef;

  border: 1px solid transparent;
  border-radius: var(--space-5);
  color: var(--colors-darkBlue);
  font-size: var(--space-3-5);
  padding: var(--space-3) var(--space-3) var(--space-3) var(--space-11);

  ${(props) => Boolean(props.value) && activeCss}

  &::placeholder {
    color: var(--colors-lynch);
  }

  &:hover {
    border-color: var(--border-color);
  }
  &:focus {
    ${activeCss}
  }
`;

function SearchField({ label = 'Search employees', value, onChange }) {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <IconSearch
        css={css`
          position: absolute;
          top: 13px;
          left: 16px;
          fill: var(--colors-lynch);
          width: 18px;
          height: 18px;
        `}
      />
      <StyledInput
        type="text"
        placeholder={`${label}...`}
        aria-label={label}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default SearchField;
