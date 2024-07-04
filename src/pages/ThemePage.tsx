import { useParams } from 'react-router-dom';

const ThemePage = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  return (
    <div>
      <h2>Theme Page</h2>
      <p>Current Theme: {themeKey}</p>
      {/* 추가적인 테마 페이지 컨텐츠 구현 */}
    </div>
  );
};

export default ThemePage;
