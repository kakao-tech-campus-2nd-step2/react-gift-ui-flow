import styled from "@emotion/styled";
import "@styles";
import styles from "./Main.module.css";
import Items from "@components/kakaoGift/Items";
import { useState } from "react";

function Main() {
    const [filter, setFilter] = useState("전체");
    const [subFilter, setSubFilter] = useState("받고 싶어한");
    const [showAllProducts, setShowAllProducts] = useState(false);

    const products = [
        {
            id: 1,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L1",
            category: "BBQ",
            price: "29000",
            filter: "여성이",
            subFilter: "받고 싶어한",
        },
        {
            id: 2,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
            category: "BBQ",
            price: "29000",
            filter: "여성이",
            subFilter: "많이 선물한",
        },
        {
            id: 3,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
            category: "BBQ",
            price: "29000",
            filter: "남성이",
            subFilter: "위시로 받은",
        },
        {
            id: 4,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
            category: "BBQ",
            price: "29000",
            filter: "청소년이",
            subFilter: "받고 싶어한",
        },
        {
            id: 5,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
            category: "BBQ",
            price: "29000",
            filter: "여성이",
            subFilter: "많이 선물한",
        },
        {
            id: 6,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
            category: "BBQ",
            price: "29000",
            filter: "여성이",
            subFilter: "위시로 받은",
        },
        {
            id: 7,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
            category: "BBQ",
            price: "29000",
            filter: "남성이",
            subFilter: "받고 싶어한",
        },
        {
            id: 8,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L",
            category: "BBQ",
            price: "29000",
            filter: "청소년이",
            subFilter: "많이 선물한",
        },
        {
            id: 9,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L2",
            category: "BBQ",
            price: "29000",
            filter: "여성이",
            subFilter: "받고 싶어한",
        },
        {
            id: 10,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L3",
            category: "BBQ",
            price: "29000",
            filter: "여성이",
            subFilter: "받고 싶어한",
        },
        {
            id: 11,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L4",
            category: "BBQ",
            price: "29000",
            filter: "여성이",
            subFilter: "받고 싶어한",
        },
        {
            id: 12,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L5",
            category: "BBQ",
            price: "29000",
            filter: "여성이",
            subFilter: "받고 싶어한",
        },
        {
            id: 13,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L6",
            category: "BBQ",
            price: "29000",
            filter: "여성이",
            subFilter: "받고 싶어한",
        },
        {
            id: 14,
            name: "BBQ 양념치킨+크림치즈볼+콜라1.25L7",
            category: "BBQ",
            price: "29000",
            filter: "여성이",
            subFilter: "받고 싶어한",
        },
    ];

    const filteredProducts = products.filter((product) => {
        if (filter === "전체" || product.filter === filter) {
            if (product.subFilter === subFilter) {
                return true;
            }
        }
        return false;
    });

    const productsToShow = showAllProducts ? filteredProducts : filteredProducts.slice(0, 6);

    const toggleShowAllProducts = () => {
        setShowAllProducts((prev) => !prev);
    };

    return (
        <>
            <section className={styles.sectionTop}>
                <img
                    src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
                    alt="춘식하이"
                />
                <p>선물 받을 친구를 선택해 주세요.</p>
            </section>

            <Banner>
                <div>Ai가 추천하는 선물</div>
                <div>선물을 추천받고 싶은 친구를 선택해주세요.</div>
            </Banner>

            <Items />
            <Section>
                <SectionTitle>실시간 급상승 선물랭킹</SectionTitle>

                <FilterList>
                    {["전체", "여성이", "남성이", "청소년이"].map((f) => (
                        <FilterItem key={f} onClick={() => setFilter(f)} active={filter === f}>
                            {f}
                        </FilterItem>
                    ))}
                </FilterList>

                <SubFilterList>
                    {["받고 싶어한", "많이 선물한", "위시로 받은"].map((f) => (
                        <SubFilterItem
                            key={f}
                            onClick={() => setSubFilter(f)}
                            active={subFilter === f}
                        >
                            {f}
                        </SubFilterItem>
                    ))}
                </SubFilterList>

                <ProductList>
                    {productsToShow.map((product) => (
                        <ProductItem key={product.id}>
                            <img
                                src="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
                                alt="BBQ 양념치킨+크림치즈볼+콜라1.25L 소개"
                            />
                            <ProductCategory>{product.category}</ProductCategory>
                            <ProductName>{product.name}</ProductName>
                            <ProductPrice>{product.price}</ProductPrice>
                            <div>{product.filter}</div>
                            <div>{product.subFilter}</div>
                        </ProductItem>
                    ))}
                </ProductList>

                {filteredProducts.length > 6 && (
                    <ShowMoreButton onClick={toggleShowAllProducts}>
                        {showAllProducts ? "접기" : "더 보기"}
                    </ShowMoreButton>
                )}
            </Section>
        </>
    );
}

const Section = styled.div`
    margin-bottom: 40px;
    text-align: center;
`;

const Banner = styled.div`
    margin: 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const SectionTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 20px;
`;

const FilterList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
`;

const FilterItem = styled.li<{ active: boolean }>`
    margin-right: 20px;
    cursor: pointer;
    color: ${({ active }) => (active ? "blue" : "black")};
`;

const SubFilterList = styled.ul`
    display: flex;
    list-style: none;
    padding: 0;
    margin-top: 10px;
    justify-content: center;
`;

const SubFilterItem = styled.li<{ active: boolean }>`
    margin-right: 20px;
    cursor: pointer;
    color: ${({ active }) => (active ? "blue" : "black")};
`;

const ProductList = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* 4개의 컬럼 */
    gap: 16px; /* 항목 간격 */
    width: 100%; /* 전체 너비 */
    text-align: center;
`;

const ProductItem = styled.div`
    background: #f5f5f5;
    border-radius: 8px;
    box-sizing: border-box;
`;

const ProductName = styled.h3`
    font-size: 18px;
    margin: 0 0 10px;
`;

const ProductCategory = styled.div`
    font-size: 14px;
    color: gray;
`;

const ProductPrice = styled.div`
    font-size: 16px;
    color: red;
`;

const ShowMoreButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
        background-color: #0056b3;
    }
`;
export default Main;
