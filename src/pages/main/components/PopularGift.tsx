import styled from '@emotion/styled';

import PopGiftList from '@/pages/main/components/PopGiftList';
import { breakpoints } from '@/styles/variants';

const PopularContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: calc(100% - 32px);
  padding: 0px 16px 32px;
`;

const PopularWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h2`
  color: rgb(0, 0, 0);
  width: 100%;
  justify-content: center;
  text-align: left;
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;

  @media screen and (min-width: ${breakpoints.sm}) {
    text-align: center;
    font-size: 35px;
    line-height: 50px;
  }
`;

const GenderNav = styled.div`
  width: 100%;
  max-width: 1024px;
  padding: 20px 0px 7px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
`;

const GenderContainer = styled.div`
  display: flex;
`;

const GenderBtn = styled.button`
  background: none;
  border: 0;
  box-sizing: initial;
  color: inherit;
  cursor: pointer;
  font: inherit;
  line-height: inherit;
  overflow: visible;
  vertical-align: inherit;
  width: 100%;
  min-width: 58px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;

  @media screen and (min-width: ${breakpoints.sm}) {
    min-width: 90px;
  }
`;

const GenderBtnText = styled.div`
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
  background-color: rgb(230, 241, 255);
  transition: background-color 200ms ease 0s;

  :focus {
    background-color: rgb(70, 132, 233);
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    width: 60px;
    height: 60px;
    border-radius: 24px;
    font-size: 20px;
  }
`;

const GenderExText = styled.p`
  padding: 5px 0px;
  font-size: 14px;
  line-height: 16px;
  color: rgb(102, 102, 102);
  font-weight: 400;
  transition:
    color 200ms ease 0s,
    font-weight 200ms ease 0s;

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 10px 0px 6px;
    font-size: 20px;
    line-height: 24px;
  }
`;

const PopularNav = styled.div`
  width: 100%;
  display: flex;
  margin-top: 16px;
  -webkit-box-pack: center;
  justify-content: center;
  border: 1px solid rgba(70, 132, 233, 0.1);
  background-color: rgb(230, 241, 255);
  border-radius: 8px;

  @media screen and (min-width: ${breakpoints.sm}) {
    border-radius: 12px;
  }
`;

const PopBtn = styled.button`
  padding: 13px 20px;
  font-size: 16px;
  line-height: 16px;
  color: rgb(70, 132, 233);
  transition:
    color 200ms ease 0s,
    font-weight 200ms ease 0s;

  :focus {
    font-weight: 700;
  }

  @media screen and (min-width: ${breakpoints.sm}) {
    padding: 20px 30px;
    font-size: 22px;
    line-height: 22px;
  }
`;

const PopularGift = () => {
  return (
    <PopularContainer>
      <PopularWrapper>
        <Title>실시간 급상승 랭킹</Title>
        <GenderNav>
          <GenderContainer>
            <GenderBtn>
              <GenderBtnText>ALL</GenderBtnText>
              <GenderExText>전체</GenderExText>
            </GenderBtn>
            <GenderBtn>
              <GenderBtnText>👩🏻‍🦳</GenderBtnText>
              <GenderExText>여성이</GenderExText>
            </GenderBtn>
            <GenderBtn>
              <GenderBtnText>👨🏻‍🦳</GenderBtnText>
              <GenderExText>남성이</GenderExText>
            </GenderBtn>
            <GenderBtn>
              <GenderBtnText>👦🏻</GenderBtnText>
              <GenderExText>청소년이</GenderExText>
            </GenderBtn>
          </GenderContainer>
          <PopularNav>
            <PopBtn>받고 싶어한</PopBtn>
            <PopBtn>많이 선물한</PopBtn>
            <PopBtn>위시로 받은</PopBtn>
          </PopularNav>
        </GenderNav>
        <PopGiftList />
      </PopularWrapper>
    </PopularContainer>
  );
};

export default PopularGift;
