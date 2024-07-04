import { Header } from "@/components/common/Header/Header";
import { Footer } from "@/components/common/Footer/Footer";
import styled from "@emotion/styled";
import Account from "@/pages/MyAccountPage/section/Account"
import { useAuth } from "@/state/login";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";


const MyAccountPage = () => {
    const history = useHistory();
    const { logout } = useAuth();

    useEffect(() => {
        const authTokenFromSession = sessionStorage.getItem('authToken');
        if (!authTokenFromSession) {
            history.push('/login');
        }
    }, [])

    const onBtnClickedHandler = () => {
        logout();
        history.push('/');
    }

    const authToken = sessionStorage.getItem('authToken') || '';

    return (
        <>
            <Header />
            <Wrapper>
                <Account
                    onBtnClickedHandler={onBtnClickedHandler}
                    name={authToken}
                />
                <Footer />
            </Wrapper>
        </>
    )
}

export default MyAccountPage;

const Wrapper = styled.div({
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    marginTop: '55px'
})