import styled from '@emotion/styled';
import React from 'react';

import { Image } from '@/components/common/Image';

export const Banner: React.FC = () => {
  return (
    <Wrapper>
        <Content>
          <Image
            src="https://gift-s.kakaocdn.net/dn/gift/images/m640/bg_profile_default.png"
            alt="Profile Image"
            radius={10}
            ratio="auto"
            style={{ width: '100px', height: '100px' }}
            onClick={()=>{alert("선물 받을 친구 선택하기")}}
          />
          <Text>선물 받을 친구를 선택해주세요.</Text>
        </Content>
    </Wrapper>
  );
};

export default Banner;

const Wrapper = styled.section`
  padding: 16px;
  background-color: rgb(250, 250, 250);
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin: 0 auto;
`;

const Text = styled.p`
  padding-left: 16px;
  margin: 0;
`;
