import { io } from 'socket.io-client';

const socket = io('http://localhost:3001'); // Adjust the URL if necessary

// Optional: You can set up event listeners here
socket.on('connect', () => {
    console.log('Connected to WebSocket server');
});

socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server');
});

export default socket;
