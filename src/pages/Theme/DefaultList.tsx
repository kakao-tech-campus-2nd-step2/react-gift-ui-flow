import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';

/**
 * DefaultList
 * @returns 기본 상품 리스트
 */
export default () => {
    const items = Array.from(Array(21).keys());

    return (
        <Container>
            <Grid columns={{ initial: 2, xs: 3, sm: 3, md: 4 }} gap={20}>
                {items.map((item) => (
                    <DefaultGoodsItems
                        key={item}
                        imageSrc={
                            'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg'
                        }
                        subtitle={'BBQ'}
                        title={'BBQ 양념치킨+크림치즈볼+콜라1.25L'}
                        amount={29000}
                    />
                ))}
            </Grid>
        </Container>
    );
};
