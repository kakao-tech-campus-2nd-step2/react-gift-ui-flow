import React from 'react';

import ChooseBtn from './ChooseBtn';
import ChooseFriend from './ChooseFriend';
import PresentBoard from './PresentBoard';

export default function ThemeCategory() {
  return (
    <div>
      <ChooseFriend />
      <PresentBoard />
      <ChooseBtn />
    </div>
  );
}
