'use client'
import { useEffect, useState } from 'react';
import socket from '../utils/socket';

const Home = () => {
  const [randomIntegers, setRandomIntegers] = useState(0);

  useEffect(() => {
    socket.on('randomInteger', (data) => {
      console.log('Received random integers:', data);
      setRandomIntegers(data);
    });

    return () => {
      socket.off('randomInteger');
    };
  }, []);

  return (
    <div>
      <h1>Socket.IO Random Integers</h1>
      <ul>
        <li>{randomIntegers}</li>
      </ul>
    </div>
  );
};

export default Home;
