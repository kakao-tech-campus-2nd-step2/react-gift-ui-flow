import styled from '@emotion/styled';

const AIRecommendation = () => {
    return (
        <Wrapper>
            <InsideWrapper>
                <SubTitle>AI가 추천하는 선물</SubTitle>
                <Title>선물을 추천받고 싶은 친구를 선택해주세요.</Title>
            </InsideWrapper>
        </Wrapper>
    )
}

export default AIRecommendation;

const Title = styled.h6({
    fontSize: '18px',
    lineHeight: '20px',
    fontWeight: '700',
})

const SubTitle = styled.p({
    fontSize: '17px',
    lineHeight: '19px',
    paddingBottom: '5px',
    fontWeight: '500',
    color: 'rgba(0, 0, 0, 0.4)'
})

const InsideWrapper = styled.div(
    {
        width: '100%',
        backgroundColor: 'rgb(254, 234, 12)',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
    }
)

const Wrapper = styled.div(
    {
        width: '100%',
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        padding: '16px',
        boxSizing: 'border-box',
        maxWidth: '1024px',
        margin: '0 auto',
    },
);