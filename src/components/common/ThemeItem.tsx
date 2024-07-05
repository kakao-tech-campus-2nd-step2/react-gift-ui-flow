import { useNavigate } from 'react-router-dom';

type Props = {
  themeKey: string;
  themeName: string;
};

const ThemeItem: React.FC<Props> = ({ themeKey, themeName }) => {
  const naviget = useNavigate();

  const handleClick = () => {
    naviget(`/theme/${themeKey}`);
  };

  return (
    <div onClick={handleClick} style={itemStyle}>
      {themeName}
    </div>
  );
};

const itemStyle: React.CSSProperties = {
  //
  cursor: 'pointer',
  padding: '10px',
  border: '1px solid #ccc',
  margin: '10px 0',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  transition: 'background-color 0.3s',
};

export default ThemeItem;
