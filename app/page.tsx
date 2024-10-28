'use client'
import { useEffect, useState } from 'react';
import socket from '../utils/socket';

const Home = () => {
  const [randomIntegers, setRandomIntegers] = useState([]);

  useEffect(() => {
    socket.on('randomIntegers', (data) => {
      console.log('Received random integers:', data);
      setRandomIntegers(data);
    });

    return () => {
      socket.off('randomIntegers');
    };
  }, []);

  return (
    <div>
      <h1>Socket.IO Random Integers</h1>
      <ul>
        {randomIntegers.map((num, index) => (
          <li key={index}>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
