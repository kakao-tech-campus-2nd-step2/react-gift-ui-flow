import { css } from '@emotion/react';
import Image from '@components/atoms/image/Image.tsx';

interface GoodsItemProps {
  imageSrc: string,
  subtitle: string,
  title: string,
  amount: number,
}
function GoodsItem({
  imageSrc, subtitle, title, amount,
}: GoodsItemProps) {
  return (
    <div css={css`
      display: flex;
      flex-direction: column;
      width: 120px;
      gap: 6px;
    `}
    >
      <Image ratio="square" radius={3} src={imageSrc} />
      <p css={
        css`
          color: #595959;
          font-size: 13px;
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
        color: #000000;
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
        color: #000000;
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
export default GoodsItem;
