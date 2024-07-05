import useFilter from '@/hooks/custom-hooks/useFilter';
import type { GenderFilter, GiftFilter } from '@/interfaces/FilterInterface';
import PopGiftList from '@/pages/main/components/PopGiftList';
import {
  GenderBtn,
  GenderBtnText,
  GenderContainer,
  GenderExText,
  GenderNav,
  PopBtn,
  PopularContainer,
  PopularNav,
  PopularWrapper,
  Title,
} from '@/pages/main/components/PopularGift.style';

type GenderButtonType = {
  key: GenderFilter;
  text: string;
  exText: string;
};

const genderButtons: GenderButtonType[] = [
  { key: 'ALL', text: 'ALL', exText: '전체' },
  { key: 'FEMALE', text: '👩🏻‍🦳', exText: '여성이' },
  { key: 'MALE', text: '👨🏻‍🦳', exText: '남성이' },
  { key: 'TEEN', text: '👦🏻', exText: '청소년이' },
];

type PopularNavButtonType = {
  key: GiftFilter;
  text: string;
};

const popularNavButtons: PopularNavButtonType[] = [
  { key: 'WANT', text: '받고 싶어한' },
  { key: 'GIVEN', text: '많이 선물한' },
  { key: 'WISHED', text: '위시로 받은' },
];

const PopularGift = () => {
  const { genderFilter, giftFilter, changeGenderFilter, changeGiftFilter } = useFilter();

  return (
    <PopularContainer>
      <PopularWrapper>
        <Title>실시간 급상승 랭킹</Title>
        <GenderNav>
          <GenderContainer>
            {genderButtons.map((button) => (
              <GenderBtn key={button.key} onClick={() => changeGenderFilter(button.key)}>
                <GenderBtnText isSelected={genderFilter === button.key}>
                  {button.text}
                </GenderBtnText>
                <GenderExText>{button.exText}</GenderExText>
              </GenderBtn>
            ))}
          </GenderContainer>
          <PopularNav>
            {popularNavButtons.map((button) => (
              <PopBtn
                key={button.key}
                onClick={() => changeGiftFilter(button.key)}
                isSelected={giftFilter === button.key}
              >
                {button.text}
              </PopBtn>
            ))}
          </PopularNav>
        </GenderNav>
        <PopGiftList genderFilter={genderFilter} giftFilter={giftFilter} />
      </PopularWrapper>
    </PopularContainer>
  );
};

export default PopularGift;
