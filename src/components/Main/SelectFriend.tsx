import './SelectFriend.css';

export const SelectFriend = () => {
  return (
    <div className="select-friend-container">
      <div className="select-friend-content">
        <img
          className="select-friend-image"
          src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
          alt="프로필 이미지"
        />
        <p className="select-friend-text">선물 받을 친구를 선택해주세요.</p>
      </div>
    </div>
  );
};
