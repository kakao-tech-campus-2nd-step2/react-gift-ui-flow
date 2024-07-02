import { Button } from '@/components/common/Button';

import styles from './SelectFriend.module.scss';

const SelectFriend = () => {
  return (
    <div className={styles.selectButton}>
      <Button theme="kakao">
        <div className={styles.button}>
          <div className={styles.subText}>AI가 추천하는 선물</div>
          <div className={styles.mainText}>선물을 추천받고 싶은 친구를 선택해주세요.</div>
        </div>
      </Button>
    </div>
  );
};

export default SelectFriend;
