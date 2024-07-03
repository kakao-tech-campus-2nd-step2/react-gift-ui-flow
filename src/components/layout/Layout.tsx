import Footer from '../footer/Footer';
import Header from '../header/Header';
import * as styles from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <styles.PCLayout>
        <Header />
        <styles.PCContainer>
          {children}
          <Footer />
        </styles.PCContainer>
      </styles.PCLayout>
    </>
  );
};

export default Layout;
