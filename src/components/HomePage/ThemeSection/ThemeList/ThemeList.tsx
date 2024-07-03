import { Link } from 'react-router-dom';

import { themeData } from '@/mocks/mockData';

import { Content } from '@/components/ui/Layout/Content';
import { Grid } from '@/components/ui/Layout/Grid';

import { ThemeListItem } from './ThemeListItem';
import { themeListStyle } from './styles';

export const ThemeList = () => {
  return (
    <Content height="fit-content" justifyContent="center">
      <Grid
        css={themeListStyle}
        columns={{
          initial: 4,
          lg: 6,
          md: 6,
          sm: 4,
        }}
      >
        {themeData.map((theme) => {
          return (
            <Link to={`/theme/${theme.id}`}>
              <ThemeListItem key={theme.id} theme={theme} />
            </Link>
          );
        })}
      </Grid>
    </Content>
  );
};
