//import React from 'react'

import './Main.css'

import { Link } from 'react-router-dom'

import CategorySection from '@/components/CategorySection/CategorySection'
import { Button } from '@/components/common/Button'
import Footer from '@/components/common/Footer'
import Header, { HeaderSubtitle, HeaderTitle } from '@/components/common/Header'
import { Image } from '@/components/common/Image'
import RankingSection from '@/components/RankingSection/RankingSection'
import { useAuth } from "@/context/AuthContext"

import choonsik from '../images/choonsik.png'

const Main = () => {

    const {authToken} = useAuth()

  return (
    <div className='MainPage'>
        <div className='header'>
            <Header>
                <Link to={'/'}>
                    <HeaderTitle>선물하기</HeaderTitle>
                </Link>
                <Link to={authToken ? '/my-account' : '/login'}>
                    <HeaderSubtitle>{authToken ? '내 계정' : '로그인'}</HeaderSubtitle>
                </Link>
            </Header>
            
        </div>

        <div className='mainContainer'>

            <div className='selectFriend'>
                <div className='choonsikContainer' onClick={() => alert("선물 받을 친구 선택하기")}>
                    <Image
                        src={choonsik}
                        alt='choonsik'
                        radius={20}
                        ratio={'square'}
                        width={70}
                        height={70}
                />
                </div>
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
    </div>
  )
}

export default Main