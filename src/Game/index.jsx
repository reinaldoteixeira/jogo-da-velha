import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import styles from './styles';

import { requesterService } from '../services';

const calculateWinner = async () => {
  try {
    const result = await requesterService.post('/');
    return result.data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const Game = () => {
  const [history, setHistory] = useState([{
    squares: Array(9).fill(null),
  }]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  useEffect(() => {
    calculateWinner();
  }, []);

  const handleClick = (i) => {
    const subHistory = history.slice(0, stepNumber + 1);
    const current = subHistory[subHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';

    setHistory(subHistory.concat([{
      squares: squares,
    }]));
    setStepNumber(history.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };


  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>
          {desc}
        </button>
      </li>
    );
  });

  const nexPlayer = xIsNext ? 'X' : 'O';
  const status = winner ?
    `Winner: ${winner}` :
    `Next player: ${nexPlayer}`;

  return (
    <div style={styles.game}>
      <div style={styles.gameBoard}>
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div style={styles.gameInfo}>
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
