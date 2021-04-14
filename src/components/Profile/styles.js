import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
`;

export const Details = styled.div`
  margin-left: 1.5rem;
`;

export const Name = styled.h1`
  font-weight: 700;
  font-size: 2rem;
`;

export const Description = styled.p`
  font-size: 1.4rem;
  line-height: 2.8rem;
  color: #949495;
`;
