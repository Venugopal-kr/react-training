import { createContext } from 'react';
import { LineEquipment } from '../models/models';

interface ProductionContextProps {
  productionLineStatus: LineEquipment[];
}

export const ProductionContext = createContext<ProductionContextProps | undefined>(undefined);