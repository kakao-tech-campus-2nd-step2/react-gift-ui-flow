import styles from './Header.module.scss';

interface HeaderProps {
  label: string;
  text: string;
  description: string;
  backgroundColor: string;
}
const Header: React.FC<HeaderProps> = ({ label, text, description, backgroundColor }) => {
  return (
    <div className={styles.banner} style={{ backgroundColor: backgroundColor }}>
      <p className={styles.category}>{label}</p>
      <p className={styles.text}>{text}</p>
      <p className={styles.subText}>{description}</p>
    </div>
  );
};

export default Header;
