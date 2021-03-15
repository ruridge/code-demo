import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: var(--layout-width);
`;

export default function People() {
  return (
    <Container>
      <p>People page coming...</p>
      <Link to="/playground">Playground</Link>
    </Container>
  );
}
