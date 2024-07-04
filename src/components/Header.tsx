interface Theme {
  label: string;
  title: string;
  description: string;
  backgroundColor: string;
}

const themeConfig: Record<string, Theme> = {
  theme1: {
    label: '생일테마',
    title: '감동을 높여줄 생일 선물 리스트',
    description: '예산에 쏙쏙 맞춰 AI가 자동으로 추천드려요!',
    backgroundColor: '#5949a3',
  },
  theme2: {
    label: '스몰럭셔리',
    title: '당신을 위한 작은 사치,',
    description: '스몰 럭셔리 아이템',
    backgroundColor: '#765241',
  },
  theme3: {
    label: '명품선물',
    title: '품격있는 명품 선물 제안',
    description: '소중한 이에게 명품의 품격을 선물하세요',
    backgroundColor: '#515c7a',
  },
  theme4: {
    label: '가벼운선물',
    title: '예산은 가볍게, 감동은 무겁게❤️',
    description: '당신의 센스를 뽐내줄 부담 없는 선물',
    backgroundColor: '#4b4d50',
  },
  theme5: {
    label: '시원한선물',
    title: '시원한 여름 선물',
    description: '여름을 시원하게 보낼 수 있는 선물',
    backgroundColor: '#515c7a',
  },
  theme6: {
    label: '결혼/집들이',
    title: '결혼 및 집들이 선물 제안',
    description: '새로운 출발을 축하하는 선물',
    backgroundColor: '#515c7a',
  },
  theme7: {
    label: '응원/시험',
    title: '응원과 시험 선물 제안',
    description: '시험을 응원하는 선물',
    backgroundColor: '#515c7a',
  },
  theme8: {
    label: '팬심저격',
    title: '팬심을 저격하는 선물',
    description: '팬을 위한 특별한 선물',
    backgroundColor: '#515c7a',
  },
  theme9: {
    label: '교환권',
    title: '교환권 선물 제안',
    description: '소중한 이에게 교환권을 선물하세요',
    backgroundColor: '#515c7a',
  },
  theme10: {
    label: '건강/비타민',
    title: '건강을 위한 선물',
    description: '소중한 건강을 위한 비타민 선물',
    backgroundColor: '#515c7a',
  },
  theme11: {
    label: '과일/한우',
    title: '과일과 한우 선물',
    description: '신선한 과일과 한우를 선물하세요',
    backgroundColor: '#515c7a',
  },
  theme12: {
    label: '출산/키즈',
    title: '출산 및 키즈 선물 제안',
    description: '출산을 축하하고 키즈를 위한 선물',
    backgroundColor: '#515c7a',
  },
};

interface HeaderProps {
  themeKey?: string;
}

const Header = ({ themeKey }: HeaderProps) => {
  const theme = themeKey ? themeConfig[themeKey] : null;

  return (
    <header style={{ backgroundColor: theme?.backgroundColor || 'transparent' }}>
      {theme ? (
        <>
          <h1>{theme.label}</h1>
          <h2>{theme.title}</h2>
          <p>{theme.description}</p>
        </>
      ) : (
        <h1>기본 헤더</h1>
      )}
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/my-account">My Account</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
