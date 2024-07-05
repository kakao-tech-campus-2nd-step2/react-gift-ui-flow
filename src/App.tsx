// import styled from '@emotion/styled';
import  Footer from '@/components/common/Footer/Footer'
import Header from '@/components/common/Header/Header'


const App = () => {
  const isLoggedIn = false;

  return (
    <div>
      <Header isLoggedIn={isLoggedIn}/>
      <Footer />
    </div>
  );
};

export default App;
