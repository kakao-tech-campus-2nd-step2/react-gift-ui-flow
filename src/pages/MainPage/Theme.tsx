import { useNavigate } from 'react-router-dom';

import { Grid } from '@/components/common/layouts/Grid';
import { GetTheme } from '@/components/Header/GetTheme';

const Theme = () => {
  const navigate = useNavigate();
  const themes = GetTheme();

  const handleThemeClick = (themeKey: string) => {
    navigate(`/theme/${themeKey}`);
  };

  return (
    <section>
      <Grid columns={{ sm: 4, md: 5, lg: 6 }} gap={20}>
        {Object.keys(themes).map((key) => (
          <div key={key}>
            <button onClick={() => handleThemeClick(key)}>{themes[key].label}</button>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default Theme;
