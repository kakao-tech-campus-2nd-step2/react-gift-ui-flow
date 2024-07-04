import styled from '@emotion/styled';

const SelectFriend = () => {
    return (
        <Wrapper>
            <InsideWrapper>
                <ChoonSik src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png" alt="ChoonSik's profile image" />
                <Title>선물 받을 친구를 선택해주세요.</Title>
            </InsideWrapper>
        </Wrapper>
    )
}

export default SelectFriend;

const Title = styled.span(
    {
        fontSize: '28px',
        padding: '0 0 0 16px',
        lineHeight: '35px'
    }
)

const ChoonSik = styled.img(
    {
        width: '70px',
        height: '70px',
        borderRadius: '24px',
    }
);

const InsideWrapper = styled.div(
    {
        width: '100%',
        height: '100%',
        fontFamily: 'sans-serif',
        maxWidth: '992px',
        margin: '0 auto',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
    }
);

const Wrapper = styled.div(
    {
        width: '100%',
        height: '150px',
        backgroundColor: 'rgb(249, 249, 251)',
    }
);