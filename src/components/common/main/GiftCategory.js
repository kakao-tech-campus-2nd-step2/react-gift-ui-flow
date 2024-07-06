import './GiftCategory.css';

import React from 'react';

export default function GiftCategory({ isSelected, category, onClick }) {
  return (
    <div className="giftCategory-container">
      <div className={`${isSelected ? 'item_selected' : 'giftCategory__item'}`} onClick={onClick}>
        {category}
      </div>
    </div>
  );
}
