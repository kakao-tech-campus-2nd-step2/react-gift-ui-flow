import styled from '@emotion/styled'

const Wrapper = styled.section`
  width: 100%;
  height: 76px;
  padding: 18px 16px;
  box-sizing: border-box;
  background: rgb(250, 250, 250);

  @media screen and (min-width: 768px) {
    height: 150px;
    padding: 40px 16px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .inner {
      max-width: 1024px;
      flex-direction: row;
      justify-content: flex-start;

      img {
        object-fit: cover;
        object-position: center center;
        aspect-ratio: auto;
        width: 40px;
        height: 40px;
        border-radius: 16px;
        cursor: pointer;

        @media screen and (min-width: 768px) {
          width: 70px;
          height: 70px;
          border-radius: 24px;
        }
      }

      p {
        padding-left: 16px;
        font-size: 17px;
        line-height: 22px;
        color: rgb(51, 51, 51);
        font-weight: 500;

        @media screen and (min-width: 768px) {
          font-size: 28px;
          line-height: 35px;
        }
    }
  }
`;

const SelectGiftRecipient = () => {
  return (
    <Wrapper>
      <div>
        <div className='inner'>
          <img src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png" alt="친구 선택 유도 아이콘" />
          <p>선물 받을 친구를 선택해주세요.</p>
        </div>
      </div>
    </Wrapper>
  )
}

export default SelectGiftRecipient