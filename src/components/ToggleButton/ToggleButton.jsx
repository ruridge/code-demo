import * as React from 'react';
import styled, { css } from 'styled-components/macro';

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  column-gap: var(--space-2-5);
  padding: var(--space-3) var(--space-4);
  cursor: pointer;
  background-color: white;
  border-radius: var(--space-3);
  border: 1px solid var(--colors-spindle);
  font-weight: 500;
  font-size: 14px;
  color: var(--colors-darkBlue);

  &:hover {
    background-color: var(--colors-linkWater);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--colors-irisBlue);
  }
`;

export default function ToggleButton({ pressed, togglePressed, children, name }) {
  return (
    <StyledButton type="button" aria-pressed={pressed} onClick={togglePressed} name={name}>
      {children}
      <div
        css={css`
          width: var(--space-3);
          height: var(--space-3);
          background-color: ${pressed ? 'var(--colors-irisBlue)' : 'white'};
          border: var(--space-0-5) solid white;
          box-shadow: 0 0 0 1px var(--colors-irisBlue);
          border-radius: 2px;
        `}
      />
    </StyledButton>
  );
}
