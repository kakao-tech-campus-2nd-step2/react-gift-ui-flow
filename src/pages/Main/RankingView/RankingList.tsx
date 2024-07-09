import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';

import type { RankType, TargetType } from './FilterType';

interface Props {
    showMoreDetail?: boolean;
    targetType: TargetType;
    rankType: RankType;
}

export default ({ showMoreDetail, targetType, rankType }: Props) => {
    const items = Array.from(Array(21).keys());
    console.log(targetType, rankType); //TODO: targetType, rankType에 따라 상품 리스트 필터링

    return (
        <Grid columns={{ initial: 2, xs: 3, sm: 3, md: 6 }} gap={20}>
            {items.slice(0, showMoreDetail ? undefined : 6).map((item, index) => (
                <RankingGoodsItems
                    key={item}
                    rankingIndex={index + 1}
                    imageSrc={
                        'https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg'
                    }
                    subtitle={'BBQ'}
                    title={'BBQ 양념치킨+크림치즈볼+콜라1.25L'}
                    amount={29000}
                />
            ))}
        </Grid>
    );
};
