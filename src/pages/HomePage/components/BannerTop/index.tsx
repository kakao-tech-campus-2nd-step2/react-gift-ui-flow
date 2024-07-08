import profile from '@/assets/default-profile.jpg';
import { colors } from '@/styles/theme';

import { Content } from '@/components/Content';
import { Image } from '@/components/ui/Image/Default';

import { profileStyle, textStyle } from './styles';

export const BannerTop = () => {
  const onClick = () => {
    // eslint-disable-next-line no-alert
    alert('선물 받을 친구 선택하기');
  };

  return (
    <Content
      alignItems="center"
      height="10rem"
      backgroundColor={colors.gray[100]}
      gap="1rem"
    >
      <Image
        width="5rem"
        radius={1.5}
        ratio="square"
        src={profile}
        css={profileStyle}
        onClick={onClick}
      />
      <div css={textStyle}>선물 받을 친구를 선택해주세요.</div>
    </Content>
  );
};
