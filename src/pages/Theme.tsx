import styled from "@emotion/styled";
import { DefaultGoodsItems, DefaultGoodsItemsProps } from "@common/GoodsItem/Default";

function Theme() {
    const goodsItem: DefaultGoodsItemsProps = {
        imageSrc:
            "https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg",
        subtitle: "BBQ",
        title: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
        amount: 29000,
    };

    const itemsArray = Array(16).fill(goodsItem);

    return (
        <ItemsGrid>
            {itemsArray.map((item, index) => (
                <DefaultGoodsItems key={index} {...item} />
            ))}
        </ItemsGrid>
    );
}

const ItemsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 4개의 컬럼 */
    gap: 16px; /* 항목 간격 */
    width: 100%; /* 전체 너비 */
`;

export default Theme;
