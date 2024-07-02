import styled from '@emotion/styled';

import Friend from '@/components/home/section1/Friend';
import Theme from '@/components/home/section2/Theme';
import Recommend from '@/components/home/section3/Recommend';
import Ranking from '@/components/home/section4/Ranking';

const DivHeight = styled.div`
  width: 100%;
  height: 120px;
`;

const Home = () => {
  return (
    <div>
      <Friend />
      <Theme />
      <Recommend />
      <DivHeight />
      <Ranking />
    </div>
  );
};

export default Home;
