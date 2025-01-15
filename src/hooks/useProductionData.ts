import { useState, useEffect } from 'react';
import { fetchProductionOrders } from '../services/api';

interface ProductionData {
  totalOrders: number;
  completedOrders: number;
}

const useProductionData = () => {
  const [data, setData] = useState<ProductionData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchProductionOrders();
        setData(response);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch production data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useProductionData;