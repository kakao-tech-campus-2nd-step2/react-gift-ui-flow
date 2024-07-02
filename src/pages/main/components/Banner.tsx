import { Image } from '../../../components/common/Image/index';
import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <Image
        src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
        alt="친구 선택 유도 아이콘"
        className={styles.bannerIcon}
        radius={20}
        ratio="square"
        width={70}
        height={70}
      />
      <div className={styles.bannerText}>선물 받을 친구를 선택해주세요.</div>
    </div>
  );
};

export default Banner;
