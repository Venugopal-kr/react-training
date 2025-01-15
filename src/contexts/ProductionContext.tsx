import { createContext } from 'react';
import { LineOrder, ProductionOrder } from '../models/models';

interface ProductionContextProps {
  productionOrders: ProductionOrder[];
  productionLineStatus: LineOrder[];
  productionFailures: string[];
}

export const ProductionContext = createContext<ProductionContextProps | undefined>(undefined);