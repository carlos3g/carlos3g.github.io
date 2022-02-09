import styled from 'styled-components';
import devices from '../../styles/breakpoints';
import externalLinkIMG from '../../assets/icons/external-link.svg';

export const Wrapper = styled.a.attrs({
  target: '_blank',
})`
  display: flex;
  position: relative;
  padding: 1px 1px 1px 8px;
  background: var(--gradient-primary);
  border-radius: 8px;
  height: 7rem;
  width: 50vw;

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
