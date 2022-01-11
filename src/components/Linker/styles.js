import styled from 'styled-components';
import devices from '../../styles/breakpoints';
import externalLinkIMG from '../../assets/icons/external-link.svg';

export const Wrapper = styled.a.attrs({
  target: '_blank',
})`
  display: flex;
  position: relative;
  padding: 1px 1px 1px 8px;
  background: linear-gradient(180deg, #4d19e6, #b219e6);
  border-radius: 8px;
  height: 7rem;
  width: 50vw;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: var(--gradient-primary);
    border-radius: inherit;
    opacity: 0;
    transition: opacity 1s linear;
    z-index: -1;
  }

  &:hover::before {
    opacity: 1;
  }

  @media ${devices.mobileL} {
    width: 80vw;
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  background-color: #202022;
  border-radius: inherit;
  font-size: 2.4rem;
`;

export const LinkIcon = styled.img.attrs({
  src: externalLinkIMG,
})``;
