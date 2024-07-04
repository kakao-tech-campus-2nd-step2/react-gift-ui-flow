import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default () => {
    const { themeKey } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (themeKey && !themeKeys[themeKey]) {
            navigate('/error/404');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //label, title, description, backgroundColor
    return <div>{themeKey}</div>;
};

export const themeKeys: { [key: string]: { label: string } } = {
    birthday: {
        label: '생일',
    },
    graduation_gift: {
        label: '졸업선물',
    },
    small_luxury: {
        label: '스몰럭셔리',
    },
    luxury_gift: {
        label: '명품선물',
    },
    wedding_housewarming: {
        label: '결혼/집들이',
    },
    warm_gift: {
        label: '따뜻한선물',
    },
    light_gift: {
        label: '가벼운선물',
    },
    fan_heart_attack: {
        label: '팬심저격',
    },
    gift_card: {
        label: '교환권',
    },
    health_vitamins: {
        label: '건강/비타민',
    },
    fruits_korean_beef: {
        label: '과일/한우',
    },
    baby_kids: {
        label: '출산/키즈',
    },
};
