import styled from '@emotion/styled';
import { backgroundColors, textColors } from '@styles/colors';
import { RankingBadgeProps } from '@/types';

export const GoodsItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 6px;
  position: relative;
`;

export const RankingBadge = styled.div<RankingBadgeProps>`
  background-color: ${(props) => (props.rankingIndex && props.rankingIndex <= 3
    ? backgroundColors.badgePrimary
    : backgroundColors.badge)};
  color: ${textColors.inset};
  position: absolute;
  top: 2px;
  left: 2px;
  width: 30px;
  height: 30px;
  z-index: 1;
  border-radius: 5px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  color: ${textColors.title};
  font-size: 14px;
  overflow: hidden;
  white-space: normal;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Subtitle = styled(Title)`
  color: ${textColors.subtitle};
`;

export const Amount = styled.p`
  color: ${textColors.default};
  font-size: 20px;
  font-weight: bold;
  word-wrap: break-word;
`;
