//import React from 'react'

import './Theme.css'

import Header from "@/components/common/Header"
import SubHeader from "@/components/common/Header/SubHeader"


const Theme = () => {
    
  return (
    <div className="ThemePage">
        <div className='header'>
            <Header title={'선물하기'} subtitle={'로그인'}  />
        </div>
        <div className="themeContainer">
            <SubHeader label={"가벼운 선물"} title={"예산은 가볍게, 감동은 무겁게❤️"} description={"당신의 센서를 뽐내줄 부담 없는 선물"} backgroundColor={"#4C4C4C"} />
        </div>
    </div>
  )
}

export default Theme