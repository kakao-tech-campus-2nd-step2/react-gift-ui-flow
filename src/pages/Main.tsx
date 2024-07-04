//import React from 'react'

import './Main.css'

import CategorySection from '@/CategorySection/CategorySection'
import { Button } from '@/components/common/Button'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import { Image } from '@/components/common/Image'
import RankingSection from '@/components/RankingSection/RankingSection'

import choonsik from '../images/choonsik.png'

const Main = () => {

  return (
    <div className='MainPage'>
        <div className='header'>
            <Header title='선물하기' subtitle='로그인' />
        </div>
        
        <div className='selectFriend'>
            <Image
                src={choonsik}
                alt='choonsik'
                radius={20}
                ratio={'square'}
                width={70}
                height={70}
             />
            <div className='selectFriendTitle'>선물 받을 친구를 선택해주세요.</div>
        </div>

        <CategorySection />

        <div className='buttonContainerKakao'>
            <Button theme='kakao' size='responsive' className='button01'>
                <div className='buttonSubtitle'>AI가 추천하는 선물</div>
                <div className='buttonTitle'>선물을 추천받고 싶은 친구를 선택해주세요.</div>
            </Button>
        </div>

        <RankingSection />

        <Footer title='카카오톡 선물하기'  />
    </div>
  )
}

export default Main