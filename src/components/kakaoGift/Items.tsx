import { Link } from "react-router-dom";
import styled from "@emotion/styled";

function Items() {
    const imageUrl =
        "https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png";

    const labels = [
        "생일",
        "졸업선물",
        "스몰럭셔리",
        "명품선물",
        "결혼/집들이",
        "따뜻한선물",
        "가벼운선물",
        "팬심저격",
        "교환권",
        "건강/비타민",
        "과일/한우",
        "출산/키즈",
    ];

    const themeKeys = [
        "Birthday",
        "GraduationGift",
        "SmallLuxury",
        "LuxuryGift",
        "Marriage",
        "WarmGift",
        "LightGift",
        "FanGift",
        "ExchangeCard",
        "Health",
        "Food",
        "Birth",
    ];

    return (
        <ItemsGrid>
            {labels.map((label, index) => (
                <Link key={index} to={`/theme/${themeKeys[index]}`}>
                    <img src={imageUrl} alt={`Theme ${index + 1}`} />
                    <ItemLabel>{label}</ItemLabel>
                </Link>
            ))}
        </ItemsGrid>
    );
}

const ItemsGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(6, 1fr); /* 4개의 컬럼 */
    gap: 16px; /* 항목 간격 */
    width: 100%; /* 전체 너비 */
    text-align: center;
`;

const ItemLabel = styled.div`
    text-decoration: none; /* Removes underline */
    color: inherit; /* Inherits the color from its parent */
    cursor: pointer; /* Ensures the pointer cursor */
`;
export default Items;
