import styled, { keyframes } from 'styled-components';

const animateLeft = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`;

const animateRight = keyframes`
  100% {
    opacity: 0.4;
  }

  50% {
    opacity: 1;
  }

  0% {
    opacity: 0.4;
  }
`;

const LogoLeft = styled.path``;
const LogoRight = styled.path``;

const Wrapper = styled.div`
  width: 36px;

  ${LogoLeft} {
    animation: ${animateLeft} 1s infinite;
    fill: var(--colors-irisBlue);
  }

  ${LogoRight} {
    animation: ${animateRight} 1s infinite;
    fill: var(--colors-irisBlue);
  }
`;

const LoadingLogo = (props) => (
  <Wrapper {...props}>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 119.9 148.4"
      xmlSpace="preserve"
    >
      <defs />
      <g>
        <g>
          <LogoLeft
            d="M49.1,117.1C41.5,112.7,35.4,106.6,31,99c-4.4-7.6-6.7-15.9-6.7-24.8c0-9.1,2.2-17.4,6.7-25.1
        c4.4-7.6,10.5-13.7,18.1-18.1c7.6-4.4,15.9-6.6,24.9-6.7V0C60.7,0,48.3,3.3,37,9.9C25.5,16.5,16.5,25.5,9.9,37
        C3.3,48.4,0,60.8,0,74.2c0,13.4,3.3,25.8,9.9,37.1c6.6,11.3,15.6,20.3,27.1,27c11.4,6.7,23.7,10,37.1,10.1v-24.6
        C65.1,123.7,56.8,121.5,49.1,117.1z"
          />
        </g>
        <g>
          <LogoRight d="M74.1,28.5V120c25.3,0,45.8-20.5,45.8-45.8S99.4,28.5,74.1,28.5z" />
        </g>
      </g>
    </svg>
  </Wrapper>
);

export default LoadingLogo;
