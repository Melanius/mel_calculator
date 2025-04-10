'use client';

import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [formula, setFormula] = useState('');
  const [calculated, setCalculated] = useState(false);
  const { theme } = useTheme();

  const themeClasses = {
    light: 'bg-white text-gray-800 shadow-lg',
    dark: 'bg-gray-800 text-white shadow-lg',
    blue: 'bg-blue-900 text-white shadow-blue-300/30',
    purple: 'bg-purple-900 text-white shadow-purple-300/30',
  };

  const buttonClasses = {
    light: {
      number: 'bg-gray-100 hover:bg-gray-200 text-gray-800',
      operator: 'bg-blue-500 hover:bg-blue-600 text-white',
      equals: 'bg-green-500 hover:bg-green-600 text-white',
      clear: 'bg-red-500 hover:bg-red-600 text-white',
    },
    dark: {
      number: 'bg-gray-700 hover:bg-gray-600 text-white',
      operator: 'bg-blue-800 hover:bg-blue-700 text-white',
      equals: 'bg-green-800 hover:bg-green-700 text-white',
      clear: 'bg-red-800 hover:bg-red-700 text-white',
    },
    blue: {
      number: 'bg-blue-800 hover:bg-blue-700 text-white',
      operator: 'bg-indigo-600 hover:bg-indigo-500 text-white',
      equals: 'bg-teal-600 hover:bg-teal-500 text-white',
      clear: 'bg-red-600 hover:bg-red-500 text-white',
    },
    purple: {
      number: 'bg-purple-800 hover:bg-purple-700 text-white',
      operator: 'bg-pink-600 hover:bg-pink-500 text-white',
      equals: 'bg-green-600 hover:bg-green-500 text-white',
      clear: 'bg-red-600 hover:bg-red-500 text-white',
    },
  };

  const handleNumberClick = (num: string) => {
    if (calculated) {
      setDisplay(num);
      setFormula('');
      setCalculated(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const handleOperatorClick = (operator: string) => {
    if (calculated) {
      setFormula(display + ' ' + operator + ' ');
      setCalculated(false);
    } else {
      setFormula(formula + display + ' ' + operator + ' ');
    }
    setDisplay('0');
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(formula + display);
      setDisplay(String(result));
      setFormula(formula + display + ' = ');
      setCalculated(true);
    } catch (_) {
      setDisplay('Error');
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setFormula('');
    setCalculated(false);
  };

  const handleDecimalClick = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const handleBackspaceClick = () => {
    if (display.length === 1) {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  return (
    <div className={`calculator ${themeClasses[theme as keyof typeof themeClasses]} rounded-lg p-4 w-full max-w-xs`}>
      <div className="mb-4">
        <ThemeSwitcher />
      </div>
      <div className="formula-screen bg-gray-900 text-right p-2 mb-2 rounded h-8 overflow-x-auto text-gray-300 text-sm">
        {formula}
      </div>
      <div className="display bg-gray-900 text-right p-3 mb-4 rounded text-white text-2xl font-bold h-14 overflow-x-auto">
        {display}
      </div>
      <div className="grid grid-cols-4 gap-2">
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].clear} p-3 rounded text-xl`}
          onClick={handleClearClick}
        >
          C
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].operator} p-3 rounded text-xl`}
          onClick={handleBackspaceClick}
        >
          ←
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].operator} p-3 rounded text-xl`}
          onClick={() => handleOperatorClick('%')}
        >
          %
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].operator} p-3 rounded text-xl`}
          onClick={() => handleOperatorClick('/')}
        >
          ÷
        </button>

        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].number} p-3 rounded text-xl`}
          onClick={() => handleNumberClick('7')}
        >
          7
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].number} p-3 rounded text-xl`}
          onClick={() => handleNumberClick('8')}
        >
          8
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].number} p-3 rounded text-xl`}
          onClick={() => handleNumberClick('9')}
        >
          9
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].operator} p-3 rounded text-xl`}
          onClick={() => handleOperatorClick('*')}
        >
          ×
        </button>

        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].number} p-3 rounded text-xl`}
          onClick={() => handleNumberClick('4')}
        >
          4
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].number} p-3 rounded text-xl`}
          onClick={() => handleNumberClick('5')}
        >
          5
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].number} p-3 rounded text-xl`}
          onClick={() => handleNumberClick('6')}
        >
          6
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].operator} p-3 rounded text-xl`}
          onClick={() => handleOperatorClick('-')}
        >
          -
        </button>

        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].number} p-3 rounded text-xl`}
          onClick={() => handleNumberClick('1')}
        >
          1
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].number} p-3 rounded text-xl`}
          onClick={() => handleNumberClick('2')}
        >
          2
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].number} p-3 rounded text-xl`}
          onClick={() => handleNumberClick('3')}
        >
          3
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].operator} p-3 rounded text-xl`}
          onClick={() => handleOperatorClick('+')}
        >
          +
        </button>

        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].number} p-3 rounded text-xl col-span-2`}
          onClick={() => handleNumberClick('0')}
        >
          0
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].number} p-3 rounded text-xl`}
          onClick={handleDecimalClick}
        >
          .
        </button>
        <button
          className={`${buttonClasses[theme as keyof typeof buttonClasses].equals} p-3 rounded text-xl`}
          onClick={handleEqualsClick}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator; 
