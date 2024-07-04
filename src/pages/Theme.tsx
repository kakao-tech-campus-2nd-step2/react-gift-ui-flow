import { useParams } from 'react-router-dom';

export default () => {
    const { themeKey } = useParams();

    return <div>{themeKey}</div>;
};

export const themeKeys = [
    '생일',
    '졸업선물',
    '스몰럭셔리',
    '명품선물',
    '결혼/집들이',
    '따뜻한선물',
    '가벼운선물',
    '팬심저격',
    '교환권',
    '건강/비타민',
    '과일/한우',
    '출산/키즈',
];
