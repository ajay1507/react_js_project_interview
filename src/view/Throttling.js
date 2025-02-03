import React, { useState, useEffect } from 'react';
import { throttle } from 'lodash';

const ScrollComponent = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  // Throttled scroll handler
  const throttledScroll = throttle(() => {
    setScrollPosition(window.scrollY);
  }, 200); // 200ms throttle

  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []); // Runs once on mount

  return (
    <div style={{ height: '2000px' }}>
      <h2>Scroll position: {scrollPosition}px</h2>
    </div>
  );
};

export default ScrollComponent;
