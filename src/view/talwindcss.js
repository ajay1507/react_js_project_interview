
import React from 'react';
import CardWithCSS from './CardWithCSS';
import CardWithTailwind from './CardWithTailwind';

function Tailwind() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-10 bg-gray-100 p-5">
      <CardWithCSS />
      <CardWithTailwind />
    </div>
  );
}

export default Tailwind;
