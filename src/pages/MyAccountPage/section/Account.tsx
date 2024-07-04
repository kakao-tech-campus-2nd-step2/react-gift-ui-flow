import styled from "@emotion/styled";
import { Button } from "@/components/common/Button";

const Account = () => {
    return (
        <Wrapper>
            kakao님 안녕하세요!
            <div style={{ height: '64px' }} />
            <Button style={{ maxWidth: '200px' }} children={'로그아웃'} theme={'darkGray'} size={'small'} />
        </Wrapper>
    )
}

export default Account;

const Wrapper = styled.div({
    width: '100%',
    padding: '80px 0px 120px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: '700',
    fontSize: '36px'
})