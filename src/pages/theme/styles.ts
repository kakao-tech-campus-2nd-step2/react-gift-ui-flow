import styled from '@emotion/styled';
import * as Global from '@/styles/GlobalStyles';

export const TitleSectionLayout = styled.section`
  padding: 27px 20px 23px;
  width: 100%;
  background-color: rgb(75, 77, 80);

  @media screen and (min-width: 768px) {
    padding: 50px 20px;
  }
`;

export const TypeText = styled.p`
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  color: rgba(255, 255, 255, 0.7);

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 24px;
  }
`;

export const Title = styled.h2`
  font-weight: 700;
  color: rgb(255, 255, 255);
  font-size: 18px;
  line-height: 26px;
  word-break: break-all;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 40px;
    padding-top: 12px;
    word-break: break-word;
  }
`;

export const subTitle = styled.p`
  padding-top: 5px;
  font-size: 14px;
  line-height: 20px;
  color: rgba(255, 255, 255, 0.55);
  word-break: break-all;

  @media screen and (min-width: 768px) {
    padding-top: 12px;
    font-size: 24px;
    line-height: 32px;
  }
`;

export const GiftSectionLayout = styled.section`
  width: 100%;
  padding: 28px 16px 180px;

  @media screen and (min-width: 768px) {
    padding: 40px 16px 360px;
  }
`;

export const GiftImg = styled(Global.Img)`
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  aspect-ratio: 1 / 1;
`;

export const GiftContainer = styled(Global.Div)`
  width: 100%;
`;

export const GiftInfoContainer = styled(Global.Div)`
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
