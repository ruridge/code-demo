import styled from 'styled-components';

export const Card = styled.div`
  --spacer: 32px;
  --radius: 10px;
  background-color: var(--colors-blank);
  border-radius: var(--radius);
  box-shadow: 6px 6px 54px rgba(0, 0, 0, 0.05);
`;

export const CardHeader = styled.div`
  padding: var(--spacer);
  border-bottom: 1px solid var(--colors-mischka);
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
`;

export const CardBody = styled.div`
  padding: var(--spacer);
`;

export const CardFooter = styled.div`
  padding: var(--spacer);
  background-color: #f9faff;
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
`;
