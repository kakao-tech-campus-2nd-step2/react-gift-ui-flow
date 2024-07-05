import { Button } from '@/components/common/Button';
import { useLogout } from '@/pages/MyAccountPage/useLogout';

const MyAccountPage = () => {
  const handleLogout = useLogout();

  return (
    <div>
      <Button onClick={handleLogout} theme="outline" size="responsive">
        로그아웃
      </Button>
    </div>
  );
};

export default MyAccountPage;
