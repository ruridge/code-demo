import styled, { css } from 'styled-components/macro';
import { Link } from 'react-router-dom';

import Text from 'components/Text';
import Button from 'components/Button';

import { ReactComponent as IconUser } from 'theme/icons/user.svg';

const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

const StyledIconUser = styled(IconUser)`
  fill: white;
  margin-right: 8px;
  width: 20px;
  height: 20px;
`;

export default function People() {
  return (
    <Container>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
        `}
      >
        <Text as="h1" size="h2">
          People
        </Text>
        <Button>
          <StyledIconUser />
          Add member
        </Button>
      </div>
      <Link to="/playground">Playground</Link>
    </Container>
  );
}
