// import styled from '@emotion/styled';
import styled from "@emotion/styled"
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from '@/components/common/Footer/index';
import Header from "@/components/common/Header/index";
import Homepage from '@/pages/Homepage/Homepage';
import MyAccountPage from "@/pages/My-account/MyAccountPage"
import SignInPage from "@/pages/Sign-in/SignInPage";


const App: React.FC = () => {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     children: [
  //       { path: "", element: <Homepage /> },
  //       {
  //         path:"login"
  //         element: <SignIn />
  //       },
  //       {
  //         path: "my-account",
  //         element: <MyAccount />
  //       },
  //     ]
  //   }
  // ])
  return (
    <>
    <BrowserRouter>
      <Header></Header>
      <Body>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<SignInPage />}></Route>
          <Route path="/my-account" element={<MyAccountPage />}></Route>
        </Routes>
      </Body>
      <Footer></Footer>
    </BrowserRouter>
    </>
  );
};

export default App;

const Body = styled.div`
  padding-top: 30px;
  width: 100vw;
  height: 90vh;
  align-items: center;
  justify-content: center;
`

// style?

// const Title = styled.h1`
//   font-size: 1.5em;
//   color: gray;
// `;
