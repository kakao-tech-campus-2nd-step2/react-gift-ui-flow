import styled from "@emotion/styled";
import ThemeHeader from "@/pages/ThemePage/section/ThemeHeader";
import { Header } from "@/components/common/Header/Header";
import { Footer } from "@/components/common/Footer/Footer";
import { Grid } from "@/components/common/layouts/Grid";
import { DefaultGoodsItems } from "@/components/common/GoodsItem/Default";

const ThemeDetailPage = () => {
    const items = Array.from({ length: 21 }, (_, index) => (
        <DefaultGoodsItems
            key={index}
            imageSrc="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
            subtitle="BBQ"
            title="BBQ 양념치킨+크림치즈볼+콜라1.25L"
            amount={29000}
        />
    ))

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
                <ItemWrapper>
                    <ItemBoxWrapper>
                        <ItemBoxInsideWrapper>
                            <Grid columns={4} gap={16} >
                                {items}
                            </Grid>
                        </ItemBoxInsideWrapper>
                    </ItemBoxWrapper>
                </ItemWrapper>
                <Footer />
            </Wrapper>
        </>
    )
}

export default ThemeDetailPage;

const ItemBoxInsideWrapper = styled.div({
    width: '100%',
    maxWidth: '1024px',
})

const ItemBoxWrapper = styled.div({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

const ItemWrapper = styled.section({
    padding: '40px 16px 360px',
    width: '100%'
})

const Wrapper = styled.div({
    width: '100%',
    position: 'absolute',
    top: '0px',
    left: '0px',
    marginTop: '55px'
})