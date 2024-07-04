import styled from "@emotion/styled";
type PropType = {
    label: string,
    title: string,
    description: string,
    backgroundColor: string
}

const ThemeHeader = (prop: PropType) => {
    return (
        <Wrapper
            style={prop.backgroundColor === 'white' ? { backgroundColor: 'white' } : {}}
        >
            <HeaderBox>
                <HeaderBoxInner>
                    <SubTitle style={prop.backgroundColor === 'white' ? { color: 'rgb(75, 77, 80)' } : {}}>{prop.label}</SubTitle>
                    <Title style={prop.backgroundColor === 'white' ? { color: 'rgb(75, 77, 80)' } : {}}>{prop.title}</Title>
                    <Description style={prop.backgroundColor === 'white' ? { color: 'rgb(75, 77, 80)' } : {}}>{prop.description}</Description>
                </HeaderBoxInner>
            </HeaderBox>
        </Wrapper>
    )
}

export default ThemeHeader;

const Description = styled.p({
    paddingTop: '12px',
    fontSize: '24px',
    lineHeight: '32px',
    color: 'rgba(255, 255, 255, 0.55)',
    fontWeight: '400'
})

const Title = styled.h1({
    fontSize: '30px',
    lineHeight: '40px',
    paddingTop: '12px',
    color: 'rgb(255, 255, 255)',
    fontWeight: '700'
})

const SubTitle = styled.p({
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.7)'
})

const HeaderBoxInner = styled.div({
    width: '100%',
    maxWidth: '1024px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
})

const HeaderBox = styled.div({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const Wrapper = styled.section({
    padding: '50px 20px',
    width: '100%',
    backgroundColor: 'rgb(75, 77, 80)'
})