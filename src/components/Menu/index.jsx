import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <div>
      <button type="button">
        <Link to="/game">Game</Link>
      </button>
      <button type="button">
        <Link to="/simulator">Jogo Simulado</Link>
      </button>
    </div>
  );
};

export default Menu;
