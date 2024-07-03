//import React from 'react'

import './Main.css'

import { useState } from 'react'

import { Button } from '@/components/common/Button'
import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import { Image } from '@/components/common/Image'

import category01 from '../images/category01.png'
import choonsik from '../images/choonsik.png'

const Main = () => {

    const categoryData = [
        {id: 1, img: category01, text: '생일'},
        {id: 2, img: category01, text: '졸업선물'},
        {id: 3, img: category01, text: '스몰럭셔리'},
        {id: 4, img: category01, text: '명품선물'},
        {id: 5, img: category01, text: '결혼/집들이'},
        {id: 6, img: category01, text: '따뜻한선물'},
        {id: 7, img: category01, text: '가벼운선물'},
        {id: 8, img: category01, text: '팬심저격'},
        {id: 9, img: category01, text: '교환권'},
        {id: 10, img: category01, text: '건강/비타민'},
        {id: 11, img: category01, text: '과일/한우'},
        {id: 12, img: category01, text: '출산/키즈'}
    ]

    const [selectedItemWho, setSelectedItemWho] = useState<string>('all');

    const handleSelectWho = (item: string) => {
        setSelectedItemWho(item);
    };


    const [selectedItemWhich, setSelectedItemWhich] = useState<string>('받고 싶어한');

    const handleSelectWhich = (item: string) => {
        setSelectedItemWhich(item);
    };

    

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

        <div className='categories'>
            {categoryData.map((category) => (
                <div key={category.id} className='categoryContainer'>
                <Image
                    src={category.img}
                    alt={`category${category.id}`}
                    radius={20}
                    ratio={'square'}
                    width={90}
                    height={90}
                />
                <div className='categoryText'>{category.text}</div>
            </div>
            ))}
        </div>

        <div className='buttonContainer'>
            <Button theme='kakao' size='responsive' className='button01'>
                <div className='buttonSubtitle'>AI가 추천하는 선물</div>
                <div className='buttonTitle'>선물을 추천받고 싶은 친구를 선택해주세요.</div>
            </Button>
        </div>

        <div className='rankingContainer'>
            <div className='rankingTitle'>실시간 급상승 선물랭킹</div>
            <div className='rankingSelectWhoContainer'>
                <div className={`rankingWhoItemContainer ${selectedItemWho === 'all' ? 'selectedItemWho' : ''}`} onClick={() => handleSelectWho('all')}>
                    <div className='whoItemImg'>ALL</div>
                    <div className='whoItemText'>전체</div>
                </div>
                <div className={`rankingWhoItemContainer ${selectedItemWho === 'woman' ? 'selectedItemWho' : ''}`} onClick={() => handleSelectWho('woman')}>
                    <div className='whoItemImg'>👩🏻‍🦳</div>
                    <div className='whoItemText'>여성이</div>
                </div>
                <div className={`rankingWhoItemContainer ${selectedItemWho === 'man' ? 'selectedItemWho' : ''}`} onClick={() => handleSelectWho('man')}>
                    <div className='whoItemImg'>👨🏻‍🦳</div>
                    <div className='whoItemText'>남성이</div>
                </div>
                <div className={`rankingWhoItemContainer ${selectedItemWho === 'children' ? 'selectedItemWho' : ''}`} onClick={() => handleSelectWho('children')}>
                    <div className='whoItemImg'>👦🏻</div>
                    <div className='whoItemText'>청소년이</div>
                </div>
            </div>
            <div className='rankingSelectBox'>
                <div className={`rankingBoxItem ${selectedItemWhich === '받고 싶어한' ? 'selectedItemWhich' : ''}`} onClick={() => handleSelectWhich('받고 싶어한')}>받고 싶어한</div>
                <div className={`rankingBoxItem ${selectedItemWhich === '많이 선물한' ? 'selectedItemWhich' : ''}`} onClick={() => handleSelectWhich('많이 선물한')}>많이 선물한</div>
                <div className={`rankingBoxItem ${selectedItemWhich === '위시로 받은' ? 'selectedItemWhich' : ''}`} onClick={() => handleSelectWhich('위시로 받은')}>위시로 받은</div>
            </div>
        </div>
        
        <Footer title='카카오톡 선물하기'  />
    </div>
  )
}

export default Main