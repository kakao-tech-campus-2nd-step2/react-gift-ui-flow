import React from 'react';

import GiftRanking from '../components/GiftRanking';

const Home: React.FC = () => (
  <div>
    <h2>선물 받을 친구를 선택해주세요.</h2>
    <section>
      <div>
        {['생일', '졸업/입학', '스승의날', '명절/연휴', '결혼/기념일', '따뜻한선물', '커플선물', '집들이', '고급선물', '건강/취미', '간편식/간식', '준비중'].map((category) => (
          <div key={category}>
            <img src="https://via.placeholder.com/50" alt={category} />
            <p>{category}</p>
          </div>
        ))}
      </div>
    </section>
    <section>
      <GiftRanking />
    </section>
  </div>
);

export default Home;
