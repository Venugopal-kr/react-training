import React, { useState, useEffect, ReactNode } from 'react';
import { ProductionContext } from './ProductionContext';
import { fetchProductionData } from '../services/api';
import { LineOrder, ProductionOrder } from '../models/models';



export const ProductionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productionOrders, setProductionOrders] = useState<ProductionOrder[]>([]);
  const [productionLineStatus, setProductionLineStatus] = useState<LineOrder[]>([]);
  const [productionFailures, setProductionFailures] = useState<string[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchProductionData() as { orders: ProductionOrder[], lineStatus: LineOrder[], failures: string[] };
        setProductionOrders(data.orders);
        setProductionLineStatus(data.lineStatus);
        setProductionFailures(data.failures);
      } catch (err) {
        console.error('Failed to fetch production data', err);
      }
    };

    getData();
  }, []);

  return (
    <ProductionContext.Provider value={{ productionOrders, productionLineStatus, productionFailures}}>
      {children}
    </ProductionContext.Provider>
  );
};