import { useNavigate } from 'react-router-dom';

import { Image } from '@/components/common/Image';
import { Grid } from '@/components/common/layouts/Grid';
import { themes } from '@/components/Header/themes';

const Theme = () => {
  const navigate = useNavigate();

  const handleClick = (themeKey: string) => {
    navigate(`/theme/${themeKey}`);
  };

  return (
    <section>
      <Grid columns={{ sm: 4, md: 5, lg: 6 }} gap={20}>
        {Object.keys(themes).map((key) => (
          <div key={key} onClick={() => handleClick(key)}>
            <div>
              <Image src={themes[key].imageSrc} alt={themes[key].label} radius={100} />
              <h3>{themes[key].label}</h3>
            </div>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default Theme;
