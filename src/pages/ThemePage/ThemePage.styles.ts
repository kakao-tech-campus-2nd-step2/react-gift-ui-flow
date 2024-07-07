import styled from '@emotion/styled';

export const HeaderSection = styled.section<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 100%;
  padding: 50px 20px;
`;

export const HeaderLabel = styled.p`
  font-size: 20px;
  line-height: 24px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.7);
`;

export const HeaderTitle = styled.h1`
  font-size: 30px;
  line-height: 40px;
  padding-top: 12px;
  font-weight: 700;
  color: rgb(255, 255, 255);
  overflow: hidden;
`;

export const HeaderDescription = styled.p`
  padding-top: 12px;
  font-size: 24px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.55);
`;

export const ItemListSection = styled.section`
  padding: 40px 16px 360px;
  width: 100%;
`;
