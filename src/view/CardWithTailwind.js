import React from 'react';

function CardWithTailwind() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <img
        className="w-full"
        src="https://via.placeholder.com/400x200"
        alt="Sample"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base">
          This is a simple card component with Tailwind CSS. It has an image, a title,
          some descriptive text, and a button.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Read More
        </button>
      </div>
    </div>
  );
}

export default CardWithTailwind;
