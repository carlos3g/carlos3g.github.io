import styled from 'styled-components';

import starSVG from '../../assets/icons/star.svg';

export const Container = styled.a.attrs({
  target: '_blank',
})`
  background-color: #202022;
  color: var(--color-text);
  text-decoration: none;
  margin-bottom: 8px;
  padding: 40px;
  width: 648px;
  height: 194px;
`;

export const Header = styled.div``;

export const Tech = styled.h3`
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 10px;
`;

export const Body = styled.div`
  margin-top: 10px;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
`;

export const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #949495;
  margin-top: 5px;
`;

export const Footer = styled.div`
  margin-top: 10px;
`;

export const StarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StartIcon = styled.img.attrs({
  src: starSVG,
  width: 12,
})`
  margin: 0 5px 4px 0;
`;

export const StarLabel = styled.span`
  font-weight: 600;
  line-height: 10px;
  letter-spacing: 2px;
  font-size: 10px;
  color: #949495;
`;
