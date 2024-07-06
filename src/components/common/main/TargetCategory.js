import './TargetCategory.css';

import React from 'react';

export default function TargetCategory({ icon, target, isSelected, onClick }) {
  return (
    <div className="targetCategory-container" onClick={onClick}>
      <div className={`${isSelected ? 'icon_selected' : 'targetCategory__icon'}`}>{icon}</div>
      <div className={`${isSelected ? 'target_selected' : 'targetCategory__target'}`}>{target}</div>
    </div>
  );
}
