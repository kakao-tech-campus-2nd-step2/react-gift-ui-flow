import '@styles/rankingFilter.css';

import Grid from '@components/common/Layout/Grid';
import RankingFilterButton from '@components/Home/RankingFilterButton';
import { useState } from 'react';

function RankingFilter() {
  const [buttonSelected, setButtonSelected] = useState<'all' | 'man' | 'woman' | 'kid'>('all');
  const [lineSelected, setLineSelected] = useState<'want' | 'gift' | 'wish'>('want');

  return (
    <div className="ranking__filter">
      <Grid gap={100} columns={4} className="filter__button__grid">
        <RankingFilterButton
          selected={buttonSelected === 'all'}
          title="전체"
          text="ALL"
          onClick={() => setButtonSelected('all')}
        />
        <RankingFilterButton
          selected={buttonSelected === 'woman'}
          title="여성이"
          text="👩🏻‍🦳"
          onClick={() => setButtonSelected('woman')}
        />
        <RankingFilterButton
          selected={buttonSelected === 'man'}
          title="남성이"
          text="🧑🏻‍🦳"
          onClick={() => setButtonSelected('man')}
        />
        <RankingFilterButton
          selected={buttonSelected === 'kid'}
          title="청소년이"
          text="👦🏻"
          onClick={() => setButtonSelected('kid')}
        />
      </Grid>
      <div className="filter__line__frame">
        <button
          className={'filter__line__text' + (lineSelected === 'want' ? ' selected' : '')}
          onClick={() => setLineSelected('want')}
        >
          받고 싶어한
        </button>
        <button
          className={'filter__line__text' + (lineSelected === 'gift' ? ' selected' : '')}
          onClick={() => setLineSelected('gift')}
        >
          많이 선물한
        </button>
        <button
          className={'filter__line__text' + (lineSelected === 'wish' ? ' selected' : '')}
          onClick={() => setLineSelected('wish')}
        >
          위시로 받은
        </button>
      </div>
    </div>
  );
}

export default RankingFilter;
