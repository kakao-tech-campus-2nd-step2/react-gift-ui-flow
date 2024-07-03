import '@/components/common/Header/Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="title">
          <img
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/pc_gift_logo.png"
            alt="카카오 선물하기 로고"
          />
        </div>
        <div className="login">
          <p>로그인</p>
        </div>
      </div>
    </header>
  );
};
