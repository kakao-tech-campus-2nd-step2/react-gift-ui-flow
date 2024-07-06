import './PresentBoard.css';

import React from 'react';

import { themeData } from '@/components/common/Theme/themeData';

import PresentItem from './PresentItem';

export default function PresentBoard() {
  return (
    <div className="PresentBoard-container">
      <div className="PresentBoard">
        {themeData.map((theme) => (
            <PresentItem themeKey={theme.key} giftCategory={theme.data.label} />
        ))}
      </div>
    </div>
  );
}
