import styled, { keyframes } from 'styled-components';

import devices from '../../styles/breakpoints';

const continousGradient = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 0 50%;
  }
`;

export const LinkerContainer = styled.div`
  margin-bottom: 1rem;
  padding: 0.2rem;

  width: 50vw;
  height: 12vh;

  border-radius: 3px;
  background: linear-gradient(45deg, #4000ff, #bf00ff, #ff00c0);
  background-size: 300% 100%;
  animation: none;

  &:hover {
    animation: ${continousGradient} 2s infinite linear;
  }

  @media ${devices.mobileL} {
    width: 80vw;
  }
`;

export const Linker = styled.a.attrs({
  target: '_blank',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  border-radius: 3px;
  width: 100%;
  height: 100%;

  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3rem;

  background-color: #202022;
`;
