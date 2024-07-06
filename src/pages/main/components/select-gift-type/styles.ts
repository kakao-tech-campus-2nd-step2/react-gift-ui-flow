import { Section } from '@/styles/GlobalStyles';
import styled from '@emotion/styled';

export const SelectGiftLayout = styled(Section)`
  padding: 14px 14px 3px;
`;

export const GiftTypeTitle = styled.p`
  padding-top: 5px;
  font-size: 13px;
  line-height: 17px;
  color: rgb(51, 51, 51);
`;

export const GiftTypeContainer = styled.div`
  width: 100%;
  padding: 13px 0px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const GiftImg = styled.img`
  object-fit: cover;
  object-position: center center;
  aspect-ratio: auto;
  width: 100%;
  height: 100%;
  max-width: 50px;
  max-height: 50px;
  border-radius: 18px;
`;
