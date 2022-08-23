import styled from 'styled-components';

import { breakpoints } from '../../constants/style';

export const Container = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10vh 0;
`;

export const Anchors = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.5rem;
  width: 50%;

  & > * + * {
    margin-top: 1.5rem;
  }

  @media ${breakpoints.mobileL} {
    width: 80%;
  }
`;
