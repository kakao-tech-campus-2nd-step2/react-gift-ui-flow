import { Callout } from '@/components/Callout';
import { Content } from '@/components/Content';

import { boldTextStyle, calloutStyle, lightTextStyle } from './styles';

export const BannerBottom = () => {
  return (
    <Content alignItems="center" height="9rem" gap="1rem">
      <Callout flexDirection="column" alignItems="center" css={calloutStyle}>
        <div css={lightTextStyle}>AI가 추천하는 선물</div>
        <div css={boldTextStyle}>선물을 추천받고싶은 친구를 선택해주세요.</div>
      </Callout>
    </Content>
  );
};
