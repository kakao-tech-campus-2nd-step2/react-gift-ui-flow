// import styled from '@emotion/styled';
import styled from "@emotion/styled"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from '@/components/common/Footer/index';
import Header from "@/components/common/Header/index";
import Homepage from '@/pages/Homepage/Homepage';
import MyAccountPage from "@/pages/My-aacount/MyAccountPage";
import SignInPage from "@/pages/Sign-in/SignInPage";

import { ThemePage } from "./pages/Theme/ThemePage";


const App: React.FC = () => {

  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Body>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<SignInPage />}></Route>
          <Route path="/my-account" element={<MyAccountPage />}></Route>
          <Route path="/theme" element={<ThemePage />}></Route>
        </Routes>
      </Body>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
};

export default App;

const Body = styled.div`
  position: sticky;
  padding-top: 40px;
  width: 100vw;
  height: 90vh;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`

// style?

// const Title = styled.h1`
//   font-size: 1.5em;
//   color: gray;
// `;
