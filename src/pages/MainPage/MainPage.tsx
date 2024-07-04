import { Footer } from "@/components/common/Footer/Footer";
import { Header } from "@/components/common/Header/Header";
import SelectFriend from "@/pages/MainPage/section/SelectFriend";
import Theme from "@/pages/MainPage/section/Theme";
import AIRecommendation from "@/pages/MainPage/section/AIRecommendation";
import LiveRanking from "@/pages/MainPage/section/LiveRanking";
import { useEffect } from "react";

import styled from '@emotion/styled';

const MainPage = () => {
    useEffect(() => {
        const authTokenFromSession = sessionStorage.getItem('authToken');
        if (authTokenFromSession) {
            // 로그인 유무 확인
        }
    }, []);

    return (
        <>
            <Header />
            <Wrapper>
                <SelectFriend />
                <Theme />
                <AIRecommendation />
                <div style={{ height: "120px" }} />
                <LiveRanking />
                <Footer />
            </Wrapper>
        </>
    )
}

export default MainPage;

const Wrapper = styled.div({
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    marginTop: '55px'
})