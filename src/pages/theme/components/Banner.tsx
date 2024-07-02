import styles from './Banner.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <p className={styles.category}>가벼운 선물</p>
      <p className={styles.text}>예산은 가볍게, 감동은 무겁게❤️</p>
      <p className={styles.subText}>당신의 센스를 뽐내줄 부담 없는 선물</p>
    </div>
  );
};

export default Banner;
