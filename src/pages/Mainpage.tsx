import Header from '@/components/common/Header/Header';
import themeItem from '@/components/ThemeItem';
import { useFilter } from '@/hooks/useFilter';

const themes = [
  { key: 'birthday', name: 'Birthday' },
  { key: 'anniversary', name: 'Anniversary' },
];

const items = [
  //아이템 추가하기
];

const Mainpage: React.FC = () => {
  const { filter, changeFilter } = useFilter();
  const [showMore, setShowMore] = useState(false);

  const filterItems = items.filter((item) => {
    //추가하기
    return true;
  });

  //상품 6개만 보이기
  const displayedItems = showMore ? filterItems : filterItems.slice(0, 6);

  return (
    <div>
      <h2>Themes</h2>
      <div>
        {themes.map((theme) => (
          <themeItem key={theme.key} themeKey={theme.key} themeName={theme.name} />
        ))}
      </div>

      <h2>Trending Gifts</h2>
      <div>
        {displayedItems.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
      {filterItems.length > 6 && (
        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      )}
    </div>
  );
};

export default Mainpage;
