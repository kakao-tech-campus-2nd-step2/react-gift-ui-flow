import { css } from '@emotion/react';
import Image from '@components/atoms/image/Image';

interface GoodsItemProps {
  rankingIndex: number,
  imageSrc: string,
  subtitle: string,
  title: string,
  amount: number,
}
function RankingGoodsItem({
  rankingIndex, imageSrc, subtitle, title, amount,
}: GoodsItemProps) {
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      width: 120px;
      gap: 6px;
      position: relative;
    `}
    >
      <div css={css`
        background-color: #ff8d8d;
        color: #ffffff;
        position: absolute;
        top: 2px;
        left: 2px;
        width: 20px;
        height: 20px;
        z-index: 1;
        border-radius: 5px;
        text-align: center;
      `}
      >
        <p css={css`
          position: absolute;
          margin: auto;
          top: 1px;
          bottom: 0;
          left: 0;
          right: 0;
        `}
        >
          {rankingIndex}
        </p>
      </div>
      <Image ratio="square" radius={3} src={imageSrc} />
      <p css={
        css`
          color: #999999;
          font-size: 14px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        `
      }
      >
        {subtitle}
      </p>
      <p css={css`
        color: #333333;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      `}
      >
        {title}
      </p>
      <p css={css`
        color: #222222;
        font-size: 20px;
        font-weight: bold;
        word-wrap: break-word;
      `}
      >
        {amount}
        원
      </p>
    </div>
  );
}
export default RankingGoodsItem;
