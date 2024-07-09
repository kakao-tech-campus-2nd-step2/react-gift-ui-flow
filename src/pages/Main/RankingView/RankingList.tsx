import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';

import type { RankType, TargetType } from './FilterType';

interface Props {
    isDetail?: boolean;
    targetType: TargetType;
    rankType: RankType;
}

/**
 * RankingList
 * @param isDetail 상품 리스트 더보기 토글
 * @param targetType TargetType 필터링
 * @param rankType RankType 필터링
 * @returns Ranking이 매겨진 상품 리스트
 */
export default ({ isDetail, targetType, rankType }: Props) => {
    const initItems = () => {
        const items = [];
        for (let i = 0; i < 20; i++) {
            items.push(i);
        }
        return items;
    };
    const items = initItems();
    console.log(targetType, rankType); //TODO: targetType, rankType에 따라 상품 리스트 필터링

    return (
        <Grid columns={{ initial: 2, xs: 3, sm: 3, md: 6 }} gap={20}>
            {items.slice(0, isDetail ? undefined : 6).map((item, index) => (
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
