import { Button } from '@/components/common/Button';

const MyAccountPage = () => {
  const handleLogout = () => {
    console.log('로그아웃 처리');
  };

  return (
    <div>
      <h2>My Account Page</h2>
      <Button onClick={handleLogout} theme="outline" size="responsive">
        Logout
      </Button>
    </div>
  );
};

export default MyAccountPage;
