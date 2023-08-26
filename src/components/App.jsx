import React from 'react';

import Searchbar from './Searchbar/Searchbar';

const API_KEY = '6095343-d47de4ae86d54fd6f681d759d';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101'
      }}
    >
      <Searchbar/ >
    </div>
  );
};

