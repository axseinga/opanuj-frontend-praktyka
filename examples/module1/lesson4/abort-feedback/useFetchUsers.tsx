import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
}

export const usefetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState(false);

  const API_URL = '/api/data/users?timeout=10000';
  const timeout = 5000;

  const fetchUsers = (url: string, ms: number) => {
    fetchWithTimeout(url, ms)
      .then((response) => {
        if (response.ok) return response.json();
      })
      .then(({ users }) => {
        setUsers(users);
      })
      .catch((error) => {
        console.error(error), setError(true);
      });
  };

  const timeoutPromise = (ms: number): Promise<never> => {
    return new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Error due to timeout')), ms)
    );
  };

  const fetchWithTimeout = async (url: string, ms: number) => {
    return Promise.race<Promise<Response | never>>([
      fetch(url),
      timeoutPromise(ms),
    ]);
  };

  const retryFetchUsers = () => {
    setError(false);
    fetchUsers(API_URL, timeout);
  };

  useEffect(() => {
    fetchUsers(API_URL, timeout);
  }, []);

  return { users, error, retryFetchUsers };
};
