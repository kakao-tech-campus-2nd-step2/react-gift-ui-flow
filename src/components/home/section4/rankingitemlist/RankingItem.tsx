import styled from '@emotion/styled';

interface RankingItemProps {
  index?: number;
  rank?: boolean;
  showSpan?: boolean;
}

type FirstSpanProps = {
  top3: boolean;
};

const RanckingItemContainer = styled.div<RankingItemProps>`
  width: 100%;
  position: relative;

  img {
    object-fit: cover;
    object-position: center center;
    border-radius: 4px;
    aspect-ratio: 1 / 1;
    width: 100%;
    overflow-clip-margin: content-box;
    overflow: clip;
  }
`;

const FirstSpan = styled.span<FirstSpanProps>`
  width: 30px;
  min-width: 30px;
  height: 30px;
  border-radius: 6px;
  font-size: 18px;
  position: absolute;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-weight: 700;
  top: 4px;
  left: 4px;
  color: rgb(255, 255, 255);
  background-color: ${(props) => (props.top3 ? 'rgb(253, 115, 100)' : 'rgb(187, 187, 187)')};
`;

const TextContainer = styled.div`
  width: 100%;
  padding-top: 12px;

  & > p:nth-of-type(1) {
    width: 100%;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    color: rgb(153, 153, 153);
    margin-bottom: 4px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h3 {
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
  }
  & > p:nth-of-type(2) {
    padding-top: 8px;
    font-size: 20px;
    line-height: 30px;
    color: rgb(34, 34, 34);
    font-weight: 700;
    word-break: break-word;
  }
  span {
    font-weight: 400;
  }
`;

const RankingItem = ({ index, showSpan }: RankingItemProps) => {
  const top3 = index === 1 || index === 2 || index === 3;
  return (
    <RanckingItemContainer>
      {showSpan && <FirstSpan top3={top3}>{index}</FirstSpan>}
      <div>
        <img
          src="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
          alt="BBQ 양념치킨+크림치즈볼+콜라1.25L 소개"
        />
        <TextContainer>
          <p>BBQ</p>
          <h3>BBQ 양념치킨+크림치즈볼+콜라1.25L</h3>
          <p>
            29000<span>원</span>
          </p>
        </TextContainer>
      </div>
    </RanckingItemContainer>
  );
};

export default RankingItem;
