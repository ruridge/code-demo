import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0 0;
  ${({ theme }) => theme.typography.bodySmall};
  color: var(--colors-bayoux);

  thead {
    border-bottom: 4px solid var(--colors-blank);
  }
`;

export const TableRow = styled.tr``;

export const TableThCell = styled.th`
  white-space: nowrap;
  padding: 18px 0 18px 16px;
  text-align: left;
  font-size: 0.6875rem;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--colors-darkBlue);
  background-color: var(--colors-catskillWhite);
  text-align: ${({ align }) => align};

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    border-radius: 0 8px 8px 0;
    padding-right: 16px;
  }
`;

TableThCell.defaultProps = {
  align: 'left',
};

export const TableCell = styled.td`
  height: 64px;
  padding: 8px 16px 8px 16px;
  border-top: 1px solid var(--colors-mischka);
  text-align: ${({ align }) => align};

  ${TableRow}:first-child & {
    border-top: 0;
  }

  &:first-child {
    border-radius: 8px 0 0 8px;
  }

  &:last-child {
    padding-right: 16px;
    border-radius: 0 8px 8px 0;
    border-bottom: 0;
  }
`;

TableCell.defaultProps = {
  align: 'left',
};
