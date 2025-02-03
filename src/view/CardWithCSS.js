import React from 'react';
import './CardWithCSS.css';

function CardWithCSS() {
  return (
    <div className="card">
      <img className="card-image" src="https://via.placeholder.com/400x200" alt="Sample" />
      <div className="card-content">
        <h2 className="card-title">Card Title</h2>
        <p className="card-description">
          This is a simple card component with regular CSS. It has an image, a title,
          some descriptive text, and a button.
        </p>
      </div>
      <div className="card-actions">
        <button className="card-button">Read More</button>
      </div>
    </div>
  );
}

export default CardWithCSS;
