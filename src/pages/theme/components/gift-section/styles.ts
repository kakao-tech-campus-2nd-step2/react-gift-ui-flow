import styled from '@emotion/styled';
import * as G from '@/styles/globalStyles';

export const GiftSectionLayout = styled.section`
  width: 100%;
  padding: 28px 16px 180px;

  @media screen and (min-width: 768px) {
    padding: 40px 16px 360px;
  }
`;

export const GiftImg = styled(G.Img)`
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  aspect-ratio: 1 / 1;
`;

export const GiftContainer = styled(G.Div)`
  width: 100%;
`;

export const GiftInfoContainer = styled(G.Div)`
  width: 100%;
  padding-top: 12px;
`;

export const StoreInfo = styled.p`
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(153, 153, 153);
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MenuInfo = styled.h3`
  width: 100%;
  font-size: 14px;
  line-height: 22px;
  font-weight: 400;
  color: rgb(51, 51, 51);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const PriceInfo = styled.p`
  padding-top: 8px;
  font-size: 20px;
  line-height: 30px;
  color: rgb(34, 34, 34);
  font-weight: 700;
  word-break: break-word;
`;
