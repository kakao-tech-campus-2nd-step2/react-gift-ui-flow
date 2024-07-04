import { Header } from "@/components/common/Header/Header";
import { Footer } from "@/components/common/Footer/Footer";
import styled from "@emotion/styled";
import Account from "@/pages/MyAccountPage/section/Account"


const MyAccountPage = () => {
    return (
        <>
            <Header />
            <Wrapper>
                <Account />
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