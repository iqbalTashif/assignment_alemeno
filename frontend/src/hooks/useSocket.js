import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const useSocket = (url) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(url); // Replace with your server URL
    setSocket(newSocket);

    return () => newSocket.disconnect();
  }, [url]);

  return socket;
};
