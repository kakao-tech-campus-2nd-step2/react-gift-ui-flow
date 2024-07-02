import React from 'react';
import { useParams } from 'react-router-dom';

const ThemePage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  // 해당 테마에 대한 데이터를 불러와서 표시하는 로직을 추가 가능

  return (
    <div>
      <h2>{themeKey} 테마 페이지</h2>
      {/* 테마에 대한 정보 표시 */}
    </div>
  );
};

export default ThemePage;
