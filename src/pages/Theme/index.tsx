import { css } from '@emotion/css';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '@/components/Header';

import DefaultList from './DefaultList';
import ThemeHeader from './ThemeHeader';

export default () => {
    const themeKey = useParams().themeKey ?? '';
    const navigate = useNavigate();

    useEffect(() => {
        if (!themeKeys[themeKey]) {
            navigate('/error/404');
        }
    }, [navigate, themeKey]);

    return (
        <div>
            <Header />
            {/* theme header section */}
            <section>
                <ThemeHeader
                    label={themeKeys[themeKey].label}
                    title={'예산은 가볍게, 감동은 무겁게 ❤️'}
                    description={'당신의 센스를 뽐내줄 부담 없는 선물'}
                    backgroundColor={'rgb(75, 77, 80)'}
                />
            </section>
            {/* goods list */}
            <section
                className={css`
                    margin-top: 50px;
                    margin-bottom: 100px;
                `}
            >
                <DefaultList />
            </section>
        </div>
    );
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
