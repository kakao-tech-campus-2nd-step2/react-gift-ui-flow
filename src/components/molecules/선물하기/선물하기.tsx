import { Link } from 'react-router-dom';

import { Image } from '@/components/atoms/Image';

const imgSrc = 'https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png';

export type GiveGiftProps = {
  height: string;
};

export const 선물하기 = ({ height }: GiveGiftProps) => {
  return (
    <Link to="/">
      <Image src={imgSrc} height={height} />
    </Link>
  );
};
