import { Link } from 'react-router-dom';

import { themeData } from '@/mocks/mockData';

import { Content } from '@/components/Content';
import { Grid } from '@/components/ui/Layout/Grid';

import { ThemeListItem } from './ThemeListItem';
import { themeListStyle } from './styles';

export const ThemeList = () => {
  return (
    <Content height="fit-content" justifyContent="center">
      <Grid
        columns={{
          initial: 4,
          lg: 6,
          md: 4,
          sm: 4,
        }}
        css={themeListStyle}
      >
        {themeData.map((theme) => {
          return (
            <Link key={theme.id} to={`/theme/${theme.id}`}>
              <ThemeListItem theme={theme} />
            </Link>
          );
        })}
      </Grid>
    </Content>
  );
};
