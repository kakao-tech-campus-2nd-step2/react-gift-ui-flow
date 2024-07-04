import styled from '@emotion/styled';
import { useState, useCallback } from 'react';

type WhoType = 'all' | 'women' | 'men' | 'teenager';
type HowType = 'get' | 'give' | 'wish';

const LiveRanking = () => {
    const [who, setWho] = useState<WhoType>('all')
    const [how, setHow] = useState<HowType>('get')

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

    const howItem = ['get', 'give', 'wish']

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
                <div>

                </div>
            </Selection>
        </Wrapper>
    )
}

export default LiveRanking;

const WhoBtnLabel = styled.p({
    padding: '10px 0 6px',
    fontSize: '20px',
    lineHeight: '24px',
    fontWeight: '400',
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