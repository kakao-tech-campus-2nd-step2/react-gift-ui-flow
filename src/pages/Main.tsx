/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { themes } from '@/styles/themes';

const Section = styled.section`
  height: 100px;
  padding: 40px 16px;
  background: #fafafa;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const InnerDiv = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const GridDiv = styled.div`
  width: 100%;
  display: grid;
  gap: 0px;
  grid-template-columns: repeat(6, 1fr);
  a {
    text-decoration: none;
    outline: none;
  }
`;

const iconImgStyle = css`
  width: 70px;
  height: 70px;
  border-radius: 24px;
`;

const titleStyle = css`
  padding-left: 16px;
  font-size: 28px;
  line-height: 35px;
  font-weight: 500;
`;

const cardImgStyle = css`
  max-width: 90px;
  max-height: 90px;
  border-radius: 32px;
`;

const labelStyle = css`
  padding-top: 7px;
  line-height: 17px;
  color: #000;
`;

const buttonStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #feeb00;
  padding: 20px;
  border-radius: 8px;
`;

function Main() {
  return (
    <div className="main">
      <Section>
        <Wrapper>
          <InnerDiv>
            <img
              src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
              alt="친구 선택 유도 아이콘"
              css={iconImgStyle}
            />
            <p css={titleStyle}>선물 받을 친구를 선택해주세요.</p>
          </InnerDiv>
        </Wrapper>
      </Section>

      <section>
        <Wrapper>
          <InnerDiv>
            <GridDiv>
              {Object.keys(themes).map((key) => (
                <a href={`/theme/${key}`}>
                  <Wrapper style={{ flexDirection: 'column', padding: '20px' }}>
                    <img
                      css={cardImgStyle}
                      src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
                      alt={key}
                    />
                    <p css={labelStyle}>{themes[key as keyof typeof themes].label}</p>
                  </Wrapper>
                </a>
              ))}
            </GridDiv>
          </InnerDiv>
        </Wrapper>
      </section>

      <section style={{ padding: '40px 16px' }}>
        <Wrapper>
          <InnerDiv>
            <div css={buttonStyle}>
              <h4>선물을 추천받고 싶은 친구를 선택해주세요.</h4>
            </div>
          </InnerDiv>
        </Wrapper>
      </section>

      <section></section>
    </div>
  );
}
export default Main;
