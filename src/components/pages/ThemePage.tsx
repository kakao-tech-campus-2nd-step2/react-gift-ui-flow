import { useParams } from 'react-router-dom';

import { themes } from '../../data/themes';
import ThemeHeader from '../Theme/ThemeHeader';

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  // themeKey가 존재하지 않으면 기본값으로 빈 문자열을 사용
  const theme = themes[themeKey as keyof typeof themes] || '알 수 없는 테마';

  return (
    <div className="theme-page">
      <ThemeHeader
        label={theme.label}
        title={theme.title}
        description={theme.description}
        backgroundColor={theme.backgroundColor}
      />
    </div>
  );
};

export default ThemePage;
