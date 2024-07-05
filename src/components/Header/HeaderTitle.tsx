import { themeConfig } from '@/components/themeConfig';

interface HeaderTitleProps {
  themeKey?: string;
}

const HeaderTitle = ({ themeKey }: HeaderTitleProps) => {
  const theme = themeKey ? themeConfig[themeKey] : null;

  return (
    <div>
      {theme ? (
        <>
          <h1>{theme.label}</h1>
          <h2>{theme.title}</h2>
          <p>{theme.description}</p>
        </>
      ) : (
        <h1>선물하기</h1>
      )}
    </div>
  );
};

export default HeaderTitle;
