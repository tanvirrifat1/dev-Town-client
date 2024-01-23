import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../hooks/useAuth";

const useCart = () => {
  const { user } = useAuth();

  const { cart, refetch, isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/api/v1/task?email=${user?.email}`
      );
      return res.json();
    },
  });
  return [cart, refetch];
};

export default useCart;
