import React, { useState } from 'react';
import { useEffect } from 'react';
import { debounce } from 'lodash';

const DebouncingComponent = () => {
  const [query, setQuery] = useState('');

  // Debounced search function
  const debouncedSearch = debounce((query) => {
    console.log("Searching for:", query);
  }, 500); // 500ms debounce

  useEffect(() => {
    debouncedSearch(query);
    // Cleanup function to cancel debounced function if the component is unmounted
    return () => debouncedSearch.cancel();
  }, [query]); // Runs when 'query' state changes

  return (
    <input
      type="text"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
};

export default DebouncingComponent;
