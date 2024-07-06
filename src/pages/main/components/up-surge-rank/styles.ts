import { Section } from '@/styles/GlobalStyles';
import styled from '@emotion/styled';

export const UpSurgeRankLayout = styled(Section)`
  padding: 0px 16px 32px;
`;

export const RankUpTitle = styled.h2`
  color: rgb(0, 0, 0);
  width: 100%;
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;

  @media screen and (min-width: 768px) {
    text-align: center;
    font-size: 35px;
    line-height: 50px;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 20px 0px 7px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const TargetButton = styled.button`
  width: 100%;
  min-width: 58px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
`;

export const ButtonText = styled.div`
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 44px;
  height: 44px;
  border-radius: 16px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 700;
  background-color: rgb(70, 132, 233);
  transition: background-color 200ms ease 0s;
`;

export const ButtonTitle = styled.div`
  padding: 5px 0px;
  font-size: 14px;
  line-height: 16px;
  color: rgb(70, 132, 233);
  font-weight: 700;
  transition:
    color 200ms ease 0s,
    font-weight 200ms ease 0s;

  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
`;

export const ButtonSpacer = styled.div`
  width: 100%;
  background-color: inherit;
  height: 16px;
`;

const Button = styled.button`
  background: none;
  border: 0;
  box-sizing: initial;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: inherit;
  overflow: visible;
  vertical-align: inherit;
`;

export const giftTypeButton = styled(Button)`
  padding: 13px 20px;
  font-size: 16px;
  line-height: 16px;
  color: rgb(70, 132, 233);
  font-weight: 700;
  transition:
    color 200ms ease 0s,
    font-weight 200ms ease 0s;

  @media screen and (min-width: 768px) {
    padding: 20px 30px;
    font-size: 22px;
    line-height: 22px;
  }
`;

export const GiftTypeButtonContainer = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: rgb(230, 241, 255);
  border-radius: 8px;

  @media screen and (min-width: 768px) {
    border-radius: 12px;
  }
`;

export const RankList = styled.div`
  @media screen and (min-width: 768px) {
    padding: 40px 0px 60px;
  }
  padding: 20px 0px 30px;
`;

export const RankItem = styled.div`
  width: 100%;
  display: block;
`;

export const Rank = styled.p``;

export const MenuImg = styled.img`
  object-fit: cover;
  object-position: center center;
  border-radius: 4px;
  aspect-ratio: 1 / 1;

  width: 100%;
`;

export const StoreTitle = styled.p`
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

export const Menu = styled.h3`
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

export const Price = styled.p`
  padding-top: 8px;
  font-size: 20px;
  line-height: 30px;
  color: rgb(34, 34, 34);
  font-weight: 700;
  word-break: break-word;
`;

export const MoreButtonItem = styled(Button)`
  @media screen and (min-width: 768px) {
    height: 60px;
    font-size: 16px;
  }
  width: 100%;
  border-radius: 4px;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 200ms ease 0s;
  height: 40px;
  font-size: 15px;
  box-shadow: rgb(204, 204, 204) 0px 0px 0px 1px inset;
  color: rgb(17, 17, 17);
  max-width: 480px;
`;

export const MoreButtonContainer = styled.div`
  width: 100%;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 30px;
`;
