import styled from "@emotion/styled";
import ThemeHeader from "@/pages/ThemePage/section/ThemeHeader";
import { Header } from "@/components/common/Header/Header";
import ThemeItem from "@/pages/ThemePage/section/ThemeItem";
import { Footer } from "@/components/common/Footer/Footer";
import { useEffect } from "react";

const ThemeDetailPage = () => {
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
                <ThemeHeader
                    label='가벼운 선물'
                    title='예산은 가볍게, 감동은 무겁게❤️'
                    description="당신의 센스를 뽐내줄 부담 없는 선물"
                    backgroundColor="black"
                />
                <ThemeItem />
                <Footer />
            </Wrapper>
        </>
    )
}

export default ThemeDetailPage;

const Wrapper = styled.div({
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    marginTop: '55px'
})