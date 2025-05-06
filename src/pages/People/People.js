import * as React from 'react';
import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';
// utils
import { usePeopleQuery } from 'utils/api-client';
import { formatCurrency } from 'utils/lib';
import { useEmployment } from 'utils/hooks';
// components
import { Container } from 'components/Layout';
import Text, { TextLight } from 'components/Text';
import Button from 'components/Button';
import { Card, CardBody } from 'components/Card';
import SearchField from 'components/SearchField';
import { Table, TableThCell, TableRow, TableCell } from 'components/Table';
import ToggleButton from 'components/ToggleButton';
import LoadingLogo from 'components/LoadingLogo';
// theme
import { ReactComponent as IconUser } from 'theme/icons/user.svg';

const StyledTableThCell = styled(TableThCell)`
  width: 200px;
`;

export default function People() {
  const [query, setQuery] = React.useState('');
  const { setEmployment, isContractor, isEmployee, employment } = useEmployment();

  const { data, isLoading, isSuccess, isError, error } = usePeopleQuery(employment, query);

  return (
    <Container>
      <div
        css={css`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: baseline;
            gap: var(--space-2);
          `}
        >
          <Text as="h1" size="h2">
            People
          </Text>
          {isSuccess && (
            <TextLight size="bodyCaption">
              {data.length}&nbsp;{data.length === 1 ? 'employee' : 'employees'}
            </TextLight>
          )}
        </div>
        <Button as={Link} to="/people/new" $withShadow>
          <Button.Icon as={IconUser} />
          Add member
        </Button>
      </div>
      <Card
        css={css`
          margin-top: var(--space-8);
        `}
      >
        <CardBody
          css={css`
            padding-top: var(--space-4);
          `}
        >
          <div
            css={css`
              margin-bottom: var(--space-4);
              display: flex;
              justify-content: space-between;
            `}
          >
            <SearchField
              label="Search by name"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div
              css={css`
                display: flex;
                column-gap: var(--space-4);
              `}
            >
              <ToggleButton
                pressed={isContractor}
                togglePressed={() => setEmployment('contractor')}
                children="Contractor"
              />
              <ToggleButton
                pressed={isEmployee}
                togglePressed={() => setEmployment('employee')}
                children="Employee"
              />
            </div>
          </div>
          <Table>
            <thead>
              <TableRow>
                <TableThCell
                  css={css`
                    width: 203px;
                  `}
                >
                  Name
                </TableThCell>
                <TableThCell
                  css={`
                    width: 183px;
                  `}
                >
                  Role
                </TableThCell>
                <StyledTableThCell children="Type" />
                <StyledTableThCell children="Country" />
                <StyledTableThCell
                  children="Salary"
                  align="right"
                  css={css`
                    padding-right: 16px;
                    padding-left: 0;
                  `}
                />
                <TableThCell />
              </TableRow>
            </thead>
            <tbody>
              {isSuccess ? (
                data?.length ? (
                  data?.map(({ name, jobTitle, employment, country, currency, salary, id }) => {
                    return (
                      <TableRow key={id}>
                        <TableCell>{name}</TableCell>
                        <TableCell>{jobTitle}</TableCell>
                        <TableCell>{employment}</TableCell>
                        <TableCell>{country}</TableCell>
                        <TableCell align="right">
                          {formatCurrency(country, currency, salary)}
                        </TableCell>
                        <TableCell align="right">
                          <Link to={`/people/edit/${id}`}>Edit</Link>
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="6">
                      <Text
                        as="p"
                        css={css`
                          text-align: center;
                        `}
                      >
                        No users found. Try another search.
                      </Text>
                    </td>
                  </tr>
                )
              ) : null}
            </tbody>
          </Table>
          {isLoading ? (
            <div
              css={css`
                display: flex;
                justify-content: center;
                padding: 28px;
              `}
            >
              <LoadingLogo />
            </div>
          ) : null}

          {isError ? (
            <div
              css={css`
                color: red;
              `}
            >
              <p>There was an error:</p>
              <pre>{error.message}</pre>
            </div>
          ) : null}
        </CardBody>
      </Card>
    </Container>
  );
}
