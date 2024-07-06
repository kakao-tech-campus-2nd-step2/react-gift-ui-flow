import './Banner.css';

import React from 'react';
import { useParams } from 'react-router-dom';

import { themeData } from '@/components/common/Theme/themeData';

export default function Banner() {
  const { themeKey } = useParams();

  const selectedTheme = themeData.find((theme) => theme.key === themeKey);

  return (
    <div className="Banner">
      <div className="Banner-container">
        <div className="label">{selectedTheme.key}</div>
        <div className="title">{selectedTheme.data.title}</div>
        <div className="description">{selectedTheme.data.description}</div>
      </div>
    </div>
  );
}
