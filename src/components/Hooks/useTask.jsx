import axios from 'axios';
import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';

const useTask = () => {
  const { user } = useAuth();

  const {
    data: task,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const response = await axios.get(
        `https://dev-town-server-2.vercel.app/api/v1/task?email=${user?.email}`
      );
      return response.data;
    },
  });

  return [task, refetch, isLoading];
};

export default useTask;
