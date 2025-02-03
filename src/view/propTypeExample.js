import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ name, age, isAdmin }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>Age: {age}</p>
      <p>{isAdmin ? 'Admin' : 'User'}</p>
    </div>
  );
}

// PropTypes validation
UserProfile.propTypes = {
  name: PropTypes.string.isRequired, // 'name' should be a string and is required
  age: PropTypes.number.isRequired,  // 'age' should be a number and is required
  isAdmin: PropTypes.bool,           // 'isAdmin' should be a boolean (optional)
};

export default UserProfile;
