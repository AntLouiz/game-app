import React from 'react';
import { Board } from './features/board/Board';
import './App.css';

function App() {
  return (
    <div>
      <Board value={9} />
    </div>
  );
}

export default App;
