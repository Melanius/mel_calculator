'use client';

import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { id: 'light', name: '라이트', emoji: '☀️' },
    { id: 'dark', name: '다크', emoji: '🌙' },
    { id: 'blue', name: '블루', emoji: '🌊' },
    { id: 'purple', name: '퍼플', emoji: '🔮' },
  ];

  return (
    <div className="flex justify-center gap-2">
      {themes.map((t) => (
        <button
          key={t.id}
          className={`p-2 rounded-full transition-all ${
            theme === t.id
              ? 'ring-2 ring-offset-2 ring-blue-500 bg-blue-100 dark:bg-blue-900'
              : 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
          onClick={() => setTheme(t.id as 'light' | 'dark' | 'blue' | 'purple')}
          title={t.name}
        >
          <span className="text-lg">{t.emoji}</span>
        </button>
      ))}
    </div>
  );
};

export default ThemeSwitcher; 