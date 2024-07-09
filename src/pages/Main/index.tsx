import { css } from '@emotion/css';

import { Button } from '@/components/common/Button';
import { Image } from '@/components/common/Image';
import { Container } from '@/components/common/layouts/Container';
import Header from '@/components/Header';

import RankingView from './RankingView';
import ThemeList from './ThemeList';

export default () => {
    return (
        <div>
            <Header />
            {/* select recipient section */}
            <section className={selectRecipientStyle}>
                <button>
                    <Image
                        alt="친구 선택 유도 아이콘"
                        src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
                        radius={16}
                    />
                </button>
                <h2>선물 받을 친구를 선택해주세요.</h2>
            </section>
            {/* theme section */}
            <section className={themeSectionStyle}>
                <Container>
                    <ThemeList />
                </Container>
            </section>
            <Container>
                <Button className={aiRecommendButtonStyle}>
                    <div
                        className={css`
                            color: #858585;
                        `}
                    >
                        AI가 추천하는 선물
                    </div>
                    {/* TODO 친구선택 여부에 따라 메세지 변화 */}
                    <div
                        className={css`
                            font-size: 18px;
                            font-weight: bold;
                        `}
                    >
                        선물을 추천받고 싶은 친구를 선택해주세요.
                    </div>
                </Button>
            </Container>
            {/* real-time ranking section */}
            <section>
                <h2
                    className={css`
                        text-align: center;
                        font-weight: bold;
                        font-size: 35px;
                        margin-top: 50px;
                    `}
                >
                    실시간 급상승 선물랭킹
                </h2>
                <RankingView />
            </section>
        </div>
    );
};

const themeSectionStyle = css`
    padding: 3px 14px 3px;
    @media screen and (min-width: 768px) {
        padding: 23px 52px 23px;
    }
`;
const selectRecipientStyle = css`
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 30px 20px;
    background-color: rgb(250, 250, 252);
    img {
        width: 60px;
        height: 60px;
    }
`;
const aiRecommendButtonStyle = css`
    margin: 30px 0;
    padding: 10px 0;
    flex-direction: column;
    gap: 5px;
`;
