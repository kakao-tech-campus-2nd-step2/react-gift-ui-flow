import React from 'react';
import { useParams } from 'react-router-dom';

import { DefaultGoodsItems } from '@/components/common/GoodsItem/Default';
import HeroSection from '@/components/common/HeroSection';
import { Container } from '@/components/common/layouts/Container';
import { Grid } from '@/components/common/layouts/Grid';
import { themes } from '@/styles/themes';

const Theme: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: keyof typeof themes }>();

  if (!themeKey || !themes[themeKey]) {
    return <div>Not found</div>;
  }

  return (
    <>
      <HeroSection themeKey={themeKey} />
      <section style={{ padding: '40px 16px 360px' }}>
        <Container>
          <Grid gap={16} columns={4}>
            {Array.from({ length: 21 }, (_, index) => (
              <DefaultGoodsItems
                key={index}
                imageSrc="https://st.kakaocdn.net/product/gift/product/20231030175450_53e90ee9708f45ffa45b3f7b4bc01c7c.jpg"
                subtitle="BBQ "
                title="BBQ 양념치킨+크림치즈볼+콜라1.25L"
                amount={29000}
              />
            ))}
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Theme;
