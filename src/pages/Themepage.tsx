import { useParams } from 'react-router-dom';

const Themepage: React.FC = () => {
  const { themeKey } = useParams<{ themeKey: string }>();

  return (
    <div>
      <h2>Theme: {themeKey}</h2>
      {
        //테마 추가하기
      }
    </div>
  );
};

export default Themepage;
