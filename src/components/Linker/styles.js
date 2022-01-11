import styled from 'styled-components';
import devices from '../../styles/breakpoints';
import externalLinkIMG from '../../assets/icons/external-link.svg';

export const Container = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  padding: 1px 1px 1px 8px;
  cursor: pointer;

  width: 50vw;
  height: 7rem;

  background: linear-gradient(180deg, #4d19e6, #b219e6);
  border-radius: 8px;

  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background: linear-gradient(45deg, #4d19e6, #b219e6);
    border-radius: inherit;

    opacity: 0;
    transition: opacity 1s;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }

  @media ${devices.mobileL} {
    width: 80vw;
  }
`;

export const Button = styled.a.attrs({
  target: '_blank',
})`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  width: 100%;
  height: 100%;

  font-size: 2.4rem;
  background-color: #202022;
`;

export const LinkIcon = styled.img.attrs({
  src: externalLinkIMG,
  align: 'right',
})`
  width: 22px;
  height: 22px;

  position: absolute;
  right: 2rem;
`;
