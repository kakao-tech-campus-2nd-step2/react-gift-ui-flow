import '@styles/myAccount.css';

function MyAccount() {
  return (
    <div className="my-account">
      <p className="my-account__title">닉네임님 안녕하세요!</p>
      <button className="my-account__logout">로그아웃</button>
    </div>
  );
}

export default MyAccount;
