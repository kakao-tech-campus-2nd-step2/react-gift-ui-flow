import { Button } from '@/components/common/Button';

const MyAccountPage = () => {
  const handleLogout = () => {
    alert(`로그아웃 처리`);
  };

  return (
    <div>
      <Button onClick={handleLogout} theme="outline" size="responsive">
        로그아웃
      </Button>
    </div>
  );
};

export default MyAccountPage;
