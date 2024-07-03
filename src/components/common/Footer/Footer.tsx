import styled from '@emotion/styled';

export const Footer: React.FC = () => {
    return (
        <Wrapper>
            <InsideWrapper>
                <Title>카카오톡 선물하기</Title>
            </InsideWrapper>
        </Wrapper>
    )
};

const Title = styled.div(
    {
        fontSize: '16px',
        fontWeight: '300',
    }
);

const InsideWrapper = styled.div(
    {
        width: '100%',
        height: '179.5px',
        fontFamily: 'sans-serif',
        padding: '40px 16px 120px',
        maxWidth: '1024px',
        margin: '0 auto',
    }
)

const Wrapper = styled.div(
    {
        width: '100%',
        backgroundColor: 'rgb(249, 249, 251)',
    }
);