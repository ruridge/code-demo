import styled, { css } from 'styled-components';

export const ButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;

  font-size: 1rem;
  font-weight: 500;
  line-height: 1;
  min-height: 44px;
  padding: 12px 24px;
  border: none;
  border-radius: 24px;

  text-decoration: none; // when rendering as <a>

  background: var(--colors-irisBlue);
  color: var(--colors-blank);

  transition: box-shadow 250ms ease;

  &:hover {
    background: var(--colors-irisBlue-light);
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 3px var(--colors-irisBlue-lighter);
  }

  ${({ $withShadow }) =>
    $withShadow &&
    css`
      box-shadow: 0px var(--space-1-5) var(--space-3) 0px var(--colors-irisBlue-boxShadow);
    `}
`;
