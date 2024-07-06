import styled from '@emotion/styled';

export const Img = styled.img`
  object-fit: cover;
  object-position: center center;
  aspect-ratio: auto;
  width: 100%;
  height: 100%;
  max-width: 50px;
  max-height: 50px;
  border-radius: 18px;
`;

export const SelectSpacer = styled.div`
  width: 100%;
  background-color: inherit;

  @media screen and (min-width: 768px) {
    height: 80px;
  }

  @media screen and (min-width: 0) {
    height: 40px;
  }
`;
