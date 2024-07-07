import axios from 'axios';
import React, { useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = React.useState(false);

  const API_URL = '/api/data/users?timeout=10000';
  const timeout = 5000;

  const fetchUsers = (url: string, timeout: number) => {
    axios
      .get(url, { timeout: timeout })
      .then((response) => {
        const { users } = response.data;
        setUsers(users);
      })
      .catch((error) => {
        if (error.code === 'ECONNABORTED') {
          console.error('Error due to timeout');
          setError(true);
        } else {
          console.error('Error fetching data:', error);
        }
      });
  };

  const refetchUsers = () => {
    setError(false);
    fetchUsers(API_URL, timeout);
  };

  useEffect(() => {
    fetchUsers(API_URL, timeout);
  }, []);

  return { users, error, refetchUsers };
};
