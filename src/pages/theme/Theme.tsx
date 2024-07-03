import Header from './components/Header';
import Items from './components/Items';

const Theme = () => {
  return (
    <div>
      <Header
        label="가벼운 선물"
        text="예산은 가볍게, 감동은 무겁게❤️"
        description="당신의 센스를 뽐내줄 부담 없는 선물"
        backgroundColor="#3e3e3e"
      />
      <Items />
    </div>
  );
};

export default Theme;
