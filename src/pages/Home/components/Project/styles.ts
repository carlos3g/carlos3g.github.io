import styled from 'styled-components';

import starSVG from '../../../../assets/icons/star.svg';
import { breakpoints } from '../../../../constants/style';

export const Container = styled.a.attrs({
  target: '_blank',
  rel: 'noreferrer',
})`
  background-color: #202022;
  padding: 4rem;
  width: 100%;
  border: 1px solid transparent;
  transition: border-color 1s 0.1s;

  &:hover {
    border-color: var(--color-text);
  }

  & > * + * {
    margin-top: 1rem;
  }

  @media ${breakpoints.mobileL} {
    padding: 2.8rem;
  }
`;

export const Header = styled.div``;

export const Techs = styled.h3`
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  font-size: 1rem;
`;

export const Body = styled.div``;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 2.4rem;
  line-height: 3rem;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2.4rem;
  color: #949495;
  margin-top: 5px;
`;

export const Footer = styled.div``;

export const StarCounter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1rem;
  text-align: center;
  letter-spacing: 0.2rem;
  color: #949495;
`;

export const StarIcon = styled.img.attrs({
  src: starSVG,
  width: 12,
})`
  margin-right: 5px;
  padding-bottom: 4px;
`;
