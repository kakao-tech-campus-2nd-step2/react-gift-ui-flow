import './Banner.css';

import React from 'react';
import { useParams } from 'react-router-dom';

export default function Banner() {
  const { themeKey } = useParams();

  const themeData = [
    {
      key: 'birthday',
      data: {
        label: '가벼운 선물',
        title: '예산은 가볍게, 감동은 무겁게❤️',
        description: '당신의 센스를 뽐내줄 부담 없는 선물',
        bgColor: '#fff',
      },
    },
    {
      key: 'graduation_gift',
      data: {
        label: '가벼운 선물',
        title: '예산은 가볍게, 감동은 무겁게❤️',
        description: '당신의 센스를 뽐내줄 부담 없는 선물',
        bgColor: '#fff',
      },
    },
    {
      key: 'small_luxury',
      data: {
        label: '가벼운 선물',
        title: '예산은 가볍게, 감동은 무겁게❤️',
        description: '당신의 센스를 뽐내줄 부담 없는 선물',
        bgColor: '#fff',
      },
    },
    {
      key: 'luxury_gift',
      data: {
        label: '가벼운 선물',
        title: '예산은 가볍게, 감동은 무겁게❤️',
        description: '당신의 센스를 뽐내줄 부담 없는 선물',
        bgColor: '#fff',
      },
    },
    {
      key: 'marriage-households',
      data: {
        label: '가벼운 선물',
        title: '예산은 가볍게, 감동은 무겁게❤️',
        description: '당신의 센스를 뽐내줄 부담 없는 선물',
        bgColor: '#fff',
      },
    },
    {
      key: 'warm_present',
      data: {
        label: '가벼운 선물',
        title: '예산은 가볍게, 감동은 무겁게❤️',
        description: '당신의 센스를 뽐내줄 부담 없는 선물',
        bgColor: '#fff',
      },
    },
    {
      key: 'light_present',
      data: {
        label: '가벼운 선물',
        title: '예산은 가볍게, 감동은 무겁게❤️',
        description: '당신의 센스를 뽐내줄 부담 없는 선물',
        bgColor: '#fff',
      },
    },
    {
      key: 'for_the_fans',
      data: {
        label: '가벼운 선물',
        title: '예산은 가볍게, 감동은 무겁게❤️',
        description: '당신의 센스를 뽐내줄 부담 없는 선물',
        bgColor: '#fff',
      },
    },
    {
      key: 'coupon',
      data: {
        label: '가벼운 선물',
        title: '예산은 가볍게, 감동은 무겁게❤️',
        description: '당신의 센스를 뽐내줄 부담 없는 선물',
        bgColor: '#fff',
      },
    },
    {
      key: 'health-vitamin',
      data: {
        label: '가벼운 선물',
        title: '예산은 가볍게, 감동은 무겁게❤️',
        description: '당신의 센스를 뽐내줄 부담 없는 선물',
        bgColor: '#fff',
      },
    },
    {
      key: 'fruit-korean_beef',
      data: {
        label: '가벼운 선물',
        title: '예산은 가볍게, 감동은 무겁게❤️',
        description: '당신의 센스를 뽐내줄 부담 없는 선물',
        bgColor: '#fff',
      },
    },
    {
      key: 'birth-kids',
      data: {
        label: '가벼운 선물',
        title: '예산은 가볍게, 감동은 무겁게❤️',
        description: '당신의 센스를 뽐내줄 부담 없는 선물',
        bgColor: '#fff',
      },
    },
  ];

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
