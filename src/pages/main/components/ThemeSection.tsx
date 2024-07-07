import { useNavigate } from 'react-router-dom';

import { Image } from '../../../components/common/Image/index';
import { Grid } from '../../../components/common/layouts/Grid/index';
import styles from './ThemeSection.module.scss';

interface ThemeIconProps {
  themeKey: string;
  imgSrc: string;
  text: string;
}

const ThemeIcon: React.FC<ThemeIconProps> = ({ themeKey, imgSrc, text }) => {
  const navigate = useNavigate();

  const handleLink = (path: string) => {
    navigate(path);
  };
  return (
    <div className={styles.themeIcon} onClick={() => handleLink(`/theme/${themeKey}`)}>
      <Image src={imgSrc} alt={text} radius={25} ratio="square" width={85} height={85} />
      <p className={styles.iconText}>{text}</p>
    </div>
  );
};

const ThemeSection = () => {
  return (
    <div className={styles.themeSection}>
      <Grid columns={4} gap={50}>
        <ThemeIcon
          themeKey="life_small_gift"
          imgSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          text="생일"
        />
        <ThemeIcon
          themeKey="life_small_gift"
          imgSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          text="졸업선물"
        />

        <ThemeIcon
          themeKey="life_small_gift"
          imgSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          text="스몰럭셔리"
        />
        <ThemeIcon
          themeKey="life_small_gift"
          imgSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          text="명품선물"
        />
        <ThemeIcon
          themeKey="life_small_gift"
          imgSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          text="결혼/집들이"
        />
        <ThemeIcon
          themeKey="life_small_gift"
          imgSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          text="따뜻한선물"
        />
        <ThemeIcon
          themeKey="life_small_gift"
          imgSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          text="가벼운선물"
        />
        <ThemeIcon
          themeKey="life_small_gift"
          imgSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          text="팬심저격"
        />
        <ThemeIcon
          themeKey="life_small_gift"
          imgSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          text="교환권"
        />
        <ThemeIcon
          themeKey="life_small_gift"
          imgSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          text="건강/비타민"
        />
        <ThemeIcon
          themeKey="life_small_gift"
          imgSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          text="과일/한우"
        />
        <ThemeIcon
          themeKey="life_small_gift"
          imgSrc="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png"
          text="출산/키즈"
        />
      </Grid>
    </div>
  );
};

export default ThemeSection;
