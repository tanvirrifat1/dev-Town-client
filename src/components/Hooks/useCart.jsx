import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../hooks/useAuth';

const useCart = () => {
  const { user } = useAuth();

  const { cart, refetch, isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        `https://dev-town-server-2.vercel.app/api/v1/task?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [cart, refetch];
};

export default useCart;
