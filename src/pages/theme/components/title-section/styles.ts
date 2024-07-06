import { TitleSectionLayoutProps } from '@/interface/styleTypes';
import styled from '@emotion/styled';

export const TitleSectionLayout = styled.section<TitleSectionLayoutProps>`
  padding: 27px 20px 23px;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};

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
