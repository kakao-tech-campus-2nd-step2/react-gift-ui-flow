const MyAccountPage = () => {
  const handleLogout = () => {
    // 로그아웃 처리 로직
    console.log('로그아웃 처리');
  };

  return (
    <div>
      <h2>My Account Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MyAccountPage;
