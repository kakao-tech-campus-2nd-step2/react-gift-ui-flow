import styled from '@emotion/styled';
import { useState, useCallback } from 'react';
import { RankingGoodsItems } from '@/components/common/GoodsItem/Ranking';
import { Grid } from '@/components/common/layouts/Grid';

type WhoType = 'all' | 'women' | 'men' | 'teenager';
type HowType = 'get' | 'give' | 'wish';

const LiveRanking = () => {
    const [who, setWho] = useState<WhoType>('all')
    const [how, setHow] = useState<HowType>('get')
    const [more, setMore] = useState<boolean>(false)
    const [items, setItems] = useState<Array<JSX.Element>>(getItems(6));

    const onMoreBtnClicked = useCallback(() => {
        setMore(!more)
        const newLength = items.length === 6 ? 21 : 6;
        setItems(getItems(newLength));
    }, [more])

    function getItems(length: number): Array<JSX.Element> {
        return Array.from({ length }, (_, index) => (
            <RankingGoodsItems
                key={index}
                rankingIndex={index + 1}
                imageSrc='https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg'
                subtitle='BBQ'
                title='BBQ 양념치킨+크림치즈볼+콜라1.25L'
                amount={29000}
            />
        ));
    }

    const onWhoToggle = useCallback((whoitem: WhoType) => {
        setWho(whoitem);
    }, [who])

    const onHowToggle = useCallback((howitem: HowType) => {
        setHow(howitem);
    }, [how])

    const whoItems = [
        {
            who: 'all',
            btnItem: 'ALL',
            btnLabel: '전체'
        },
        {
            who: 'women',
            btnItem: '👩🏻‍🦳',
            btnLabel: '여성이'
        },
        {
            who: 'men',
            btnItem: '👨🏻‍🦳',
            btnLabel: '남성이'
        },
        {
            who: 'teenager',
            btnItem: '👦🏻',
            btnLabel: '청소년이'
        }
    ]

    const howItem = [
        {
            how: 'get',
            btnLabel: '받고 싶어한'
        },
        {
            how: 'give',
            btnLabel: '많이 선물한'
        },
        {
            how: 'wish',
            btnLabel: '위시로 받은'
        }
    ]

    return (
        <Wrapper>
            <Title>실시간 급상승 선물랭킹</Title>
            <Selection>
                <WhoSelection>
                    {whoItems.map((item, index) => (
                        <WhoBtn
                            onClick={() => onWhoToggle(item.who as WhoType)}
                            style={index > 0 ? { marginLeft: '36px', paddingLeft: '16px' } : {}}
                        >
                            <WhoBtnItem
                                style={who === item.who ? { backgroundColor: 'rgb(70, 132, 233)' } : {}}
                            >{item.btnItem}</WhoBtnItem>
                            <WhoBtnLabel
                                style={who === item.who ? { color: 'rgb(70, 132, 233' } : {}}
                            >{item.btnLabel}</WhoBtnLabel>
                        </WhoBtn>
                    ))}
                </WhoSelection>
                <HowSelection>
                    {howItem.map((item) => (
                        <HowBtn
                            onClick={() => onHowToggle(item.how as HowType)}
                            style={how === item.how ? { color: 'rgb(70, 132, 233)' } : {}}
                        >{item.btnLabel}</HowBtn>
                    ))}
                </HowSelection>
            </Selection>
            <RankingList>
                <Grid columns={6} gap={16}>
                    {items}
                </Grid>
                <MoreRanking>
                    <MoreBtn onClick={() => onMoreBtnClicked()}>
                        {more ? '접기' : '더보기'}
                    </MoreBtn>
                </MoreRanking>
            </RankingList>
        </Wrapper>
    )
}

export default LiveRanking;

const MoreBtn = styled.button({
    width: '100%',
    maxWidth: '480px',
    height: '60px',
    fontSize: '16px',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 200ms ease 0s',
    boxShadow: 'rgb(204, 204, 204) 0px 0px 0px 1px inset',
})

const MoreRanking = styled.div({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '30px'
})

const RankingList = styled.div({
    padding: '40px 0 60px',
})

const HowBtn = styled.button({
    padding: '20px 30px',
    fontSize: '22px',
    lineHeight: '22px',
    color: 'rgba(70, 132, 233, 0.7)',
    fontWeight: '700',
    transition: 'color 200ms ease 0s, font-weight 200ms ease 0s',
    background: 'none',
    border: '0',
    cursor: 'pointer',
    outline: 'none'
})

const HowSelection = styled.div({
    width: '100%',
    borderRadius: '12px',
    marginTop: '16px',
    display: 'flex',
    justifyContent: 'center',
    border: '1px solid rgba(70, 132, 233, 0.1)',
    backgroundColor: 'rgb(230, 241, 255)'
})

const WhoBtnLabel = styled.p({
    padding: '10px 0 6px',
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '700',
    color: 'rgb(102, 102, 102)',
    transition: 'color 200ms ease 0s, font-weight 200ms ease 0s'
})

const WhoBtnItem = styled.div({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '20px',
    width: '60px',
    height: '60px',
    borderRadius: '24px',
    color: 'white',
    backgroundColor: 'rgb(230, 241, 255)',
    transition: 'background-color 200ms ease 0s',
    fontWeight: '700'
})

const WhoBtn = styled.button({
    minWidth: '90px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    outline: 'none'
})

const WhoSelection = styled.div({
    display: 'flex'
})

const Selection = styled.div({
    width: '100%',
    display: 'flex',
    padding: '20px 0 7px',
    flexDirection: 'column',
    justifyContent: 'center'
})

const Title = styled.h2({
    textAlign: 'center',
    fontSize: '35px',
    lineHeight: '50px',
    fontWeight: '700',
    width: '100%'
})

const Wrapper = styled.div(
    {
        width: '100%',
        fontFamily: 'sans-serif',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
        boxSizing: 'border-box',
        maxWidth: '1024px',
        margin: '0 auto',
        fontWeight: '400'
    },
);