import styled from "@emotion/styled"
import { Grid } from "@/components/common/layouts/Grid";
import { DefaultGoodsItems } from "@/components/common/GoodsItem/Default";

const ThemeItem = () => {
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
        <ItemWrapper>
            <ItemBoxWrapper>
                <ItemBoxInsideWrapper>
                    <Grid columns={4} gap={16} >
                        {items}
                    </Grid>
                </ItemBoxInsideWrapper>
            </ItemBoxWrapper>
        </ItemWrapper>
    )
}

export default ThemeItem;

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