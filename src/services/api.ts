/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { Product, ProductionLine, ProductionOrder } from '../models/models';

const API_BASE_URL = 'http://localhost:3000';

export const fetchProductionOrders = async (): Promise<any> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/productionData`);
        return response.data;
    } catch (error:any) {
        throw new Error('Error fetching production orders: ' + error.message);
    }
};

export const createProductionOrder = async (orderData:ProductionOrder) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/productionOrders`, orderData);
        return response.data;
    } catch (error:any) {
        throw new Error('Error creating production order: ' + error.message);
    }
};

export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products`);
        return response.data as Product[];
    } catch (error:any) {
        throw new Error('Error fetching production orders: ' + error.message);
    }
};


export const fetchProductionLine = async (): Promise<ProductionLine[]> => {
    try {
        const response = await axios.get(`${API_BASE_URL}/productionLines`);
        return response.data as ProductionLine[];
    } catch (error:any) {
        throw new Error('Error fetching production orders: ' + error.message);
    }
};

export const fetchProductionLineStatus = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/lineStatus`);
        return response.data;
    } catch (error:any) {
        throw new Error('Error fetching production line status: ' + error.message);
    }
};

export const reportProductionLineFailure = async (failureData:any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/production-line/failures`, failureData);
        return response.data;
    } catch (error:any) {
        throw new Error('Error reporting production line failure: ' + error.message);
    }
};

export const fetchProductionData = async () => {
    try {
      const ordersResponse = await axios.get(`${API_BASE_URL}/productionOrders`);
      const lineStatusResponse = await axios.get(`${API_BASE_URL}/lineOrders`);
      return {
        orders: ordersResponse.data,
        lineStatus: lineStatusResponse.data
      };
    } catch (error:any) {
      throw new Error('Failed to fetch production data ' + error.message);
    }
  };