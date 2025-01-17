import React, { useState, useEffect, ReactNode } from 'react';
import { ProductionContext } from './ProductionContext';
import { fetchLineEquipments } from '../services/api';
import { LineEquipment } from '../models/models';



export const ProductionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [productionLineStatus, setProductionLineStatus] = useState<LineEquipment[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchLineEquipments();
        setProductionLineStatus(data);
      } catch (err) {
        console.error('Failed to fetch production data', err);
      }
    };

    getData();
  }, []);

  return (
    <ProductionContext.Provider value={{ productionLineStatus}}>
      {children}
    </ProductionContext.Provider>
  );
};