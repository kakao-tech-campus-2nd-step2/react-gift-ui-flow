import React from 'react';
import styled from '@emotion/styled';
import Image from '@/components/common/Image';
import Ranking from './Ranking';

const IMAGE_SIZE_LARGE = 160;
const IMAGE_SIZE_SMALL = 120;

export interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: number;
  rankingIndex?: number;
}

export default function GoodsItem({ imageSrc, subtitle, title, amount, rankingIndex, ...props }: GoodsItemProps) {
  const imageSize = rankingIndex ? IMAGE_SIZE_LARGE : IMAGE_SIZE_SMALL;

  const renderRanking = () => rankingIndex && <Ranking {...{ rankingIndex }} />;

  return (
    <StyledGoodsItem rankingIndex={rankingIndex} {...props}>
      {renderRanking()}
      <Image src={imageSrc} width={imageSize} height={imageSize} radius={4} />
      <Content>
        <SubTitle>{subtitle}</SubTitle>
        <Title>{title}</Title>
        <Amount>
          {amount}
          <span>원</span>
        </Amount>
      </Content>
    </StyledGoodsItem>
  );
}

const StyledGoodsItem = styled.div<{ rankingIndex?: number }>`
  position: relative;
  width: ${({ rankingIndex }) => (rankingIndex ? `${IMAGE_SIZE_LARGE}px` : `${IMAGE_SIZE_SMALL}px`)};
`;

const Content = styled.div`
  padding-top: 12px;
`;

const SubTitle = styled.p`
  color: #999999;
  font-size: 14px;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Amount = styled.p`
  font-size: 20px;
  font-weight: 700;
  padding-top: 8px;
  word-break: break-word;

  & > span {
    font-weight: 400;
  }
`;
