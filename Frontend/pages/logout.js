import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Logout() {
  const [message, setMessage] = useState('loading');
  const router = useRouter();

  useEffect(() => {
    async function run() {
      try {
        const response = await fetch('http://localhost/logout', {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const res = await response.json();
        setMessage(res.message);
        router.push('/');
      } catch (error) {
        console.error('Error during logout:', error);
        setMessage('An error occurred during logout');
        // You might want to handle the error state more gracefully
      }
    }

    run();
  }, []);

  return <div>{message}</div>;
}

export default Logout;
