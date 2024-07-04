import styled from '@emotion/styled';

import MyPageBox from '@/pages/mypage/components/MyPageBox';
import { Layout } from '@/styles/Layout';

const MyPageLayout = styled(Layout)`
  padding: 80px 0px 120px;
  font-size: 36px;
  font-weight: 700;
`;

const MyPage = () => {
  return (
    <MyPageLayout>
      <MyPageBox />
    </MyPageLayout>
  );
};

export default MyPage;
