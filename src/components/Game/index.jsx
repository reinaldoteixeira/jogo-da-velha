import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Board from '../Board';
import styles from './styles';
import { requesterService } from '../../services';

const calculateWinner = async (squares) => {
  try {
    return requesterService.post('/', {
      squares,
    });
  } catch (err) {
    return err;
  }
};

const Game = (props) => {
  const { historyProps } = props;
  const [history, setHistory] = useState(historyProps);
  const [stepNumber, setStepNumber] = useState(0);
  const [current, setCurrent] = useState(historyProps[0]);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const defineWinner = async (squares) => {
    setWinner(await calculateWinner(squares));
  };

  useEffect(() => {
    setHistory(historyProps);
    setCurrent(historyProps[historyProps.length - 1]);
    defineWinner(historyProps[historyProps.length - 1].squares);
    setStepNumber(historyProps.length - 1);
  }, [historyProps]);

  useEffect(() => {
    setStepNumber(history.length - 1);
    setCurrent(history[history.length - 1]);
  }, [history]);

  const handleClick = async (i) => {
    const subHistory = history.slice(0, stepNumber + 1);
    const subCurrent = subHistory[subHistory.length - 1];
    const squares = subCurrent.squares.slice();
    if (historyProps.length > 1 || winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(subHistory.concat([{
      squares,
    }]));
    setXIsNext((x) => !x);
    defineWinner(squares);
  };

  const jumpTo = async (step) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
    setCurrent(history[step]);
    defineWinner(history[step].squares);
  };

  const moves = history.map((step, move) => {
    const desc = move
      ? `Go to move #${move}`
      : 'Go to game start';
    return (
      <li key={move}>
        <button type="button" onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  const nextPlayer = xIsNext ? 'X' : 'O';

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${nextPlayer}`;

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

Game.propTypes = {
  historyProps: PropTypes.arrayOf(PropTypes.object),
};
Game.defaultProps = {
  historyProps: [{
    squares: Array(9).fill(null),
  }],
};

export default Game;
