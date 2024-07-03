//import React from 'react'

import './Main.css'

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
  return (
    <div className='MainPage'>
        <Header title='선물하기' subtitle='로그인'/>

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
        
        <Footer title='카카오톡 선물하기' />
    </div>
  )
}

export default Main