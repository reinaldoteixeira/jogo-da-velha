import React, { useEffect, useState } from 'react';
import Game from '../../components/Game';
import { requesterService } from '../../services';

const PageSimulator = () => {
  const [simulation, setSimulation] = useState();

  const getSimulator = async () => {
    try {
      const response = await requesterService.get('/');
      setSimulation(response);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSimulator();
  }, []);

  return (
    <Game historyProps={simulation} />
  );
};

export default PageSimulator;
