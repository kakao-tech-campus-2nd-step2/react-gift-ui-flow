import './../styles/Home.css';

import React from 'react';

import GiftRanking from '../components/GiftRanking';

const Home: React.FC = () => {
    const handleSelectFriend = () => {
        alert('선물 받을 친구 선택하기');
      };
      return (
    <div className="home-container">
        <section className="select-section">
            <section className='sub'>
        <img src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png" onClick={handleSelectFriend}/>
        <h2>선물 받을 친구를 선택해주세요.</h2>
        </section>
        </section>
      <section className="category-section">
        {['생일', '졸업선물', '스몰럭셔리', '명품선물', '결혼/집들이', '따뜻한 선물', '가벼운선물', '팬심저격', '교환권', '건강/비타민', '과일/한우', '출산/키즈'].map((category) => (
          <div className="category-item" key={category}>
            <img src="https://img1.daumcdn.net/thumb/S104x104/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fgift%2Fhome%2Ftheme%2F292020231106_MXMUB.png" alt={category} />
            <p>{category}</p>
          </div>
        ))}
      </section>
      <div className="banner">
        <div className='sub-banner'>AI가 추천하는 선물</div>
        <div className='main-banner'>선물을 추천받고 싶은 친구를 선택해주세요.</div>
    </div>
      <section className="gift-section">
        <GiftRanking />
      </section>
    </div>
  );
};

export default Home;
